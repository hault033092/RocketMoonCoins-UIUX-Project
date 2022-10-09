import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import Select from 'react-select'
import { VoteButton } from '../components/VoteButton'

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
    <Container>
      <h2>Coins</h2>
      <Table>
        <Thead>
          <tr>
            <td>Logo</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Market Cap</td>
            <td>Price</td>
            {/* <td>Change 24h</td> */}
            {/* <td>Launch Date</td> */}
            <td>Votes</td>
          </tr>
        </Thead>
        <Tbody>
          {currentItems.map((coin) => {
            return (
              <>
                <tr key={coin.id}>
                  <a href={coin.websiteUrl}>
                    <td>
                      <img src={coin.icon} alt='coin logo' width='30px' />
                    </td>
                    <td>
                      <p>{coin.name}</p>
                    </td>
                    <td>
                      <p>{coin.symbol}</p>
                    </td>
                    {/* <td>{coin.netWorkName}</td> */}
                    <td>{coin.marketCap} USD</td>
                    <td>{coin.price} USD</td>
                    {/* <td>{coin.percent_change_24h}</td> */}
                    {/* <td>{coin.countVote}</td> */}
                    <td>
                      <VoteButton>{coin.countVote}</VoteButton>
                    </td>
                  </a>
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
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin: 2rem 0;
  color: var(--theme-golden);
  /* width: 70rem; */
  /* border: 1px solid var(--theme-golden);
  border-radius: 5px; */
  /* width: 1-0; */
`

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
    color: var(--theme-golden);
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: var(--theme-golden);
    border-color: transparent;
    color: var(--theme-navyviolet);
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
  /* color: var(--theme-golden); */
  background-color: var(--theme-navyviolet);
  width: 55rem;

  td {
    display: flex;
    justify-content: center;
    width: 7rem;
    overflow: hidden;
  }
`

const Thead = styled.thead`
  tr {
    background-color: var(--theme-midnightdark);
    display: flex;
    height: 3.5rem;
    justify-content: space-around;
    align-items: center;
    border: 1px solid var(--theme-golden);
    border-radius: 5px;
  }
`

const Tbody = styled.tbody`
  background-color: var(--theme-grey-light);

  tr {
    display: flex;
    justify-content: space-around;
  }

  td {
    font-size: 0.9rem;
  }

  a {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    color: var(--theme-golden);
    height: 4.5rem;
    width: 100%;
    border: 1px solid var(--theme-grey);
    border-radius: 5px;
  }

  a:hover {
    transition: all 0.4s ease-in-out;
    background-color: var(--theme-grey-dark);
  }
`

// const VoteButton = styled.button`
//   background: linear-gradient(
//     to bottom right,
//     var(--theme-darkgolden) 0%,
//     var(--theme-lightgolden) 50%,
//     var(--theme-darkgolden) 100%
//   );
//   background-size: 200% 100%;
//   text-transform: uppercase;
//   width: 75px;
//   height: 35px;
//   border: none;
//   font-family: var(--font-main);
//   font-size: medium;
//   color: var(--theme-midnightdark);
//   border-radius: 2rem;

//   cursor: pointer;
//   transition: all 0.4s ease-in-out;
//   &:hover {
//     box-shadow: 0 1px 5px 0 var(--theme-golden),
//       0 1px 6px 0 var(--theme-darkgolden);
//     background-position: 100% 50%;
//     transition: all 0.4s ease-in-out;
//   }
// `
