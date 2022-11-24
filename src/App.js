import React from "react"
import {BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Footer from "./components/Footer"
import "./style/App.css"

function App(){

  // javascript 
  
  return(
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/contact" element={<Contact/>}>Contact</Route>
        <Route path="/services" element={<Services/>}>Services</Route>
      </Routes>
    <Footer />
    </Router>


  )
}
export default App
