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
    'linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)'
  return (
    <IconContainer>
      <Icon color={FacebookBackground}>
        <FaFacebookSquare />
      </Icon>
      <Icon color={TelegramBackground}>
        <FaTelegram />
      </Icon>
      <Icon color={TwitterBackground}>
        <FaTwitterSquare />
      </Icon>
      <Icon color={LinkedinBackground}>
        <FaLinkedin />
      </Icon>
    </IconContainer>
  )
}

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export default SocialNetwork
