//react stuff
import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

//css
import './App.css'

//components
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import CreatePost from './pages/createpost/CreatePost';
import EditPost from './pages/editpost/EditPost';

//redux for user verification
import {  useSelector } from 'react-redux';
import MyPosts from './pages/myposts/MyPosts';
import About from './pages/about/About';



function App() {

  const user = useSelector(state => state.user)
  return (
    <div>

      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/signup' element = {<Signup/>} /> 
          <Route path = '/login' element ={<Login/>} />
          <Route path = '/post/createpost' element ={<CreatePost/>}/>
          <Route path = '/post/myposts' element ={<MyPosts/>} />
          <Route path = '/about' element = {<About />} />
          <Route path = '/post/edit/:id' element = {<EditPost />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App

