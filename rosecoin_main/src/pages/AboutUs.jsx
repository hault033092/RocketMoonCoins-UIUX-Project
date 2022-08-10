import React from 'react'
import styled from 'styled-components'

const AboutUs = () => {
  return (
    <div>
      <Container>
        <Content1>
          <h3>ABOUT ROSECOIN</h3>
          <br />
          <p>
            Rosecoin with a thorough understanding of our clients'​ needs and
            understanding of culture, lifestyle as well as business practices
            has generated a distinctive Blockchain-as-a-Service (BAAS) platform.
            We also offers a white label Crypto exchange & more software
            solutions. Along with Web 3.0 infrastructure, businesses can
            customize their own crypto currency trading platform - Web3
            platforms in DeFi & NFT space. Our team consists of Small and
            medium-sized enterprises (SME) developers & designers who are
            acquainted with blockchain technology-related. By deploying the
            latest technology stack, our developers and designers create
            interactive UI/UX, Blockchain experts, auditors, and quality
            analysts, market analysts, content writers. Rosecoin strives to
            deliver a finest and supreme service in Marketing and PR solutions.
          </p>
        </Content1>
        <Content2>
          <h3>INFLUENCER MARKETING</h3>
          <br />
          <p>
            Here at Rosecoin, we do full-serivce influencer marketing on a
            variety of platforms, including Telegram, Discord, and Facebook
          </p>
        </Content2>
        <Content3>
          <h3>SPONSERED CONTENT</h3>
          <br />
          <p>
            We do advertisements and digital marketing campaigns through our ad
            banners.
          </p>
        </Content3>
        <Content4>
          <h3>COMMUNITY GROWTH AND MANAGEMENT</h3>
          <br />
          <p>
            Through skilled moderation and effective promotional campaigns, we
            significantly increase the number of our Discord & Telegram
            Communities
          </p>
        </Content4>
        <Content5>
          <h3>PAID MEDIA</h3>
          <br />
          <p>
            Get relevant traffic of users and revenue through Facebook, Twitter,
            and LinkedIn ads
          </p>
        </Content5>
        <Content6>
          <h3>CRYPTO MEDIA ADS</h3>
          <br />
          <p>
            Here at Rosecoin, we promote your businesses, especially
            crypto-related ones, on our channels and media
          </p>
        </Content6>
      </Container>
    </div>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  text-align: center;
  transition: all 0.25s ease-in-out;
  @media (max-width: 500px) {
    grid-template-columns: auto auto auto;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      'content1'
      'content2'
      'content3'
      'content4'
      'content5'
      'content6';
    flex-direction: column;
  }
`

const Content1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--navyviolet);
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  color: var(--golden);
  h3 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
`
const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--golden);
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  color: black;
  h3 {
    text-align: center;
  }
  p {
    text-align: justify;
    font-weight: 500;
  }
`
const Content3 = styled(Content1)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Content4 = styled(Content2)``
const Content5 = styled(Content1)``
const Content6 = styled(Content2)``

export default AboutUs
