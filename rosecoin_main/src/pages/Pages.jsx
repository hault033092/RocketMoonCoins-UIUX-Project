import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './AboutUs'
import CoinDetail from './CoinDetail'
import ContactUs from './ContactUs'
import Home from './Home'
import Login from './Login'
import Promote from './Promote'
import Signup from './Signup'
import SubmitCoins from './SubmitCoins'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/submitcoin' element={<SubmitCoins />} />
      <Route path='/promote' element={<Promote />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/aboutus' element={<AboutUs />}></Route>
      <Route path='/coin/:name' element={<CoinDetail />}></Route>
    </Routes>
  )
}

export default Pages
