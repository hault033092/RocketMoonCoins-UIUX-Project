import React from 'react'
import styled from 'styled-components'

const AdBannerLarge = () => {
  return (
    <Container>
      <iframe
        src='https://giphy.com/embed/1YDSmdpQWEZ0uvAIQT'
        width='480'
        height='270'
        frameBorder='0'
        class='giphy-embed'
      ></iframe>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 30rem;
`

export default AdBannerLarge
