import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import gif from '../../assets/gifs/demo.gif'

const BottomBanner = () => {
  const [isClosed, setClose] = useState(false)

  return (
    <Container close={isClosed}>
      <button onClick={() => setClose(true)}>X</button>
      <img src={gif} alt='' />
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--theme-golden);
  z-index: 10;
  display: ${(props) => (props.close ? 'none' : 'block')};

  button {
    width: 25px;
    height: 25px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
  }

  img {
    width: 100%;
    height: 3rem;
  }
`

export default BottomBanner
