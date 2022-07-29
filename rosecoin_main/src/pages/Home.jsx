import React from 'react'
import styled from 'styled-components'
import Coins from '../components/Coins'
import Promoted from '../components/Promoted'
import AdBannerSmall from '../components/AdBannerSmall'
import AdBannerLarge from '../components/AdBannerLarge'

const Home = () => {
  return (
    <HomeContainer>
      <AdBannerSmall />
      <Promoted />
      <AdBannerLarge />
      <Coins />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Home
