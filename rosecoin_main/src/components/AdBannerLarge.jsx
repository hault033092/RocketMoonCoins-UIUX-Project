import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import images from '../assets/images/banner_demo.jpg'

const AdBannerLarge = () => {
  return (
    <Container>
      <Splide
        options={{
          rewind: true,
          drag: true,
          autoplay: true,
          arrows: true,
          pagination: true,
        }}
      >
        <SplideSlide className='SlideItem'>
          <Link to='/contactus'>
            <img
              src={images}
              alt='large ad banner'
              style={{ width: '1000px', height: '250px' }}
            />
          </Link>
        </SplideSlide>
        <SplideSlide className='SlideItem'>
          <Link to='/contactus'>
            <img
              src={images}
              alt='large ad banner'
              style={{ width: '1000px', height: '250px' }}
            />
          </Link>
        </SplideSlide>
        <SplideSlide className='SlideItem'>
          <Link to='/contactus'>
            <img
              src={images}
              alt='large ad banner'
              style={{ width: '1000px', height: '250px' }}
            />
          </Link>
        </SplideSlide>
      </Splide>
    </Container>
  )
}
const Container = styled.div`
  width: 1000px;
  margin: 2rem 0;
`

export default AdBannerLarge
