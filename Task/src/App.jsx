import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About'
import Contact from './Contact'

function App() {

  return (
    <>
    <Navbar />
    {/* <BrowserRouter> */}
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    {/* </BrowserRouter> */}
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Contact /> */}
    </>
  )
}

export default App
