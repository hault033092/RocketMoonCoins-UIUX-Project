import React from 'react'
import { bool, func } from 'prop-types'
import styled from 'styled-components'

const Hamburger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

const StyledBurger = styled.button`
  display: flex;
  right: 2rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background: var(--theme-grey-light);
  border: 1px solid var(--theme-golden);
  border-radius: 10px;
  cursor: pointer;
  padding: 0.5rem;
  margin: 2rem;
  /* z-index: 10; */

  &:focus {
    outline: none;
  }

  div {
    display: block;
    position: absolute;
    width: 1.5rem;
    height: 0.2rem;
    background: var(--theme-golden);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
    @media (min-width: 1300px) {
      display: none;
    }
  }

  @media (min-width: 1300px) {
    display: none;
  }
`

export default Hamburger
