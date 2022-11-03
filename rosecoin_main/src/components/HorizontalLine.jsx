import React from 'react'
import styled from 'styled-components'

const HorizontalLine = () => {
  return <Line />
}

const Line = styled.div`
  height: 1.5px;
  width: 7rem;
  background-color: var(--theme-golden);

  @media (max-width: 1300px) {
    display: none;
  }
`

export default HorizontalLine
