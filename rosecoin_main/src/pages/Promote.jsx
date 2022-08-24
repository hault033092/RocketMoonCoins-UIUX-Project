import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Promote = () => {
  const [promotes, setPromotes] = useState({})

  useEffect(() => {
    // getPromotePackage()
    getPromoPack()
  }, [])

  const getPromoPack = async () => {
    await axios
      .get(`/api/services/app/MoonCoinView/GetPromoPack`)
      .then((response) => {
        setPromotes(response.data.result)
      })
  }
  console.log(promotes)

  // const getPromotePackage = async () => {
  //   const check = localStorage.getItem('promote')
  //   if (check) {
  //     setPromotes(JSON.parse(check))
  //   } else {
  //     const connectApi = await fetch(
  //       `/api/services/app/MoonCoinView/GetPromoPack`
  //     )
  //     const data = await connectApi.json()
  //     localStorage.setItem('promote', JSON.stringify(data))
  //     setPromotes(data)
  //   }
  // }

  return (
    <Container>
      <ul key={promotes.id}>
        <li></li>
        <li></li>
      </ul>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  background-color: var(--lightgolden);
  border: 1px solid var(--darkgolden);
`

export default Promote
