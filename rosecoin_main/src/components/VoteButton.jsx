import React from 'react'
import styled from 'styled-components'

export const VoteButton = styled.button`
  background: linear-gradient(
    to bottom right,
    var(--theme-darkgolden) 0%,
    var(--theme-lightgolden) 50%,
    var(--theme-darkgolden) 100%
  );
  background-size: 200% 100%;
  text-transform: uppercase;
  width: 75px;
  height: 35px;
  border: none;
  font-family: var(--font-main);
  font-size: medium;
  color: var(--theme-midnightdark);
  border-radius: 2rem;

  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 1px 5px 0 var(--theme-golden),
      0 1px 6px 0 var(--theme-darkgolden);
    background-position: 100% 50%;
    transition: all 0.4s ease-in-out;
  }
`
