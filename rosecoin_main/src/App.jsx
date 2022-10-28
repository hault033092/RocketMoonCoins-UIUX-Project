import React, { useState, useRef } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Pages from './pages/Pages'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hamburger from './components/Header/Hamburger'
import SideNav from './components/Header/SideNav'
import { useOnClickOutside } from './hooks/useOnClickOutside'

const App = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <>
      <GlobalStyle />
      <Header />
      <PageContainer>
        {/* <div ref={node}>
          <Hamburger open={open} setOpen={setOpen} />
          <SideNav open={open} setOpen={setOpen} />
        </div> */}
        <Pages />
      </PageContainer>
      <Footer />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Vidaloka&display=swap'); */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  :root {
  //Fonts
  --font-main: 'Vidaloka', serif;

  //Colors
  --theme-golden: #ebd192;
  --theme-darkgolden: #c08c13;
  --theme-lightgolden: #f1e6cb;
  --theme-midnightdark: #1a1a1a;
  --theme-navyviolet: #151c4b;
  --theme-grey: #2b3046;
  --theme-grey-light: #2b3046ab;
  --theme-grey-dark: #121319ab;
  --theme-orange: #b02500;
  --theme-orange-light: #d32c00;
  --theme-blue: #82c0b9;
  --theme-blue-light: #97c6c126;
  --theme-gutter-top: 12px;
  --theme-error: #b00020;
  --theme-border-rounded: 8px;
  --theme-primary-font: "Raleway";

  //View sizes
  --small-view: 1300px;
  
}

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--theme-navyviolet);
    min-height: 100vh;
    overflow: auto;
  }
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0rem;
`

export default App
