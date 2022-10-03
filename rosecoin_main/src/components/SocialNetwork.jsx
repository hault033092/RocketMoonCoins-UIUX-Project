import React from 'react'
import Icon from './Icon'
import styled from 'styled-components'
import {
  FaFacebookSquare,
  FaTelegram,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa'

const SocialNetwork = () => {
  const FacebookBackground =
    'linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)'
  const TelegramBackground =
    'linear-gradient(to right, #3aab4b 0%, #12e238 40%, #F0A853 100%)'
  const TwitterBackground = 'linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)'
  const LinkedinBackground =
    'linear-gradient(to right, #9fd8e9 0%, #2f7e99 100%)'
  return (
    <Container>
      <h2>CONNECT US</h2>
      <IconContainer>
        <a
          href='http://facebook.com/rosecoinweb3'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon color={FacebookBackground}>
            <FaFacebookSquare />
          </Icon>
        </a>
        <a
          href='https://t.me/+pUHV2j1VFpR'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon color={TelegramBackground}>
            <FaTelegram />
          </Icon>
        </a>
        <a
          href='https://t.me/+pUHV2j1VFpR'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon color={TwitterBackground}>
            <FaTwitterSquare />
          </Icon>
        </a>
        <a
          href='http://bit.ly/3zjSEiM'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon color={LinkedinBackground}>
            <FaLinkedin />
          </Icon>
        </a>
      </IconContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 15rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: var(--theme-golden);
    font-family: var(--font-main);
  }
  @media (max-width: 1300px) {
    display: none;
    width: 17rem;
    height: 10rem;
    justify-content: center;

    h2 {
      font-size: 14px;
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0rem 1rem;
  border: 3px solid var(--theme-golden);
  border-radius: 30px;

  a {
    margin-bottom: 0;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 1300px) {
    width: 80%;
    height: 2.5rem;
    border: 2px solid var(--theme-golden);
    border-radius: 30px;
  }
`

export default SocialNetwork
