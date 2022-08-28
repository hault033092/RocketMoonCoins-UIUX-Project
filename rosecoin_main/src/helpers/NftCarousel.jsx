import React from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

export const NftCarousel = (props) => {
  const { data } = props
  return (
    <Container>
      <Splide
        options={{
          gap: '5rem',
          rewind: true,
          drag: true,
          autoplay: true,
          arrows: true,
          pagination: true,
        }}
      >
        <SlideItem>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </SlideItem>
      </Splide>
    </Container>
  )
}

const Container = styled.div`
  width: 80rem;
  /* height: 80vh; */
`

const SlideItem = styled(SplideSlide)`
  display: flex;
  justify-content: space-evenly;
`

const Card = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  /* position: relative; */
  border: 1px solid var(--golden);
  border-radius: 5px;
  width: 25rem;
  min-height: 25rem;
`
