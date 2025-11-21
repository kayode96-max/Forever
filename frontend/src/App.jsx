import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Collection from './pages/collection'
import Error from './pages/Error'
import Discount from './components/discount'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import About from './pages/About'



const App = () => {
  return (
    <div>
      <Discount />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections' element={ <Collection /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='*' element={ <Error /> } />

      </Routes>
      <Footer />
    </div>
  )
}

export default App