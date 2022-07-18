import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import TopNavBar from './components/TopNavBar'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import SubmitCoins from './pages/SubmitCoins'
import Promote from './pages/Promote'
import TopUtil from './components/TopUtil'

const App = () => {
  return (
    <>
      <TopUtil />
      <TopNavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/submitcoin' element={<SubmitCoins />} />
        <Route path='/promote' element={<Promote />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
