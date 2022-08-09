import React, { useState } from 'react'
import styled from 'styled-components'
import Pages from './pages/Pages'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <Container>
      <HorizontalLine />
      <Header />
      <HorizontalLine />
      <Pages />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
`

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--navyviolet);
`

export default App
