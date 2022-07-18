import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import styled from 'styled-components'
import { FaSearch, FaUserAlt } from 'react-icons/fa'

const TopNavBar = () => {
  return (
    <NavContainer>
      <NavLogo to='/'>
        <img src={logo} alt='app logo' />
      </NavLogo>

      <NavLinkContainer>
        <NavLinks to='/submitcoin'>SUBMIT COIN</NavLinks>

        <NavLinks to='/promote'>PROMOTE</NavLinks>

        <NavLinks to='/contactus'>CONTACT US</NavLinks>
      </NavLinkContainer>

      <FormStyle>
        <div>
          <FaSearch />
          <input type='text' placeholder='Search for coins,NFTs,...' />
        </div>
      </FormStyle>

      <VerticalLine />

      <AccountLogo type='button'>
        <FaUserAlt />
      </AccountLogo>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem;
`

const NavLogo = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 250px;
    height: 150px;
  }
`
const NavLinkContainer = styled.ul`
  display: flex;
  justify-content: space-around;
`

const NavLinks = styled(Link)`
  margin: 0 3rem;
  text-decoration: none;
  color: #f1e6cb;
  &:hover {
    border-bottom: 1px solid #f1e6cb;
  }
`

const FormStyle = styled.form`
  padding-left: 10rem;
  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: #f1e6cb;
    font-size: 1rem;
    color: #090e38;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #090e38;
  }
`

const VerticalLine = styled.div`
  width: 1px;
  height: 70px;
  background-color: #ebd192;
`

const AccountLogo = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 3rem;
  background: #ebd192;

  svg {
    position: relative;
    width: 3rem;
    height: 3rem;
    color: #090e38;
  }
`

export default TopNavBar
