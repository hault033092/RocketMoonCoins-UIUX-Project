import axios, { Axios } from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate'
import { PaginateTable } from '../helpers/PaginateTable'

const CoinsList = () => {
  const [coinsList, setCoinsList] = useState([])
  // const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    axios
      .get(`/api/services/app/MoonCoinView/GetAllCoinWithFilter`)
      .then((response) => {
        setCoinsList(response.data.result)
      })
  }, [])

  return (
    <>
      <PaginateTable data={coinsList} />
    </>
  )
}

export default CoinsList
