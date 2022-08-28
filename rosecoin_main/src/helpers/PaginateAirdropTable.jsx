import React from 'react'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

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
    <>
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
                  <td>
                    <a
                      href={airdrop.url_airdrop}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        src={airdrop.thumbnail}
                        alt='coin logo'
                        width='30px'
                      />
                    </a>
                  </td>
                  <td>{airdrop.name}</td>
                  <td>{airdrop.value}</td>
                  <td>{airdrop.like_ratio}</td>
                  <td>{airdrop.days_left}</td>
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
    </>
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
  width: 35rem;
  height: 80vh;
  border-collapse: separate;
  border-spacing: 0 1rem;
  td {
    text-align: center;
    color: #ebd192;
  }
`

const Thead = styled.thead`
  background-color: rgb(44, 44, 44);
  /* text-align: center; */
`

const Tbody = styled.tbody`
  tr {
    text-align: center;
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    /* width: 50px; */
    text-decoration: none;
  }
`
