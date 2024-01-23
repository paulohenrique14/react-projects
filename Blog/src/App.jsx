import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar'
import Register from './pages/Register/Register'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = '/about' element={<About/>}/>
          <Route path = '/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
