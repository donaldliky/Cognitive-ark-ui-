import React from 'react'
import styled, {css} from 'styled-components'
import ss from '../../assets/BUBBLE.png'
import back1 from '../../assets/CIRCUITRIES.png'

const CognitionBody = styled.div`
  margin-top: 10%;
  background-image: url(${back1});
  background-repeat: no-repeat;
  background-size: 180%;
  background-position: bottom right;
  padding-top: 15%;
`
const Title = styled.div`
  color: var(--white);
  font-family: var(--font-family-valorant-regular);
  font-size: 122px;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  text-align: right;
  margin-right: 5%;
  @media (max-width: 992px) {
    font-size: 80px;
  }
  @media (max-width: 576px) {
    font-size: 60px;
  }
`
const Title1 = styled.div`
  color: var(--heliotrope);
  font-family: var(--font-family-valorant-regular);
  font-size: 41px;
  font-weight: 400;
  font-style: normal;
  text-align: right;
  margin-right: 5%;
`
const Desc1 = styled.p`
  color: var(--white);
  font-family: var(--font-family-futurastd-medium);
  font-size: var(--font-size-m);
  font-weight: 500;
  font-style: normal;
  text-align: right;
  width: 80%;
  margin-left: 15%;
`
const SwordImgRight = styled.img`
  margin-right: 0px;
  @media (max-width: 992px) {
    width: 100%;    
  }
`
const ImgTest = styled.img`
  margin-top: 50px;
  margin-left: 10%;
  width: 40%;
`
const ImgSlide = styled.img`
  width: 90%;
  margin-left: 5%;
`
const Desc2 = styled.div`
  font-family: var(--font-family-futurastd-heavy);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-xl);
  text-align: center;
  letter-spacing: 0.75px;
  line-height: 37.7px;
  margin-top: 25%;
`
const Desc3 = styled.div`
  font-weight: 400;
  color: var(--eucalyptus);
  font-size: var(--font-size-xl);
  text-align: center;
  letter-spacing: 0.75px;
  line-height: 37.7px;
  font-family: var(--font-family-valorant-regular);
  margin-top: 5px;
`
const Body = styled.div`
  display: flex;
  justify-content: space-between;
`
const ImgLeft = styled.img`
  // width: 100%;
`
const BubbleImgDiv = styled.div`
  width: 504px;
  height: 608px;
  // display: flex;
  // align-items: flex-end;
  background-image: url(${ss});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  text-transform: uppercase;
  color: var(--black);
  font-family: var(--font-family-animeace2_0bb);
  font-size: var(--font-size-m);
  font-style: normal;
  // position: absolute;
`
const ImgLeftBack = styled.img`
  position: absolute;
  right: 0px;
`
const Cognition = () => {
  return (
    <div>
    <CognitionBody id='cognition'>
        <Title>the cognitiON</Title>
        <div style={{ width: '100%', textAlign: 'right' }}>
          <SwordImgRight src='/assets/ASSETS/sword_copy.png' alt='sword_copy.png' />
        </div>
        <Body>
          <div style={{ position: 'relative', width: '30%' }}>
            <ImgLeft src='/assets/ASSETS/SUIT.png' alt='SUIT.png' />
            {/* <ImgLeftBack src='/assets/ASSETS/CIRCUITRIES.png' alt='CIRCUITRIES.png' /> */}
            {/* <BubbleImgDiv>
              The ark’s art<br /> style is heavily<br/> influenced by<br/> manga style<br/> AND ethnic<br/> traditional elements!
            </BubbleImgDiv> */}
            <Comment />
          </div>
          <div style={{width: '70%'}}>
          <Title1>COGNIZING THE VISUAL CONCEPT</Title1>
            <Desc1>Our Loremaster and Artist (or ‘Arktist’) work closely together to evoke a certain kind of atmosphere through the story and the visuals. It is the hauntingly beautiful atmosphere of a post-apocalyptic world—of the transient nature of familiarity—of the thin and fragile line between human civilization and outright insanity. It is the mythical and sublime feeling of surrendering into the void, into the utterly unknown and unimaginable.
              We are moved and inspired by the dark psychological surrealism found in certain anime, manga, and games such as Attack on Titan, The End of Evangelion, GANTZ, Blame!, Ghost in the Shell, Nier, and Persona. This fascination, coupled with our deep respect for the rich neo-mythical universe of Neil Gaiman’s ‘Sandman’, has shaped our trajectory of aesthetics. We seek to create a world in which the flowering of the human spirit occurs through a trial of death and destruction.</Desc1>
            <ImgSlide src='/assets/ASSETS/Promotional-Wallpaper-1.png' alt='Promotional-Wallpaper-1.png' />
            <ImgTest src='/assets/ASSETS/TEST_02_Memory_of_The_Present_cd.png' alt='TEST_02_Memory_of_The_Present_cd.png' />
            
          </div>
        </Body>
      </CognitionBody>
        <Desc2>"YOU SHOULDN&#39;T TRUST THE STORYTELLER; ONLY TRUST THE STORY."</Desc2>
        <Desc3>NEIL GAIMAN</Desc3>
    </div>
  )
}

export default Cognition

const Animeace20bbNormalBlack31px = css`
  color: var(--black);
  font-family: var(--font-family-animeace2_0bb);
  font-size: 28px;
  font-style: normal;
  text-transfrom: uppercase;
`;

export const Comment = () => {
  
    return (
        <Bubble>
          <TheArksArtStyle>
            <span className="animeace2-0bb-normal-black-31px">
              The ark’s art<br /> style is heavily<br/> influenced by<br/> manga style<br/> AND ethnic<br/> traditional<br/> elements!
            </span>
          </TheArksArtStyle>
        </Bubble>
    );
}

const Bubble = styled.div`
  width: 556px;
  height: 658px;
  display: flex;
  align-items: flex-end;
  background-image: url(${ss});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  position: absolute;
  top: 25%;
  left: 30%;
  @media (max-width: 768px) {
    width: 350px;
    heigth: 350px;
    background-size: 100% 100%;
  }
`;

const TheArksArtStyle = styled.h1`
  ${Animeace20bbNormalBlack31px}
  margin-bottom: 8.3px;
  height: 342.0067138671875px;
  margin-left: 50px;
  margin-right: 20px;
  flex: 1;
  text-align: center;
  font-size: 28px;
`;

