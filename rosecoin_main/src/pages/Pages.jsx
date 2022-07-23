import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ContactUs from './ContactUs'
import Home from './Home'
import Promote from './Promote'
import SubmitCoins from './SubmitCoins'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/submitcoin' element={<SubmitCoins />} />
      <Route path='/promote' element={<Promote />} />
      <Route path='/contactus' element={<ContactUs />} />
    </Routes>
  )
}

export default Pages
