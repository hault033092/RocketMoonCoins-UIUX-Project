import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logos/footer_logo.svg'
import SocialNetwork from './SocialNetwork'

const Footer = () => {
  return (
    <Container>
      <img className='footer-logo' src={logo} alt='footer logo' />
      <NavContainer>
        <Link to='/submitcoin'>SUBMIT COIN</Link>
        <Link to='/promote'>PROMOTE</Link>
        <Link to='/contactus'>CONTACT US</Link>
        <h3>ROSECOIN COMPANY LTD.</h3>
      </NavContainer>
      <ContactInfo>
        <SocialNetwork />
      </ContactInfo>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 25vh;
  background: var(--midnightdark);

  .footer-logo {
    width: 150px;
    height: 150px;
  }
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`

const ContactInfo = styled.div`
  display: flex;
  width: 15rem;
  height: relative;
  justify-content: space-around;
`

export default Footer
