import React, {useState, useEffect} from "react";
import styled, {css} from "styled-components";
import back from '../../assets/ellipse.png'

import {
  FuturastdHeavyNormalMonteCarlo547px,
  FuturastdHeavyNormalMonteCarlo524px,
  ValorantRegularNormalWhite817px,
  ValorantRegularNormalWhite277px,
  ValorantRegularNormalWhite324px,
  Border1pxWhite,
  FuturastdMediumWhite224px,
  ValorantRegularNormalWhite122px
} from "./styledMixins";

const Roadmap = () => {
  const [clickedItem, setClickedItem] = useState(0)
  const [clickedQtext, setClickedQtext] = useState(0)
    return (
      <RoadmapBody id="roadmap">
        <Title>ROADMAP</Title>
        <Img3 src="/assets/ASSETS/gradient_2.png" alt="gradient_2.png" />
        <Content>         
          <Container>
            <Layer1>
              <Layer15 src="/assets/ASSETS/Layer_15.png" />
            </Layer1>

            <TEXTQ>
              <Q1 onClick={() => setClickedQtext(0)}>
                <OverlaContainer>
                  <OverlapGroup8>
                    <Price qselected={clickedQtext == 0}>Q</Price>
                    <Number qselected={clickedQtext == 0}>1</Number>
                    <Number1 qselected={clickedQtext == 0}>2022</Number1>
                  </OverlapGroup8>
                </OverlaContainer>
              </Q1>
              <Q1 onClick={() => setClickedQtext(1)}>
                <OverlaContainer>
                  <OverlapGroup8>
                    <Price qselected={clickedQtext == 1}>Q</Price>
                    <Number qselected={clickedQtext == 1}>2</Number>
                    <Number1 qselected={clickedQtext == 1}>2022</Number1>
                  </OverlapGroup8>
                </OverlaContainer>
              </Q1>
              <Q1 onClick={() => setClickedQtext(2)}>
                <OverlaContainer>
                  <OverlapGroup8>
                    <Price qselected={clickedQtext == 2}>Q</Price>
                    <Number qselected={clickedQtext == 2}>3</Number>
                    <Number1 qselected={clickedQtext == 2}>2022</Number1>
                  </OverlapGroup8>
                </OverlaContainer>
              </Q1>
              <Q1 onClick={() => setClickedQtext(3)}>
                <OverlaContainer>
                  <OverlapGroup8>
                    <Price qselected={clickedQtext == 3}>Q</Price>
                    <Number qselected={clickedQtext == 3}>4</Number>
                    <Number1 qselected={clickedQtext == 3}>2022</Number1>
                  </OverlapGroup8>
                </OverlaContainer>
              </Q1>
            </TEXTQ>
            <QBody>
              
              <FlexCol>
                <Item onClick={() => setClickedItem(0)}>
                  <ItemLeft selected={clickedItem == 0}></ItemLeft>
                  <ItemRight>
                    <DISCORDANDWEBSITELAUNCH selected={clickedItem == 0}>
                      DISCORD AND WEBSITE LAUNCH
                    </DISCORDANDWEBSITELAUNCH>
                    <CreatingASpaceFor>
                      <span className={clickedItem == 0 ? 'selected-futurastd-medium-white-22-4px' : "futurastd-medium-white-22-4px"}>
                        Creating a space for the colony to settle, marking our way in
                        <br />Terra-verse for other survivors to join our journey</span>
                    </CreatingASpaceFor>
                  </ItemRight>
                </Item>
                <Item onClick={() => setClickedItem(1)}>
                  <ItemLeft selected={clickedItem == 1}></ItemLeft>
                  <ItemRight>
                    <DISCORDANDWEBSITELAUNCH selected={clickedItem == 1}>STORY AND LORE REVEAL</DISCORDANDWEBSITELAUNCH>
                    <span className={clickedItem == 1 ? 'selected-futurastd-medium-white-22-4px' : "futurastd-medium-white-22-4px"}>Story Trailer launch and weekly updated Lore on Discord</span>
                  </ItemRight>
                </Item>
                <Item onClick={() => setClickedItem(2)}>
                  <ItemLeft selected={clickedItem == 2}></ItemLeft>
                  <ItemRight>
                    <DISCORDANDWEBSITELAUNCH selected={clickedItem == 2}>MINTING 100 A.N.I.M.A</DISCORDANDWEBSITELAUNCH>
                    <span className={clickedItem == 2 ? 'selected-futurastd-medium-white-22-4px' : "futurastd-medium-white-22-4px"}>2nd Marketplace Listing</span>
                  </ItemRight>
                </Item>
                <Item onClick={() => setClickedItem(3)}>
                  <ItemLeft selected={clickedItem == 3}></ItemLeft>
                  <ItemRight>
                    <DISCORDANDWEBSITELAUNCH selected={clickedItem == 3}>
                      
                        GEN-0
                        <br />
                      WHITELIST MINTING&nbsp;
                      <span className="futurastd-book-normal-white-22-4px">[24</span>
                      <span className="futurastd-book-normal-white-22-4px">h</span>
                      <span className="futurastd-book-normal-white-22-4px">ours</span>
                      <span className="futurastd-book-normal-white-22-4px">
                        ]<br />
                      </span>
                      PUBLIC MINTING
                    
                    </DISCORDANDWEBSITELAUNCH>
                    <span className={clickedItem == 3 ? 'selected-futurastd-medium-white-22-4px' : "futurastd-medium-white-22-4px"}>Releasing gen0 into the Terra-verse</span>
                  </ItemRight>
                </Item>
                <Item onClick={() => setClickedItem(4)}>
                  <ItemLeft selected={clickedItem == 4}></ItemLeft>
                  <ItemRight>
                    <DISCORDANDWEBSITELAUNCH selected={clickedItem == 4}>NFT REVEAL</DISCORDANDWEBSITELAUNCH>
                    <span className={clickedItem == 4 ? 'selected-futurastd-medium-white-22-4px' : "futurastd-medium-white-22-4px"}>2nd Marketplace Listing</span>
                  </ItemRight>
                </Item>
                <Item onClick={() => setClickedItem(5)}>
                  <ItemLeft selected={clickedItem == 5}></ItemLeft>
                  <ItemRight>
                    <DISCORDANDWEBSITELAUNCH selected={clickedItem == 5}>COLONY INVESTMENT PROGRAM</DISCORDANDWEBSITELAUNCH>
                    <span className={clickedItem == 5 ? 'selected-futurastd-medium-white-22-4px' : "futurastd-medium-white-22-4px"}>
                        Reinvesting the minting proceeds from DAO Treasury
                        <br />70% into Anchor locked for 2 years<br />30% into Ark DAO chosen projects on Terra</span>
                  </ItemRight>
                </Item>
              </FlexCol>
              <PromotionalIG2 src="/assets/ASSETS/Promotional-IG-2.png" />
            </QBody>
          </Container>
          <Img1 src="/assets/ASSETS/Jehovah.png" alt="Jehovah.png" />
          <Img2 src="/assets/ASSETS/Ruach.png" alt="Ruach.png" />
          <Img4 src="/assets/ASSETS/gradient_1.png" alt='gradient_1.png' />
        </Content>
      </RoadmapBody>
    );
}

