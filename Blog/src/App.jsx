import { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar'
import Register from './pages/Register/Register'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthentication } from './hooks/useAuthentication'
import CreatePost from './pages/CreatePost/CreatePost'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import { Navigate } from 'react-router-dom'

function App() {

  const [userVerification, setUserVerification] = useState(undefined)

  const {auth} = useAuthentication()

  const loading = userVerification === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserVerification(user)
    })
  }, [auth])

  if (loading){
    return <p>Carregando</p> 
  }else{
    console.log(userVerification)
  };

  return (
    <>
      <BrowserRouter>
        <AuthProvider value = {[userVerification]}>
          <Navbar/>
            <Routes>
              <Route path = '/' element={<Home/>}/>
              <Route path = '/about' element={<About/>}/>
              <Route path = '/register' element={!userVerification ? <Register/> : <Navigate to = '/'/>}/>
              <Route path = '/login' element={!userVerification ? <Login/> : <Navigate to = '/'/>}/>
              <Route path = '/post/createpost' element={userVerification ? <CreatePost/> : <Navigate to = '/'/>}/>
              <Route path = '/dashboard' element={userVerification ? <Dashboard/> : <Navigate to = '/'/>}/>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
    </>
  )
}

export default App
