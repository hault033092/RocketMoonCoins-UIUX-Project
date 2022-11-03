import React from 'react'
import { useState } from 'react'
import gifs from '../../assets/gifs/demo.gif'
import styled from 'styled-components'

const PopupAd = () => {
  const [isClosed, setClose] = useState(true)

  // const handleClose = (e) => {
  //   setClose(true)
  // }

  return (
    <Container close={isClosed}>
      <button onClick={() => setClose(false)}>X</button>

      <img src={gifs} />
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  display: ${(props) => (props.close ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  bottom: 5rem;
  right: 10px;
  width: 31rem;
  height: 32rem;
  z-index: 10;
  background: var(--theme-midnightdark);
  border-radius: 10px;

  button {
    margin-right: 28rem;
    width: 25px;
    height: 25px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
  }

  img {
    /* margin-top: 0.5rem; */
    width: 475px;
    height: 475px;
  }
`

export default PopupAd
