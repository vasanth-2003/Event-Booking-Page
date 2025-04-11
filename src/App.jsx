import { useState } from 'react'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Login from './Login'
import Home from './Home'
import './App.css'
import Navbar from './Navbar'


function App() {
  
  return(
    <BrowserRouter>  
    <Routes>
      <Route exact path = "login" element = {<Login/>}/>
      <Route exact path = "/" element = {<Home/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
