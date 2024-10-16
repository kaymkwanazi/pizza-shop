import { useState } from 'react'
import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Navbar } from './components/Navbar'
import { OurMenu } from './Pages/OurMenu'
import { About } from './Pages/About'
import { Footer } from './components/Footer'
import { ContactPage } from './Pages/ContactPage'
import { IngredientsList } from './components/IngredientsList'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        
        <Route path='' element={<Home />}></Route>
        <Route path='/menu' element={<OurMenu />}></Route>
        <Route path='/ingredientsList/:id' element= {<IngredientsList />} />
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  )
}

export default App
