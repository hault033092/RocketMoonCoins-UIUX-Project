import React from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

const SearchBar = () => {
  return (
    <FormStyle>
      <FaSearch />
      <input type='text' placeholder='Search for coins...' />
    </FormStyle>
  )
}

const FormStyle = styled.form`
  position: relative;

  input {
    border: none;
    background: var(--theme-lightgolden);
    font-size: 1rem;
    color: var(--theme-navyviolet);
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
    color: var(--theme-navyviolet);
  }

  @media (max-width: 1300px) {
    display: none;
  }
`

export default SearchBar
