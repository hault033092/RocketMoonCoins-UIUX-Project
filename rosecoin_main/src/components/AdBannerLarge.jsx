import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AdBannerLarge = () => {
  return (
    <Container>
      <Link to='/contactus'>
        <img src='https://t.me/BullRunDev' alt='' />
      </Link>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 30rem;
`

export default AdBannerLarge