export default Roadmap;

const Item = styled.div`
  display: flex;
  // align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 30px;
  cursor: pointer;
`
const ItemLeft = styled.div`
  ${Border1pxWhite}
  position: relative;
  width: 26px;
  height: 26px;
  top: 0;
  left: 0;
  border-radius: 12.93px/12.95px;
  min-width: 26px;
  cursor: pointer;
  ${ (props: { selected?: any }) => {
    if (props.selected) {
      return css`
        background-color: var(--eucalyptus);      
      `
    }
  }}
`
const ItemRight = styled.div`
  margin-left: 30px;
`
const Img1 = styled.img`
  position: absolute;
  left: 10px;
  bottom: 50px;
`
const Img2 = styled.img`
  position: absolute;
  right: 10px;
  bottom: 150px;
`
const Img3 = styled.img`
  position: absolute;
  left: -500px;
  top: -300px;
`
const Img4 = styled.img`
  position: absolute;
  top: 20%;
  right: 0px;
  z-index: -3;
  @media (max-width: 1024px) {
    top: 43%;  
  }
`
const RoadmapBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 25%;
`;
const Title = styled.h1`
  ${ValorantRegularNormalWhite122px}
  margin-top: 1px;
  text-align: center;
  
`;
const Content = styled.div`
  width: 100%;
  position: relative;
  margin-top: 60px;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: 150% 100%;
  background-position: center;
