import React from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Courses from './Courses/Courses'
import SignUp from './components/SignUp'
import Contact from './contact/Contact'

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={<Courses/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
    </div>
   

    </>
  )
}

export default App