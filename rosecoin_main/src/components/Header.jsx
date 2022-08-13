import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logos/header_logo.svg'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import Button from './Button'
import SocialNetwork from './SocialNetwork'

const Header = () => {
  return (
    <NavContainer>
      <HeaderLeft>
        <NavLogo to='/'>
          <img src={logo} alt='app logo' />
        </NavLogo>

        <InnerLeft>
          <NavLinkContainer>
            <NavLinks to='/'>HOME</NavLinks>

            <NavLinks to='/submitcoin'>SUBMIT COIN</NavLinks>

            <NavLinks to='/promote'>PROMOTE</NavLinks>

            <NavLinks to='/contactus'>CONTACT US</NavLinks>

            <NavLinks to='/aboutus'>ABOUT US</NavLinks>
          </NavLinkContainer>

          <FormStyle>
            <FaSearch />
            <input type='text' placeholder='Search for coins,NFTs,...' />
          </FormStyle>
        </InnerLeft>
      </HeaderLeft>

      <HeaderRight>
        <SocialNetworkContainer>
          <h2>CONNECT US</h2>
          <SocialNetwork />
        </SocialNetworkContainer>

        <VerticalLine />

        <UserLinksContainer>
          <UserLinks to='/login'>
            <Button content='log in' />
          </UserLinks>
          <UserLinks to='/signup' className='Signup_Link'>
            <h4>SIGN UP</h4>
          </UserLinks>
        </UserLinksContainer>
      </HeaderRight>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 3rem;
  width: 100%;
  height: 150px;
  box-shadow: 3px 3px 8px var(--navyviolet);
  background: var(--midnightdark);
  border: 1px solid var(--golden);
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50rem;
  height: 80%;
`

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-around;
  width: 35%;
  height: 80%;
`

const InnerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100px;
`

const NavLogo = styled(Link)`
  display: flex;
  flex-direction: flex-start;

  img {
    width: 220px;
    height: relative;
  }
`
const NavLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: relative;
`

const NavLinks = styled(Link)`
  margin: 0 0.75rem;
  text-decoration: none;
  color: var(--golden);
  display: inline-block;
  font-family: var(--font-main);
  font-size: medium;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: var(--golden);
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`

const SocialNetworkContainer = styled.div`
  display: flex;
  width: 15rem;
  height: relative;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h2 {
    color: var(--golden);
    font-family: var(--font-main);
  }
`

const FormStyle = styled.form`
  position: relative;

  input {
    border: none;
    background: var(--lightgolden);
    font-size: 1rem;
    color: var(--navyviolet);
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
    color: var(--navyviolet);
  }
`

const VerticalLine = styled.div`
  width: 1.5px;
  height: relative;
  background-color: var(--golden);
`

const UserLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  height: relative;
  h2::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: var(--golden);
    transition: width 0.3s;
  }

  h2:hover::after {
    width: 100%;
  }
`

const UserLinks = styled(Link)`
  text-decoration: none;
  color: var(--golden);
  font-family: var(--font-main);
  font-size: larger;
`

export default Header
