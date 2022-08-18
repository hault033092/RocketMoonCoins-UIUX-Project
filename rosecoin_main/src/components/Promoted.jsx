import React, { useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import images from '../assets/images/images.jsx'
import { Link } from 'react-router-dom'

const Promoted = () => {
  return (
    <Container>
      <HeadingContainer>
        <h2>PROMOTED</h2>
        <Link to='/contactus'>Your coin's not here? Contact us!</Link>
      </HeadingContainer>

      {/* <Splide
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
      </Splide> */}
    </Container>
  )
}

const Container = styled.div`
  width: 70%;
  height: 30vh;
  /* border-radius: 5px; */
  background: #f1e6cb;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 5vh;
  border: 1px solid var(--midnightdark);
`

const Table = styled.table`
  width: 1000px;
  border-collapse: separate;
  border-spacing: 0 1rem;
`

const Thead = styled.thead`
  background-color: rgb(44, 44, 44);
  text-align: center;

  td {
    color: #ebd192;
  }
`
const Tbody = styled.tbody`
  tr {
    text-align: right;
  }

  a {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }

  &.rank {
    text-align: center;
    font-weight: bold;
  }

  &.symbol {
    text-align: center;
  }
`

export default Promoted
