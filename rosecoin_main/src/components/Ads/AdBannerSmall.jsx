import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import images from '../../assets/images/banner_demo.jpg'

const AdBannerSmall = () => {
  return (
    <Container>
      <Link to='/contactus'>
        <img src={images} alt='' />
      </Link>
      <Link to='/contactus'>
        <img src={images} alt='' />
      </Link>
      <Link to='/contactus'>
        <img src={images} alt='' />
      </Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0rem;
  width: 1200px;
  height: relative;

  img {
    width: 320px;
    height: 100px;
  }
`

export default AdBannerSmall
