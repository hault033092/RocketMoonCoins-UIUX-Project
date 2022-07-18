import React from 'react'
import Marquee from 'react-fast-marquee'
import styled from 'styled-components'

const TopUtil = () => {
  return (
    <UtilContainer>
      <MarqueeContainer>
        <Marquee pauseOnHover>
          <p>This is a test Marquee</p>
        </Marquee>
      </MarqueeContainer>

      <OptionsContainer>
        <Options>EN</Options>
        <div />
        <Options>USD</Options>
      </OptionsContainer>
    </UtilContainer>
  )
}

const UtilContainer = styled.div`
  margin: 0rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const MarqueeContainer = styled.div`
  width: 50%;
  margin-left: 2rem;
  background: #f1e6cb;
`

const OptionsContainer = styled.div``

const Options = styled.span`
  color: #ebd192;
`

export default TopUtil
