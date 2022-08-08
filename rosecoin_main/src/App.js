import React, { useState } from 'react'
import styled from 'styled-components'
import Pages from './pages/Pages.jsx'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <HorizontalLine />
      <Header />
      <HorizontalLine />
      <Pages />
      <Footer />
    </>
  )
}

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--navyviolet);
`

export default App
