import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NaviLinks = () => {
  return (
    <NavLinkContainer>
      <NaviLink exact activeClassName='active' to='/'>
        HOME
      </NaviLink>

      <NaviLink activeClassName='active' to='/submitcoin'>
        SUBMIT COIN
      </NaviLink>

      <NaviLink activeClassName='active' to='/promote'>
        PROMOTE
      </NaviLink>

      <NaviLink activeClassName='active' to='/contactus'>
        CONTACT US
      </NaviLink>

      <NaviLink activeClassName='active' to='/aboutus'>
        ABOUT US
      </NaviLink>
    </NavLinkContainer>
  )
}

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: relative;

  @media (max-width: 1300px) {
    display: none;
  }
`

const NaviLink = styled(NavLink)`
  margin: 0 0.75rem;
  text-decoration: none;
  color: var(--theme-golden);
  display: inline-block;
  font-family: var(--font-main);
  font-size: medium;

  /* &.active {
    display: block;
    width: 100%;
    height: 1px;
    background: var(--golden);
  } */

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: var(--theme-golden);
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }

  &.active::after {
    width: 100%;
  }
`

export default NaviLinks
