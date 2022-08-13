import React from 'react'
import styled from 'styled-components'
import Promoted from '../components/Promoted'
import AdBannerSmall from '../components/AdBannerSmall'
import AdBannerLarge from '../components/AdBannerLarge'
import CoinsList from '../data/CoinsList'

const Home = () => {
  return (
    <HomeContainer>
      <AdBannerSmall />
      <Promoted />
      <AdBannerLarge />
      <CoinsList />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export default Home
