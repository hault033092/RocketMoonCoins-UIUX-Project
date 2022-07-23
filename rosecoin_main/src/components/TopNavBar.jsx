import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import styled from 'styled-components'
import { FaSearch, FaUserCircle } from 'react-icons/fa'

const TopNavBar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

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

      <AccountLogo
        onClick={() => {
          setToggleDropdown(!toggleDropdown)
        }}
      />
      {toggleDropdown && (
        <DropDownContainer>
          <DropDownLinks>SIGN UP</DropDownLinks>
          <DropDownLinks>LOGIN</DropDownLinks>
        </DropDownContainer>
      )}
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
`

const NavLogo = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 15rem;
  }
`
const NavLinkContainer = styled.ul`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 4rem;
`

const NavLinks = styled(Link)`
  margin: 0 0.75rem;
  text-decoration: none;
  color: #ebd192;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: #f1e6cb;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`

// const RightNav = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

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
    transition: 0.5s ease;
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
  height: 5rem;
  margin: 0 2rem;
  background-color: #ebd192;
`

// const AccountContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: ;

//   margin ul {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 0;
//     padding: 0;
//   }
// `

const AccountLogo = styled(FaUserCircle)`
  width: 5rem;
  height: 5rem;
  color: #ebd192;
`

const DropDownContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
  margin-top: 8rem;
  margin-right: 4.5rem;
  background-color: #f1e6cb;
`

const DropDownLinks = styled.div`
  display: flex;
  flex-direction: column;
  color: #090e38;
  border: 1px solid;
  width: 5rem;
  height: 2.5rem;
  align-items: center;
`

export default TopNavBar
