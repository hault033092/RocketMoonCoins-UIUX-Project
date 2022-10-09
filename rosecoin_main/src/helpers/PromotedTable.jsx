import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import { VoteButton } from '../components/VoteButton'
import { Link } from 'react-router-dom'

export const PromotedTable = () => {
  // let itemsPerPage = 10
  // const { data } = props
  // const [pageCount, setPageCount] = useState(0)
  // const [itemOffset, setItemOffset] = useState(0)
  // const [currentItems, setCurrentItems] = useState([])

  // useEffect(() => {
  //   const endOffset = itemOffset + itemsPerPage
  //   setCurrentItems(data.slice(itemOffset, endOffset))
  //   setPageCount(Math.ceil(data.length / itemsPerPage))
  // }, [itemOffset, itemsPerPage, data])

  // const handlePageClick = (e) => {
  //   const newOffset = (e.selected * itemsPerPage) % data.length
  //   setItemOffset(newOffset)
  // }

  return (
    <Container>
      <HeaderContainer>
        <h2>PROMOTED</h2>
        <ContactUs to='/contactus'>Your coin's not here? Contact us!</ContactUs>
      </HeaderContainer>

      <Table>
        <Thead>
          <tr>
            <td>Logo</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Market Cap</td>
            <td>Price</td>
            <td>Votes</td>
          </tr>
        </Thead>
        <Tbody>
          <tr>
            <a href=''>
              <td>------Logo------</td>
              <td>------Name------</td>
              <td>------Symbol------</td>
              <td>------Market Cap------</td>
              <td>------Price------</td>
              <td>
                <VoteButton>--Votes--</VoteButton>
              </td>
            </a>
          </tr>
          <tr>
            <a href=''>
              <td>----Logo----</td>
              <td>---Name----</td>
              <td>---Symbol----</td>
              <td>---Market Cap----</td>
              <td>---Price----</td>
              <td>
                <VoteButton>--Votes--</VoteButton>
              </td>
            </a>
          </tr>
          <tr>
            <a href=''>
              <td>--Logo--</td>
              <td>--Name--</td>
              <td>--Symbol--</td>
              <td>--Market Cap--</td>
              <td>--Price--</td>
              <td>
                <VoteButton>--Votes--</VoteButton>
              </td>
            </a>
          </tr>
          <tr>
            <a href=''>
              <td>--Logo--</td>
              <td>--Name--</td>
              <td>--Symbol--</td>
              <td>--Market Cap--</td>
              <td>--Price--</td>
              <td>
                <VoteButton>--Votes--</VoteButton>
              </td>
            </a>
          </tr>
          <tr>
            <a href=''>
              <td>--Logo--</td>
              <td>--Name--</td>
              <td>--Symbol--</td>
              <td>--Market Cap--</td>
              <td>--Price--</td>
              <td>
                <VoteButton>--Votes--</VoteButton>
              </td>
            </a>
          </tr>
        </Tbody>
      </Table>
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

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  height: 5vh;
  width: 100%;
`

const ContactUs = styled(Link)`
  all: unset;
  cursor: pointer;
  transition: 0.4s all;

  &:hover {
    color: var(--theme-darkgolden);
  }
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
  width: 70rem;
  td {
    display: flex;
    justify-content: center;
    width: 10rem;
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