`;
const Container = styled.div`
  max-width: 1920px; 
  margin: 0 auto;
`
const QBody = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  width: 80%;
  margin-left: 10%;
  margin-top: 100px;
  margin-bottom: 200px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const FlexCol = styled.div`
  width: 50%;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;
  postition: relative;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Layer1 = styled.div`
  margin-top: 90px;
  margin-left: 40%;
  flex: 1;
  width: 100px;
  display: flex;
  transform: rotate(178.04deg);
`;

const Layer15 = styled.img`
  margin-top: -1.7px;
  margin-left: -2.3px;
  margin-right: -2.3px;
  flex: 1;
  margin-bottom: -1.7px;
  width: 104.46197509765625px;
  transform: rotate(-178.04deg);
  object-fit: cover;
`;

const DISCORDANDWEBSITELAUNCH = styled.div`
  ${ValorantRegularNormalWhite324px}
  color: #898981;
  text-shadow: 2px 2px white;
  position: relative;
  letter-spacing: 0;
  ${ (props: { selected?: any }) => {
    if (props.selected) {
      return css`
          color: white;
          text-shadow: 2px 2px #898981;
      `
    }
  }}
`;

const CreatingASpaceFor = styled.div`
  ${FuturastdMediumWhite224px}
  position: relative;
  // width: 636px;
  // height: 282px;
  // top: 32px;
  left: 2px;
  letter-spacing: 0.45px;
  line-height: 27.6px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 424px;
  height: 34px;
  top: 109px;
  left: 0;
`;

const PromotionalIG2 = styled.img`
  width:50%;
  // margin-left: 5%;
  // margin-top: 179.07px;
  object-fit: cover;
  position: relative;
  z-index: -1;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const TEXTQ = styled.div`
  position: relative;
  height: 110px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  @media (max-width: 768px) {
    // justify-content: center;
  }
`;

const Q1 = styled.div`
  height: 99px;
  margin-top: 2.28px;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
`;

const OverlaContainer = styled.div`
  width: 202px;
  height: 111px;
  position: relative;
  margin-top: -8.52px;
  @media (max-width: 992px) {
    width: 150px;
    width: 80px;
  }
`;

const OverlapGroup8 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Price = styled.div`
  color: #898981;
  font-family: var(--font-family-valorant-regular);
  font-size: 100px;
  font-weight: 400;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-text-stroke: 2px var(--black);
  text-align: center;
  letter-spacing: 0;
  line-height: 98px;
  @media (max-width: 992px) {
    font-size: 70px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  ${ (props: { qselected?: any }) => {
    if (props.qselected) {
      return css`
        color: white;
      `
    }
  }}
`;

const Number = styled.div`
  ${FuturastdHeavyNormalMonteCarlo547px}
  position: absolute;
  top: 40px;
  left: 55px;
  -webkit-text-stroke: 2px var(--black);
  text-align: center;
  line-height: 65.7px;
  font-size: 50px;
  color: #898981;
  @media (max-width: 992px) {
    font-size: 30px;
    left: 50px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    left: 30px;
  }
  ${ (props: { qselected?: any }) => {
    if (props.qselected) {
      return css`
        color: var(--monte-carlo);
      `
    }
  }}
`;

const Number1 = styled.div`
  ${FuturastdHeavyNormalMonteCarlo524px}
  position: absolute;
  top: 18px;
  left: 78px;
  -webkit-text-stroke: 2px var(--black);
  text-align: center;
  letter-spacing: 0;
  line-height: 62.9px;
  white-space: nowrap;
  font-size: 40px;
  color: #898981;
  @media (max-width: 992px) {
    font-size: 30px;
    left: 60px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    left: 40px;
  }
  ${ (props: { qselected?: any }) => {
    if (props.qselected) {
      return css`
          color: var(--monte-carlo);
      `
    }
  }}
`;