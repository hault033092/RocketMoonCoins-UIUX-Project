import React from 'react'
import styled from 'styled-components'

const VerticalLines = () => {
  return <VerticalLine />
}

const VerticalLine = styled.div`
  width: 1.5px;
  height: 7rem;
  background-color: var(--theme-golden);

  @media (max-width: 1300px) {
    display: none;
  }
`

export default VerticalLines
