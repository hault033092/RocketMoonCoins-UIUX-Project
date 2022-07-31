import React from 'react'
import TopNavBar from './components/TopNavBar'
import styled from 'styled-components'
import Pages from './pages/Pages.jsx'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <HorizontalLine />
      <TopNavBar />
      <HorizontalLine />
      <Pages />
      <Footer />
    </>
  )
}

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #090e38;
`

export default App
