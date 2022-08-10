import React from 'react'
import styled from 'styled-components'

const Button = ({ content }) => {
  return <StyledButton>{content}</StyledButton>
}

const StyledButton = styled.button`
  background: linear-gradient(
    to bottom right,
    var(--darkgolden) 0%,
    var(--lightgolden) 50%,
    var(--darkgolden) 100%
  );
  text-transform: uppercase;
  padding: 15px 25px;
  border: none;
  font-family: var(--font-main);
  font-size: large;
  color: var(--midnightdark);
  border-radius: 2rem;
  cursor: pointer;
`
export default Button
