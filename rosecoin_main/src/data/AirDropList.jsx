import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PaginateAirdropTable } from '../helpers/PaginateAirdropTable'

const CoinsList = () => {
  const [airDrops, setAirDrops] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.airdropking.io/airdrops/?amount=0`)
      .then((response) => {
        setAirDrops(response.data)
      })
  }, [])

  return (
    <>
      <Container>
        <PaginateAirdropTable data={airDrops} />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  border: 1px solid var(--golden);
  border-radius: 5px;
`
export default CoinsList
