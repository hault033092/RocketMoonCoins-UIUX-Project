import React from 'react'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import CoinsList from '../data/CoinsList'

export const PaginateAirdropTable = (props) => {
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
      <h2>Airdrops</h2>
      <Table>
        <Thead>
          <tr>
            <td>Logo</td>
            <td>Name</td>
            <td>Value</td>
            <td>Rating</td>
            <td>Days left</td>
          </tr>
        </Thead>
        <Tbody>
          {currentItems.map((airdrop) => {
            return (
              <>
                <tr>
                  <a
                    href={airdrop.url_airdrop}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <td>
                      <img
                        src={airdrop.thumbnail}
                        alt='coin logo'
                        width='30%'
                      />
                    </td>
                    <td>{airdrop.name}</td>
                    <td>{airdrop.value}</td>
                    <td>{airdrop.like_ratio}</td>
                    <td>{airdrop.days_left}</td>
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
  height: 100%;
  color: var(--theme-golden);

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
  align-items: center;
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
  /* background-color: var(--theme-navyviolet); */
  background-color: var(--theme-grey-light);
  width: 35rem;

  td {
    display: flex;
    justify-content: center;
    width: 7rem;
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
