import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NftCarousel } from '../helpers/NftCarousel'

const NftList = () => {
  const [nftList, setNftList] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://eth-mainnet.alchemyapi.io/nft/v2/QcUJuTSQLCJERmo1zl8oD5XO_M6wGAl3/getNFTsForCollection?contractAddress=0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D&withMetadata=true`
      )
      .then((response) => {
        setNftList(response.data.nfts)
      })
  }, [])

  console.log(nftList)
  return (
    <>
      <Container>
        <NftCarousel data={nftList} />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--golden);
  border-radius: 5px;
  width: 110rem;
  height: 80vh;
`

export default NftList
