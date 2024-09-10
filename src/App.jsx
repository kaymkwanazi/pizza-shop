import { useState } from 'react'
import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Navbar } from './components/Navbar'
import { OurMenu } from './Pages/OurMenu'
import { Order } from './Pages/Order'
import { About } from './Pages/About'
import { Footer } from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='' element={<Home />}></Route>
        <Route path='/menu' element={<OurMenu />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  )
}

export default App
