import React from 'react'
import styled from 'styled-components'
import Promoted from '../components/Promoted'
import AdBannerSmall from '../components/AdBannerSmall'
import AdBannerLarge from '../components/AdBannerLarge'
import CoinsList from '../data/CoinsList'
import AirDropList from '../data/AirDropList'
import NftList from '../data/NftList'

const Home = () => {
  return (
    <>
      <Promoted />
      <AdBannerSmall />
      <TableContainer>
        <CoinsList />
        <AirDropList />
      </TableContainer>
      <AdBannerLarge />
      <NftList />
    </>
  )
}

// const HomeContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
// `

const TableContainer = styled.div`
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  /* border: 1px solid var(--theme-golden);
  border-radius: 10px; */
  width: 90%;
  height: 100%;
`

export default Home
