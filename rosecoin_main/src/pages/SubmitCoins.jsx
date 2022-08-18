import React from 'react'
import styled from 'styled-components'
import Input from '../components/Input'
import Button from '../components/Button'

const SubmitCoins = () => {
  return (
    <Wrapper>
      <h1>Submit your Coins to Rosecoin</h1>
      <form action=''>
        <h2>Upload coin logo*</h2>
        <input type='file' accept='image/*' placeholder='Upload coin image' />
        <h2>Coin Name*</h2>
        <Input type='text' placeholder='' />
        <h2>Coin Symbol*</h2>
        <Input type='text' placeholder='' />
        <h2>Network/Chain</h2>
        <Input type='text' placeholder='' />
        <h2>Coin is in Presale?*</h2>
        <Input type='radio' placeholder='' />
        <Input type='radio' placeholder='' />
        <h2>Contract Address*</h2>
        <Input type='text' placeholder='' />
        <h2>Description*</h2>
        <Input type='text' placeholder='' />
        <h2>Launch Date*</h2>
        <select name='' id='Day'></select>
        <select name='' id='Month'></select>
        <select name='' id='Year'></select>
        <h2>Custom Chart Link (optional)</h2>
        <Input type='text' placeholder='' />
        <h2>Custom Swap Link (optional)</h2>
        <Input type='text' placeholder='' />
        <h2>Website Link*</h2>
        <Input type='text' placeholder='' />
        <h2>Telegram Link*</h2>
        <Input type='text' placeholder='' />
        <h2>Twitter Link</h2>
        <Input type='text' placeholder='' />
        <h2>Discord Link</h2>
        <Input type='text' placeholder='' />
        <h2>Contact Email*</h2>
        <Input type='text' placeholder='' />
        <h2>Contact Telegram*</h2>
        <Input type='text' placeholder='' />
      </form>
      <button>Back</button>
      <Button content='submit coin' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 5rem 10rem;
  padding: 3rem 0;
  /* height: 180vh; */
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  input {
    padding: 0.5rem 5rem;
  }
`

export default SubmitCoins
