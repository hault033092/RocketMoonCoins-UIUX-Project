import React from 'react'
import styled from 'styled-components'
import Input from '../components/Input'
import Button from '../components/Button'
import { RadioInput } from '../components/RadioInput'
import { useState } from 'react'
import DateSelect from '../components/DateSelect'

const SubmitCoins = () => {
  const [answer, setAnswer] = useState('Yes')

  const radioChangeHandler = (e) => {
    setAnswer(e.target.value)
  }

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
        <RadioContainer>
          <RadioInput
            changed={radioChangeHandler}
            id='1'
            isSelected={answer === 'Yes'}
            label='Yes'
            value='Yes'
          />
          <RadioInput
            changed={radioChangeHandler}
            id='2'
            isSelected={answer === 'No'}
            label='No'
            value='No'
          />
        </RadioContainer>
        <h2>Contract Address*</h2>
        <Input type='text' placeholder='' />
        <h2>Description*</h2>
        <Input type='text' placeholder='' />
        <h2>Launch Date*</h2>
        <SelectContainer>
          <DateSelect />
        </SelectContainer>
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
      <ButtonContainer>
        <button>Back</button>
        <Button content='submit coin' />
      </ButtonContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 10rem;
  padding: 3rem 0;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    padding: 0.5rem 5rem;
    margin: 1rem 0;
  }

  select {
    margin: 1rem 0;
  }

  h2 {
    margin: 1rem 0;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15rem;
`

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20rem;
`

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
`

export default SubmitCoins
