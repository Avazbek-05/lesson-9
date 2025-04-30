import React from 'react'
import Navbar from './components/navber/navbar'
import Wrapper from './components/wrapper/wrapper'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Basket from './pages/basket/basket'
import Like from './pages/like/like'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/like' element={<Like/>}/>
      </Routes>
    </div>
  )
}

export default App