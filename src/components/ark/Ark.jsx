import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import simpleParallax from 'simple-parallax-js';
import './ark.css'

const ArkBody = styled.div`
  position: relative;
  margin-top: 35%;
`
const Title = styled.div`
  color: var(--white);
  font-family: var(--font-family-valorant-regular);
  font-size: 122px;
  font-weight: 400;
  font-style: normal;
  position: relative;
  @media (max-width: 992px) {
    font-size: 80px;
  } 
`
const Title1 = styled.div`
  color: var(--white);
  font-family: var(--font-family-valorant-regular);
  font-size: 41px;
  font-weight: 400;
  font-style: normal;
  span{
    color:var(--eucalyptus);
  }
  margin-top: 50px;
`
const Title4 = styled.div`
  color: var(--white);
  font-family: var(--font-family-valorant-regular);
  font-size: 41px;
  font-weight: 400;
  font-style: normal;
  margin-top: 50px;
  span {
    color:var(--heliotrope);
  }
`
const Desc1 = styled.div`
  color: var(--white);
  font-family: var(--font-family-futurastd-medium);
  font-size: var(--font-size-m);
  font-weight: 500;
  font-style: normal;

`
const Title2 = styled.div`
  color: var(--white);
  font-family: var(--font-family-valorant-regular);
  font-size: 50px;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  margin-top: 50px;
`
const Title3 = styled.div`
  color: var(--white);
  font-family: var(--font-family-valorant-regular);
  font-size: 50px;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  margin-top: 200px;
  span{
    color:var(--heliotrope);
  }
`
const TextDiv = styled.div`
  width: 60%;
  margin-left: 5%;
  @media (max-width: 768px) {
    width: 90%;
  }
`
const Img = styled.img`
  margin-left: 10%;
  width: 80%;
  margin-top: 70px;
`

const SwordImgLeft = styled.img`
  position: absolute;
  top: 60%;
  left: 0%;
  transform: translate(0%, -50%);
  z-index: -1;
  @media (max-width: 992px) {
    width: 60%;
  }
`
const Items = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-left: 5%;
  margin-top: 50px;
  margin-bottom: 50px;
`
const TrailerBody = styled.div`
  margin-top: 600px;
`

const Ark = () => {
  const [clickedId, setClickedId] = useState(0)
  useEffect(() => {
    var image = document.querySelectorAll(".messiah-H4QoHh");
    {/* const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas"); */ }
    // console.log(typeof image)
    new simpleParallax(image, {
      orientation: "up right",
      scale: 1.2,
      // overflow: true,
      delay: 0.4,
      transition: "cubic-bezier(0.42,0,0.58,1)",
      maxTransition: 65
    });

    var image1 = document.querySelectorAll(".circuitries-mHJjGY");
    new simpleParallax(image1, {
      orientation: "up",
      scale: 1.2,
      overflow: false,
      delay: 0.4,
      transition: "cubic-bezier(0.42,0,0.58,1)",
    });
  }, [])

  const clickedItem = (id) => {
    setClickedId(id)
  }

  return (
    <ArkBody id='ark'>
      <Title><SwordImgLeft src='/assets/ASSETS/sword.png' alt='sword' />THE ARK</Title>
      <TextDiv>
        <Title1>What is <span>The Cognitive Ark</span></Title1>
        <Desc1>The Cognitive Ark is an interactive comic NFT with an epic cyberpunk visual and a thought-provoking storyline. And that’s not all: we seek to reform the NFT art landscape with our fun, unique, and straightforward gamification. Each NFT is special and acts like a puzzle piece needed to participate in our comic gamification (called the ‘Timeline’) and reward system. At the core, we’re dreamers and explorers—our colony is ever expanding beyond all borders, breaking boundaries with our mission to go multi-chain in the foreseeable future.</Desc1>
        <Title4><span>THE COGNITIVE ARK</span> UTILITY</Title4>
        <Desc1>As a holder, you will automatically have access to the exclusive membership of ArkDAO. The benefits include:
          - Exclusive and limited supply
          - Ability to play the Timeline to earn rewards
          - Ability to stake and earn $ARK while playing the Timeline
          - The rights to be elected as a Colony Council of ArkDAO
          - Accessing a unique role on Discord
          - Accessing Gamification V.0.2 benefits
          and many more to come!</Desc1>
        <Title1><span>THE COGNITIVE ARK</span> TRAITS</Title1>
        <Desc1>We poured much love into our Art. All of our Art is hand-drawn before they are digitally processed. There will be a story to be told on each TCA NFTs. That is why we decide to make each rarity has its own traits. There are categorized into nine traits and four rarities. Here is the list of them:</Desc1>
      </TextDiv>
      <Items>
        <ArkItem selected={true} title='Unknown memories' type='Common' number={70.16} id={0} clickedId={clickedId} clicked={clickedItem} />
        <ArkItem selected={false} title='memory of the present' type='rare' number={14.79} id={1} clickedId={clickedId} clicked={clickedItem} />
        <ArkItem selected={false} title='memory of the past' type='mystic' number={70.16} id={2} clickedId={clickedId} clicked={clickedItem} />
        <ArkItem selected={false} title='memory of the future' type='epic' number={9.29} id={3} clickedId={clickedId} clicked={clickedItem} />
      </Items>
      <TextDiv>
        <Desc1>In addition to that, NFT's rarity and Traits will impact the gamification. To score more points and earn more $ARK, you need to pay attention to the panel hints on each Timeline; some panels will give you $ARK multiplier! So make sure you stake the accurate Memory into the Timeline.</Desc1>

      </TextDiv>
      <TrailerBody>
        <Title3><span>THE COGNITION ARK</span> TEASER TRAILER</Title3>
        <Img src='/assets/Assets/Story_Trailer_POSTER.png' alt='Story_Trailer_POSTER.png'></Img>
      </TrailerBody>
      <div className="widget-wrapper-NXQfsS">
        <img className="messiah-H4QoHh" src="/assets/ASSETS/MESSIAH.png" alt='messiah' />
      </div>
      <div className="widget-wrapper-n9dWxW">
        <img className="circuitries-mHJjGY" src="/assets/ASSETS/CIRCUITRIES3.png" alt='circuitries' />
      </div>
    </ArkBody>
  )
}

export default Ark

export const ArkItem = (props) => {
  const { selected, title, type, number, id } = props;
  return (
    <div>
      <ItemBody selected={id == props.clickedId} onClick={() => props.clicked(id)}>
        {title}<br />
        &lt;<span>{type}</span>&gt; {number}%
      </ItemBody>
    </div>
  )
}

const ItemBody = styled.div`
  text-align: center;
  text-transform: uppercase;
  border-left: 5px solid white;
  color: white;
  font-family: var(--font-family-valorant-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
  // background-color: var(--black);
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
  span{
    color:var(--eucalyptus);
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 576px) {
    font-size: 15px;
  }
  ${(props) => {
    switch (props.selected) {
      case true:
        return css`
          background-color:black;
          padding-left: 10px;
          padding-right: 10px;
          border: 1px solid white;
        `;
      case false:
        return css`
          backgrond-color:none;
        `;
    }
  }}
`
// ${ (props: { selected?: any }) => {
