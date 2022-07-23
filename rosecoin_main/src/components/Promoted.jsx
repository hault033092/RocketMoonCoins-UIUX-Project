import React, { useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import images from '../assets/images.jsx'

const Promoted = () => {
  return (
    <Container>
      <h2>PROMOTED</h2>
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: true,
          drag: 'free',
          gap: '5rem',
        }}
      >
        <SplideSlide>
          <img src={images.bitcoin} alt='bitcoin logo' />
        </SplideSlide>
        <SplideSlide>
          <img src={images.bnb} alt='bnb logo' />
        </SplideSlide>
        <SplideSlide>
          <img src={images.dogecoin} alt='dogecoin logo' />
        </SplideSlide>
        <SplideSlide>
          <img src={images.eth} alt='eth logo' />
        </SplideSlide>
        <SplideSlide>
          <img src={images.shibainu} alt='shiba inu logo' />
        </SplideSlide>
        <SplideSlide>
          <img src={images.luna} alt='luna logo' />
        </SplideSlide>
        <SplideSlide>
          <img src={images.tether} alt='tether logo' />
        </SplideSlide>
        <SplideSlide>
          <img src={images.xrp} alt='xrp logo' />
        </SplideSlide>
      </Splide>
    </Container>
  )
}

const Container = styled.div`
  margin: 4rem 0;
  width: 50%;
  height: 15rem;
  border-radius: 5px;
  background: #f1e6cb;
  img {
    width: 150px;
    height: 150px;
  }
  /* display: flex;
  justify-content: center;
  border: 1px solid;
   */
`

const PromotedItems = styled.ul`
  border-radius: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Item = styled.li`
  margin: 2rem 3rem;
  list-style: none;
`

export default Promoted
