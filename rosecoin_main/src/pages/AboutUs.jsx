import React from 'react'
import styled from 'styled-components'

const AboutUs = () => {
  return (
    <div>
      <Div1>
        <Head1>
          hello
        </Head1>
      </Div1>
      <Div2>
        <Head1>
          placeholder2
        </Head1>
      </Div2>
      <Div3>
        <Head1>
          placeholder3
        </Head1>
      </Div3>
      <Div4>
        <Head1>
          placeholder4
        </Head1>
      </Div4>
    </div>
  )
}

const Head1 = styled.h1`
    color: red;
    justify-items: center;
`
const Div1 = styled.div`
    float: left;
    width: 50%;
    height: 50%;
    float: left;
    background: red; 
`
const Div2 = styled.div`
    float: left;
    width: 50%;
    height: 50%;
    float: left;
    background: blue; 
`
const Div3 = styled.div`
    float: left;
    width: 50%;
    height: 50%;
    float: left;
    background: yellow; 
`
const Div4 = styled.div`
    float: left;
    width: 50%;
    height: 50%;
    float: left;
    background: grey; 
`

export default AboutUs