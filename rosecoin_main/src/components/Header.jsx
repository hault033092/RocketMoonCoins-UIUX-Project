import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/rosecoin_header_logo.svg'
import styled from 'styled-components'
import {
  FaSearch,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaTelegram,
} from 'react-icons/fa'

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
          </NavLinkContainer>

          <FormStyle>
            <FaSearch />
            <input type='text' placeholder='Search for coins,NFTs,...' />
          </FormStyle>
        </InnerLeft>
      </HeaderLeft>

      <HeaderRight>
        <ContactInfo>
          <a
            href='http://facebook.com/rosecoinweb3'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaFacebookSquare />
          </a>
          <a
            href='http://bit.ly/3zjSEiM'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://t.me/+pUHV2j1VFpR'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaTelegram />
          </a>
          <a
            href='https://twitter.com/RoseCoin96'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaTwitterSquare />
          </a>
        </ContactInfo>

        <VerticalLine />

        <UserLinksContainer>
          <Button>
            <UserLinks to='/login'>LOG IN</UserLinks>
          </Button>
          <UserLinks to='/signup'>SIGN UP</UserLinks>
        </UserLinksContainer>
      </HeaderRight>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10vh 3rem;
  width: 100%;
  height: 10rem;
  background: var(--navyviolet);
`

const HeaderLeft = styled.div`
  display: flex;
  /* justify-content: space-a; */
  align-items: center;
  width: 90rem;
  margin-left: 5rem;
`

const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  /* align-items: center; */
  height: 15vh;
  width: 50rem;
  margin-right: 5rem;
`

const InnerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 18vh;
  margin-left: 2rem;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavLogo = styled(Link)`
  display: flex;
  flex-direction: flex-start;

  img {
    width: 220px;
  }
`
const NavLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const NavLinks = styled(Link)`
  margin: 0 0.75rem;
  text-decoration: none;
  color: var(--golden);
  display: inline-block;

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

const ContactInfo = styled.div`
  display: flex;
  width: 15rem;
  height: 15vh;
  justify-content: space-around;
  align-items: center;

  svg {
    color: var(--golden);
    width: 3rem;
    height: 3rem;
  }
`

const SearchContainer = styled.div`
  display: flex;
`

const FormStyle = styled.form`
  /* width: 100%; */
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
  width: 1px;
  height: 100%;
  margin: 0 2rem;
  background-color: var(--golden);
`

const UserLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
`

const UserLinks = styled(Link)`
  text-decoration: none;
  color: var(--golden);
`

const Button = styled.button`
  padding: 10px 20px;
  background: var(--lightgolden);
  border: 2px solid var(--golden);
  border-radius: 20px;

  a {
    color: var(--navyviolet);
  }
`

export default Header
