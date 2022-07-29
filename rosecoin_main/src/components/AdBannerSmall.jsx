import React from 'react'
import styled from 'styled-components'

const AdBannerSmall = () => {
  return (
    <Container>
      <iframe
        src='https://giphy.com/embed/n4YhRfDxqcyDGIEgwm'
        width='350'
        height='150'
        frameBorder='0'
        class='giphy-embed'
      ></iframe>
      <iframe
        src='https://giphy.com/embed/n4YhRfDxqcyDGIEgwm'
        width='350'
        height='150'
        frameBorder='0'
        class='giphy-embed'
      ></iframe>
      <iframe
        src='https://giphy.com/embed/n4YhRfDxqcyDGIEgwm'
        width='350'
        height='150'
        frameBorder='0'
        class='giphy-embed'
      ></iframe>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

export default AdBannerSmall
