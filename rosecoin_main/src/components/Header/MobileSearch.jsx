import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const MobileSearch = () => {
  const [open, setOpen] = useState(false)

  const onSearchFocus = () => {
    setOpen(true)
  }

  const onSearchBlur = () => {
    setOpen(false)
  }

  return (
    <FormStyle>
      <FaSearch />
      <SearchBox
        open={open}
        onFocus={onSearchFocus}
        onBlur={onSearchBlur}
      ></SearchBox>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: -10%;
    transform: translate(100%, -50%);
    color: var(--theme-navyviolet);
    display: ${({ open }) => (open ? 'none' : '')};
  }
`

const SearchBox = styled.input`
  width: ${({ open }) => (open ? '100%' : '2.5rem')};
  transition: width 0.75s cubic-bezier(0, 0.795, 0, 1);
  padding: 1rem;
  height: 2.5rem;
  border: none;
  border-radius: 10px;
  background-color: var(--theme-lightgolden);

  @media (min-width: 1300px) {
    display: none;
  }
`

export default MobileSearch
