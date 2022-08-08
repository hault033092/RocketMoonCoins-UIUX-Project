import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/rosecoin_footer_logo.svg'
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaTelegram,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <Container>
      <img src={logo} alt='footer logo' />
      <NavContainer>
        <Link to='/submitcoin'>SUBMIT COIN</Link>
        <Link to='/promote'>PROMOTE</Link>
        <Link to='/contactus'>CONTACT US</Link>
        <h3>ROSECOIN COMPANY LTD.</h3>
      </NavContainer>
      <ContactInfo>
        <a href='http://facebook.com/rosecoinweb3' target='_blank'>
          <FaFacebookSquare />
        </a>
        <a href='http://bit.ly/3zjSEiM' target='_blank'>
          <FaLinkedin />
        </a>
        <a href='https://t.me/+pUHV2j1VFpR' target='_blank'>
          <FaTelegram />
        </a>
        <a href='https://twitter.com/RoseCoin96' target='_blank'>
          <FaTwitterSquare />
        </a>
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

  img {
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

  &.Link {
  }
`

const ContactInfo = styled.div`
  display: flex;
  width: 15rem;
  justify-content: space-around;

  svg {
    color: var(--golden);
    width: 3rem;
    height: 3rem;
  }
`

export default Footer
