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
      <a href='http://bit.ly/3zjSEiM' target='_blank' rel='noopener noreferrer'>
        <Icon color={LinkedinBackground}>
          <FaLinkedin />
        </Icon>
      </a>
    </IconContainer>
  )
}

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
  padding: 0rem 1rem;
  border: 5px solid var(--golden);
  border-radius: 30px;

  a {
    margin-bottom: 0;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;
  }

  /* a:after::hover {
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;
  } */

  /* a::after {
    margin-bottom: 0;
    transition: margin-bottom 0.2s ease;
  }

  a:hover::after {
    margin-bottom: 10px;
  } */
`

export default SocialNetwork
