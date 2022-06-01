import * as React from 'react';
import { useState, useEffect } from 'react';

import styled, {css} from 'styled-components'

const que1 = 'Is there any benefit in minting multiple NFTs?'
const ans1 = [
  // '-answer1'
]

const que2 = 'What is the price and supply?'
const ans2 = [
  '- Mint price is 0.44 SOL',
  '- A total of 3644 NFTs will be available on upcoming public mint',
  '- There are 1822 supplies for each faction',
  '- We have a total of 4444 initial supply and 800 will be minted during pre-sale'
]
const que3 = 'What is a whitelist and how do I get it?'
const ans3 = [
  // '-answer3'
]

const que4 = 'Which marketplace will it be listed on?'
const ans4 = [
  // '-answer4'
]

const que5 = 'Why should I mint?'
const ans5 = [
  // '-answer5'
]

const Faq = () => {
  return (
    <FaqBody>
      <Img src='/assets/ASSETS/MOON.png' alt='MOON' />
      <Title>
        <span className="valorant-regular-normal-white-122px">
          FREQUENTLY
          <br />
        </span>
        <span className="valorant-regular-normal-white-122px">
          ASKED
          <br />
        </span>
        <span className="valorant-regular-normal-white-122px">QUESTIONS</span>
      </Title>
      <FaqItems>
        <FaqItem que={que1} ans={ans1} />
        <FaqItem que={que2} ans={ans2} />
        <FaqItem que={que3} ans={ans3} />
        <FaqItem que={que4} ans={ans4} />
        <FaqItem que={que5} ans={ans5} />
      </FaqItems>
    </FaqBody>
  )
}

export default Faq

const FaqBody = styled.div`
  margin-top: 300px;
  position: relative;
`
const Img = styled.img`
  position: absolute;
  left: 10px;
  top: -100px;
  z-index: -1;
`
const Title = styled.div`
  color: var(--white);
  font-family: var(--font-family-valorant-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
  margin-left: 10%;
`;
const FaqItems = styled.div`
  margin-left: 10%;
  width: 50%;
  @media (max-width: 768px) {
    width: 80%;
  }
`
export const FaqItem = (props: any) => {
  const {selected, que, ans} = props;
  const [showFlag, setShowFlag] = useState(false)
  const items = ans.map((val: string, index: number) => {
        return <Ans show={showFlag} key={index} >{val}</Ans>
      })
  return (
    <ItemBody onClick={() => setShowFlag(!showFlag)}>
      <Que>{que}</Que>
      {items}
    </ItemBody>
  )
}
const ItemBody = styled.div`
  border: 1px solid white;
  background-color: black;
  color: white;
  margin-top: 30px;
  padding: 20px;
  padding-bottom: 25px;
  cursor: pointer;
`
const Que = styled.div`
  font-family: var(--font-family-futurastd-bold);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;
  margin-bottom: 10px;
`
const Ans = styled.div`
  font-family: var(--font-family-myriadpro-regular);
  font-size: var(--font-size-s);
  font-weight: 400;
  line-height: 35px;
  ${(props:{show?:any})=>{
    switch(props.show){
      case true:
        return css`
          display: flex;
        `;
      case false:
        return css`
          display: none;
        `;
    }
  }}
`