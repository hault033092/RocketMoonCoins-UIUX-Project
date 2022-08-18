import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Pagination from '../Pagination'

let PageSize = 10

const CoinsList = () => {
  const [coinsList, setCoinsList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    GetCoinList()
  }, [])

  const GetCoinList = async () => {
    const check = localStorage.getItem('coins')

    if (check) {
      setCoinsList(JSON.parse(check))
    } else {
      const connectApi = await fetch(
        `https://api.coinstats.app/public/v1/coins`
      )
      const data = await connectApi.json()
      localStorage.setItem('coins', JSON.stringify(data.coins))
      setCoinsList(data.coins)
    }
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return coinsList.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  return (
    <Container>
      <Table>
        <Thead>
          <tr>
            <td>Rank</td>
            <td>Symbol</td>
            <td>Name</td>
            <td>Market Cap</td>
            <td>Price</td>
            <td>Available Supply</td>
            <td>Volume(24hrs)</td>
          </tr>
        </Thead>

        <Tbody>
          {currentTableData.map((coin) => {
            return (
              <>
                <tr key={coin.id}>
                  <td className='rank'>{coin.rank}</td>
                  <td>
                    <a href={coin.websiteUrl} className='logo'>
                      <img src={coin.icon} alt='coin logo' width='30px' />
                      <p>{coin.name}</p>
                    </a>
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
      <Pagination
        currentPage={currentPage}
        totalCount={coinsList.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
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

  a {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }

  &.rank {
    text-align: center;
    font-weight: bold;
  }

  &.symbol {
    text-align: center;
  }
`

export default CoinsList
