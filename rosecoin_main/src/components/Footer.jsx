import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logos/footer_logo.svg'
import SocialNetwork from './SocialNetwork'

const Footer = () => {
  return (
    <Container>
      <img className='footer-logo' src={logo} alt='footer logo' />

      <FooterMid>
        <NavLinkContainer>
          {/* <NavLinks to='/'>HOME</NavLinks> */}

          <NavLinks to='/submitcoin'>SUBMIT COIN</NavLinks>

          <NavLinks to='/promote'>PROMOTE</NavLinks>

          <NavLinks to='/contactus'>CONTACT US</NavLinks>

          <NavLinks to='/aboutus'>ABOUT US</NavLinks>
        </NavLinkContainer>
        <h3>ROSECOIN COMPANY LTD.</h3>
      </FooterMid>
      <ContactInfo>
        <SocialNetwork />
      </ContactInfo>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 3rem;
  width: 100%;
  height: 200px;
  background: var(--midnightdark);

  .footer-logo {
    width: 150px;
    height: 150px;
  }
`

const FooterMid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 35%;
  margin-left: 100px;
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

const ContactInfo = styled.div`
  width: 280px;
`

export default Footer
