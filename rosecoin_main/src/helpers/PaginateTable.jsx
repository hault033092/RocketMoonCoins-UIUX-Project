import React from 'react'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

export const PaginateTable = (props) => {
  let itemsPerPage = 10
  const { data } = props
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [currentItems, setCurrentItems] = useState([])

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.length
    // console.log(
    //   `User requested page number ${e.selected}, which is offset ${newOffset}`
    // )
    setItemOffset(newOffset)
  }
  return (
    <div>
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
              <td>Volume(24h)</td>
            </tr>
          </Thead>

          <Tbody>
            {currentItems.map((coin) => {
              return (
                <>
                  <tr key={coin.id}>
                    <td className='rank'>{coin.rank}</td>
                    <td>
                      <a href={coin.websiteUrl} className='logo'>
                        <img src={coin.logo} alt='coin logo' width='30px' />
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
      </Container>
      <MyPaginate
        breakLabel='...'
        nextLabel='>'
        previousLabel='<'
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

const MyPaginate = styled(ReactPaginate).attrs({
  // You can redifine classes here, if you want.
  activeClassName: 'active', // default to "disabled"
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 5rem;
  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: var(--golden);
    border-color: transparent;
    color: var(--navyviolet);
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  border: 1px solid var(--golden);
  border-radius: 5px;
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
