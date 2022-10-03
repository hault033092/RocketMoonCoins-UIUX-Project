import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Button'

const UserLink = () => {
  return (
    <UserLinksContainer>
      <UserLinks to='/login'>
        <Button content='sign up' />
      </UserLinks>
      <UserLinks to='/signup' className='Signup_Link'>
        <h4>LOG IN</h4>
      </UserLinks>
    </UserLinksContainer>
  )
}

const UserLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  height: 8rem;
  h4::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: var(--theme-golden);
    transition: width 0.3s;
  }

  h4:hover::after {
    width: 100%;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`

const UserLinks = styled(Link)`
  text-decoration: none;
  color: var(--theme-golden);
  font-family: var(--font-main);
  font-size: larger;

  @media (max-width: 1300px) {
    display: none;
  }
`

export default UserLink
