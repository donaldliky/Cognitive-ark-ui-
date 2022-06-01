import React, {useState, useEffect} from 'react'
import styled, { css } from 'styled-components'
import back from '../../assets/PLANET_BELOW.png'

const FuturastdBoldWhite16px = css`
  color: var(--white);
  font-family: var(--font-family-futurastd-bold);
  font-size: var(--font-size-m);
  font-weight: 700;
  font-style: normal;
  @media (max-width: 1200px) {
    font-size: 23px;
  }
`;

const FuturastdMediumWhite16px = css`
  color: var(--white);
  font-family: var(--font-family-futurastd-medium);
  font-size: var(--font-size-m);
  font-weight: 500;
  font-style: normal;
  @media (max-width: 1200px) {
    font-size: 23px;
  }
`;

const ValorantRegularNormalWhite122px = css`
  color: var(--white);
  font-family: var(--font-family-valorant-regular);
  font-size: var(--font-size-l);
  font-weight: 400;
  font-style: normal;
`;

const Border1pxWhite = css`
  border: 1px solid var(--white);
`;

const Join = () => {
  let [pos0, setPos0] = useState({left: 30, top: 0})
  let [pos1, setPos1] = useState({left: 60, top: 15})
  let [pos2, setPos2] = useState({left: 0, top: 20})
  let [pos3, setPos3] = useState({left: 40, top: 40})

  return (
    <div>
      <JoinBody>
      <Title>JOIN US</Title>
      <Body>
        <Say>
          <SayText>
           ‘LOGIC WILL GET YOU FROM A TO B.
            IMAGINATION WILL TAKE YOU EVERYWHERE.’
            <br />
            <span>ALBERT EINSTEIN</span>
          </SayText>
        </Say>
        <JOINUS>
          <Rec0>
            <RecTop>
              <ImgShape src='/assets/ASSETS/Shape_1.png' alt='shape' />
            </RecTop>
            <RecBottom>
              <RecLeft>
                <LinkName>DISCORD</LinkName>
                <LinkDesc>Join the colony</LinkDesc>
              </RecLeft>
              <RecRight>
                <Img src={'/assets/ASSETS/Layer_20.png'} alt={'discord'} />
              </RecRight>
            </RecBottom>
          </Rec0>
          <Rec1>
            <RecTop>
              <ImgShape src='/assets/ASSETS/Shape_1.png' alt='shape' />
            </RecTop>
            <RecBottom>
              <RecLeft>
                <LinkName>Twitter</LinkName>
                <LinkDesc>Be the first to know</LinkDesc>
              </RecLeft>
              <RecRight>
                <Img src='/assets/ASSETS/Twitter-logo-png.png' alt={'twitter'} />
              </RecRight>
            </RecBottom>
          </Rec1>
          <Rec2>
            <RecTop>
              <ImgShape src='/assets/ASSETS/Shape_1.png' alt='shape' />
            </RecTop>
            <RecBottom>
              <RecLeft>
                <LinkName>GITBOOK</LinkName>
                <LinkDesc>Know us better</LinkDesc>
              </RecLeft>
              <RecRight>
                <Img src={'/assets/ASSETS/Layer_21.png'} alt={'Layer_21.png'} />
              </RecRight>
            </RecBottom>
          </Rec2>
          <Rec3>
            <RecTop>
              <ImgShape src='/assets/ASSETS/Shape_1.png' alt='shape' />
            </RecTop>
            <RecBottom>
              <RecLeft>
                <LinkName>INSTAGRAM</LinkName>
                <LinkDesc>Visual treatment</LinkDesc>
              </RecLeft>
              <RecRight>
                <Img src={'/assets/ASSETS/n_7390.png'} alt={'n_7390'} />
              </RecRight>
            </RecBottom>
          </Rec3>
        </JOINUS>
        {/* <JOINUS>
          <LinkItem
            name="DISCORD"
            desc="Join the colony"
            image="/assets/ASSETS/Layer_20.png"
            shape="/assets/ASSETS/Shape_1.png"
            top={pos0.top}
            left={pos0.left}
          />
          <LinkItem
            shape="/assets/ASSETS/Shape_1.png"
            name="TWITTER"
            desc="Be the first to know"
            image="/assets/ASSETS/Twitter-logo-png.png"
            top={pos1.top}
            left={pos1.left}
          />
        
          <LinkItem
            name="GITBOOK"
            desc="Know us better"
            image="/assets/ASSETS/Layer_21.png"
            shape="/assets/ASSETS/Shape_1.png"
            top={pos2.top}
            left={pos2.left}
          />
          <LinkItem
            name="INSTAGRAM"
            desc="Visual treatment"
            image="/assets/ASSETS/n_7390.png"
            shape="/assets/ASSETS/Shape_1.png"
            top={pos3.top}
            left={pos3.left}
          />
        </JOINUS> */}
      </Body>
      </JoinBody>
    </div>
  )
}

