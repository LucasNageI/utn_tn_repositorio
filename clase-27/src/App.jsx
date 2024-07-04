import React from 'react'
import {Cart, Detail, Home, Contact} from "./Pages/index.js"
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/Detail/:productId" element={<Detail/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    </>
  )
}

export default App