import React from 'react'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import Select from 'react-select'

export const PaginateCoinTable = (props) => {
  let itemsPerPage = 10
  const { data } = props
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [currentItems, setCurrentItems] = useState([])

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.length
    setItemOffset(newOffset)
  }
  return (
    <div>
      <h2>Coins</h2>
      <Table>
        <Thead>
          <tr>
            <td>Logo</td>
            <td>Name</td>
            <td>Chain</td>
            <td>Market Cap</td>
            <td>Price</td>
            <td>Change 24h</td>
            <td>Launch Date</td>
            <td>Votes</td>
          </tr>
        </Thead>
        <Tbody>
          {currentItems.map((coin) => {
            return (
              <>
                <tr key={coin.id}>
                  <td>
                    <a href={coin.websiteUrl} className='logo'>
                      <img src={coin.logo} alt='coin logo' width='30px' />
                    </a>
                  </td>
                  <td>
                    <p>{coin.name}</p>
                    <p>{coin.symbol}</p>
                  </td>
                  <td>{coin.netWorkName}</td>
                  <td>{coin.marketCap}</td>
                  <td>{coin.price}</td>
                  <td>{coin.percent_change_24h}</td>
                  <td>{coin.countVote}</td>
                  <VoteButton>Votes</VoteButton>
                </tr>
              </>
            )
          })}
        </Tbody>
      </Table>
      <MyPaginate
        breakLabel='...'
        nextLabel='>>'
        previousLabel='<<'
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
    color: var(--golden);
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
    color: black;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`
const Table = styled.table`
  width: 65rem;
  height: 80vh;
  border-collapse: separate;
  border-spacing: 0 1rem;

  td {
    color: #ebd192;
    text-align: center;
  }
`

const Thead = styled.thead`
  background-color: rgb(44, 44, 44);
  /* width: 100%; */
  height: 3rem;
`

const Tbody = styled.tbody`
  tr {
    text-align: center;
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

const VoteButton = styled.button`
  background: linear-gradient(
    to bottom right,
    var(--darkgolden) 0%,
    var(--lightgolden) 50%,
    var(--darkgolden) 100%
  );
  background-size: 200% 100%;
  text-transform: uppercase;
  width: 75px;
  height: 35px;
  border: none;
  font-family: var(--font-main);
  font-size: medium;
  color: var(--midnightdark);
  border-radius: 2rem;

  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 1px 5px 0 var(--golden), 0 1px 6px 0 var(--darkgolden);
    background-position: 100% 50%;
    transition: all 0.4s ease-in-out;
  }
`
