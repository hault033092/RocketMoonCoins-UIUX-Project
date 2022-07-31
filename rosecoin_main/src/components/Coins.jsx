import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Coins = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    getCoinList()
  }, [])

  const getCoinList = async () => {
    const check = localStorage.getItem('coins')

    if (check) {
      setCoins(JSON.parse(check))
    } else {
      const connectApi = await fetch(
        `https://api.coinstats.app/public/v1/coins`
      )
      const data = await connectApi.json()
      localStorage.setItem('coins', JSON.stringify(data.coins))
      setCoins(data.coins)
    }
  }

  console.log(coins)

  return (
    <Container>
      <h1>Coins</h1>
      <Table>
        <Thead>
          <tr>
            <td>Rank</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Market Cap</td>
            <td>Price</td>
            <td>Available Supply</td>
            <td>Volume(24hrs)</td>
          </tr>
        </Thead>

        <Tbody>
          {coins.map((coin) => {
            return (
              <>
                <tr id={coin.id}>
                  <td className='rank'>{coin.rank}</td>
                  <td className='logo'>
                    <a href={coin.websiteUrl}>
                      <img src={coin.icon} alt='coin logo' width='30px' />
                    </a>
                    <p>{coin.name}</p>
                  </td>
                  <td className='symbol'>{coin.symbol}</td>
                  <td>{coin.marketCap}</td>
                  <td>{coin.price}</td>
                  <td>{coin.availableSupply}</td>
                  <td>{coin.volume}</td>
                </tr>
              </>
            )
          })}
        </Tbody>
      </Table>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Table = styled.table`
  width: 1000px;
  border-collapse: separate;
  border-spacing: 0 1rem;
`

const Thead = styled.thead`
  background-color: rgb(44, 44, 44);
  text-align: center;

  td {
    color: #ebd192;
  }
`
const Tbody = styled.tbody`
  tr {
    text-align: right;
  }

  &.rank {
    text-align: center;
    font-weight: bold;
  }
  &.logo {
    display: flex;
    justify-content: flex-start;
    padding-left: 10%;
    gap: 10px;
  }
  &.symbol {
    text-align: center;
  }
`
export default Coins
