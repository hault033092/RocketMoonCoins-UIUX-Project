import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Promote = () => {
  const [promotes, setPromotes] = useState([])

  console.log(promotes)
  useEffect(() => {
    getPromotePackage()
  }, [])
  const getPromotePackage = async () => {
    const check = localStorage.getItem('promote')
    if (check) {
      setPromotes(JSON.parse(check))
    } else {
      const connectApi = await fetch(
        `/api/services/app/MoonCoinView/GetPromoDefault`
      )
      const data = await connectApi.json()
      localStorage.setItem('promote', JSON.stringify(data))
      setPromotes(data)
    }
  }

  return (
    <Container>
      <div>{promotes.content}</div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  background-color: var(--lightgolden);
  border: 1px solid var(--darkgolden);
`

export default Promote
