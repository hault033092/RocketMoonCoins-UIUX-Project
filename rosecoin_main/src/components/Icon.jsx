import React from 'react'
import styled from 'styled-components'

const Icon = ({ color, children }) => {
  return <StyledIcon background={color}>{children}</StyledIcon>
}

const StyledIcon = styled.div`
  height: 3rem;
  width: 3rem;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: var(--theme-lightgolden);
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 1300px) {
    width: 2rem;
    height: 2rem;
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`
export default Icon
