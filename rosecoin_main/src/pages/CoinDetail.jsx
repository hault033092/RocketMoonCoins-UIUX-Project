import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import HorizontalLine from '../components/HorizontalLine'

const CoinDetail = () => {
  let params = useParams()
  const [coinDetail, setCoinDetail] = useState({})

  useEffect(() => {
    axios
      .get(`/api/services/app/MoonCoinView/GetCoinById?Id=${params.name}`)
      .then((response) => {
        setCoinDetail(response.data.result)
      })
  }, [params.name])

  return (
    <Container>
      <TopHalf>
        <TopLeft>
          <img src={coinDetail.logo} alt='coin logo' width='70px' />
          <h1>{coinDetail.name}</h1>
          <h1>{coinDetail.symbol}</h1>
        </TopLeft>
        <TopRight>
          <InfoContainer>{'Added: ' + coinDetail.creationTime}</InfoContainer>
          <ChartsContainer>
            {'Launch: ' + coinDetail.launchDate}
          </ChartsContainer>
        </TopRight>
      </TopHalf>
      <HorizontalLine />
      <BottomHalf></BottomHalf>
    </Container>
  )
}

const Container = styled.div`
  height: 80vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--theme-golden);
  border-radius: 10px;
`

const TopHalf = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30vh;
  border: 1px solid var(--theme-golden);
`

const BottomHalf = styled.div`
  width: 100%;
  height: 50vh;
  border: 1px solid var(--theme-golden);
`

const TopLeft = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: relative;
  width: 45%;
  border: 1px solid var(--theme-golden);
`

const TopRight = styled.div`
  height: relative;
  width: 45%;
  border: 1px solid var(--theme-golden);
`

const InfoContainer = styled.div``

const ChartsContainer = styled.div``

export default CoinDetail
