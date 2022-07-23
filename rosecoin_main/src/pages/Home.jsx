import React from 'react'
import styled from 'styled-components'
import Promoted from '../components/Promoted'

const Home = () => {
  return (
    <HomeContainer>
      <Promoted />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default Home
