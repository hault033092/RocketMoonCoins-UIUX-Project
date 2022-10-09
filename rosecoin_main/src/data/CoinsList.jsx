import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PaginateCoinTable } from '../helpers/PaginateCoinTable'

const CoinsList = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    // axios
    //   .get(
    //     `https://45.119.83.239:8181/api/services/app/MoonCoinView/GetAllCoinWithFilter`
    //   )
    //   .then((response) => {
    //     setCoins(response.data.result)
    //   })
    axios
      .get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=USD`)
      .then((response) => {
        setCoins(response.data.coins)
      })
  }, [])

  return (
    <>
      <PaginateCoinTable data={coins} />
    </>
  )
}

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 2rem 0;`
//   border: 1px solid var(--theme-golden);
//   border-radius: 5px;
// `

export default CoinsList
