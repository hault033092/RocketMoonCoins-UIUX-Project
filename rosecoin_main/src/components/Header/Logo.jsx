import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logos/header_logo.svg'

const Logo = () => {
  return (
    <div>
      <NavLogo to='/'>
        <img src={logo} alt='app logo' />
      </NavLogo>
    </div>
  )
}

const NavLogo = styled(Link)`
  display: flex;
  flex-direction: flex-start;

  img {
    width: 15rem;
    height: relative;
  }

  @media (max-width: 1300px) {
    img {
      width: 9rem;
    }
  }
`

export default Logo
