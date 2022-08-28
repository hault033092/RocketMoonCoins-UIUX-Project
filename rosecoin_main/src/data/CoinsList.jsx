import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PaginateCoinTable } from '../helpers/PaginateCoinTable'

const CoinsList = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios
      .get(`/api/services/app/MoonCoinView/GetAllCoinWithFilter`)
      .then((response) => {
        setCoins(response.data.result)
      })
  }, [])

  return (
    <>
      <Container>
        <PaginateCoinTable data={coins} />
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
