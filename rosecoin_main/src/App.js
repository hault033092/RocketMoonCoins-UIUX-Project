import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Pages from './pages/Pages'
import Footer from './components/Footer'
import Header from './components/Header'
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Pages />
      <Footer />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Vidaloka&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  :root {
  --font-main: 'Vidaloka', serif;

  --golden: #ebd192;
  --darkgolden: #c08c13;
  --lightgolden: #f1e6cb;
  --midnightdark: #1a1a1a;
  --navyviolet: #090e38;
}

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--navyviolet);
    height: 100%;
    margin: 0;
    color: #555;
  }
`

export default App