export default Join

const Rec0 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 30%;
  top: 0%; 
  
`
const Rec1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 60%;
  top: 15%; 
  @media (max-width: 768px) {
    top: 35%;
  }
`
const Rec2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0%;
  top: 20%; 
`
const Rec3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 40%;
  top: 40%; 
  @media (max-width: 1700px) {
    top: 50%; 
  }
  @media (max-width: 768px) {
    top: 70%;
  }
`

const JoinBody = styled.div`
  width: 100%;
  background-image: url(${back});
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: 25%;
  margin-top: 15%;
  padding-top: 7%;
  padding-bottom: 10px;
  @media (max-width: 992px) {
    background-size: 300%;
  }
`
const Body = styled.div`
  width: 90%;
  margin-left: 5%;
  display: flex;
  
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`
const Say = styled.div`
  width: 40%;
  height: 800px;

  @media (max-width: 992px) {
    width: 100%;
    height: auto;
  }
`
const SayText = styled.div`
  font-family: var(--font-family-futurastd-medium);
  font-weight: 500;
  color: var(--white);
  font-size: var(--font-size-xl);
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  line-height: 60px;
  span {
    color: var(--eucalyptus);
    text-align: left;
  }
`
const Title = styled.div`
  font-size: 122px;
  color: white;
  text-align: right;
  margin-right: 40px;
`

const JOINUS = styled.div`
  width: 55%;
  position: relative;
  height: 1000px;
  @media (max-width: 992px) {
    width: 100%;
    height: 800px;
    margin-top: 50px;
  }
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 701px;
  height: 567px;
  top: 14px;
  left: 242px;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 702px;
  height: 376px;
  top: 431px;
  left: 0;
`;

// const LinkItem = (props: any) => {
//   const { name, desc, image, shape, top, left } = props;

//   return (
//     <Rec top={top} left={left}>
//       <RecTop>
//         <ImgShape src={shape} alt='shape' />
//       </RecTop>
//       <RecBottom>
//         <RecLeft>
//           <LinkName>{ name }</LinkName>
//           <LinkDesc>{ desc }</LinkDesc>
//         </RecLeft>
//         <RecRight>
//           <Img src={image} alt={image} />
//         </RecRight>
//       </RecBottom>
//     </Rec>
//   )
// }

// const Rec = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
  
//   ${(props:{left?:any,top?: any})=>{
//     return css`
//       top: ${props.top}%;
//       left: ${props.left}%;
//     `;
//   }}
// `
const RecTop = styled.div`

`
const ImgShape = styled.img`

`
const RecBottom = styled.div`
  // width: 274px;
  // height: 87px;
  // top: 138px;
  // left: 0;
  background-color: var(--black);
  border: 1px solid white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
`

const RecLeft = styled.div`
`
const RecRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const LinkName = styled.div`
  ${FuturastdBoldWhite16px}
`
const LinkDesc = styled.div`
  ${FuturastdMediumWhite16px};
  white-space: nowrap;
`
const Img = styled.img`
  width: 90%;
  
`