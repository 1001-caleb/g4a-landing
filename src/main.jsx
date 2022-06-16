import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from "../src/components/Navbar"
import Hero from '../src/components/Hero'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Hero/>
  </React.StrictMode>
)
