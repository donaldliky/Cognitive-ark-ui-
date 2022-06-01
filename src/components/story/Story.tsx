import React from 'react'
import styled, { css } from 'styled-components'
import back from '../../assets/SHIELD.png'

const StoryDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 100px;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: top;
  margin-top: 15%;

`
const Title = styled.div`
  color: var(--white);
  font-family: var(--font-family-valorant-regular);
  font-size: 122px;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 992px) {
    font-size: 80px;
  }
`
const Title1 = styled.h1`
  font-family: var(--font-family-valorant-regular);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-xxl);
  text-align: center;
  letter-spacing: 1.2px;
  line-height: 40px;
`
const Span0 = styled.span`
  color: var(--heliotrope);
  letter-spacing: 1.6px;
`;

const Span9 = styled.span`
  font-family: var(--font-family-futurastd-heavy);
  font-size: var(--font-size-l);
`;

export const FuturastdMediumWhite30px = css`
  color: var(--white);
  font-family: var(--font-family-futurastd-medium);
  font-size: var(--font-size-l);
  font-weight: 500;
  font-style: normal;
`;

const Title2 = styled.h1`
  color: var(--white);
  font-family: var(--font-family-futurastd-heavyoblique);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
  text-align: center;
  margin: 5%;
`

const FuturastdMediumWhite28px = css`
  color: var(--white);
  font-family: var(--font-family-futurastd-medium);
  font-size: var(--font-size-m);
  font-weight: 500;
  font-style: normal;
  text-align: center;
`;

const TheCognitiveArkWa = styled.h1`
  ${FuturastdMediumWhite28px}
  text-align: center;
  letter-spacing: 1.12px;
`;

const FuturastdBookNormalWhite28px = css`
  color: var(--white);
  font-family: var(--font-family-futurastd-book);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
`;

const InThe23rdCentury = styled.h1`
  ${FuturastdBookNormalWhite28px}
  text-align: center;
  letter-spacing: 1.12px;
`;

const Img = styled.img`
  width: 70%;
`


const Story = () => {
  return (
    <div>
      <StoryDiv id='story'>
        <Title>story and lore</Title>
        <Title1>
            <Span0>
          THE GENESIS
          <br />
        </Span0>
        <span className="futurastd-medium-white-30px">
          <br />
        </span>
        <span className="futurastd-medium-white-30px">
          Throughout the years, mankind has faced countless losses and blessings - great wars and times
          of peace. But, although destruction and resurrection are ever inevitable, mankind cannot
          escape from their biggest enemy: their own ego.
          <br /><br/>
          For some, immortality was the key to mankind&#39;s biggest mystery - their own existence.
          Once mankind discovered that death was inevitable, death itself became humanity&#39;s common enemy. For this reason, mankind
          finally put aside their differences and moved towards the same goal. Throughout the passage of time, along with the flourishing of
          new technology, mankind found a way to prolong their existence. </span>
        <Span9>The Cognitive Ark</Span9> <span className="futurastd-medium-white-30px"> was born.</span>
        </Title1>
      <div style={{ width: '100%', textAlign: 'center', marginTop: '10%' }}>
        <Img src='/assets/ASSETS/The_Cognitive_Ark.png' alt='The_Cognitive_Ark.png' />
      </div>
      <Title2>The Cognitive Ark</Title2>
      <TheCognitiveArkWa>
        <span className="futurastd-medium-white-28px">
          The Cognitive Ark was a device capable of transferring human consciousness into another object at will. The machine scattered the
          very foundation of a soul: the conscious memories. The process involved a  hazardous neuro-psychological method that required a strong body, mind, and spirit to withstand it. 
        </span>
        <span className="futurastd-medium-white-28px">
          It could even take one&#39;s life or scramble one&#39;s mind to the point of no return. Nevertheless, 
          it granted access to the One Consciousness - &#34;The All&#39;.
          <br />
        </span>
        <span className="futurastd-medium-white-28px">
          <br />
        </span>
        <span className="futurastd-medium-white-28px">
          In the Ark, those who survived the procedure would be granted a greater and higher knowledge of 
        </span>
        <span className="futurastd-medium-white-28px">
          existence, downloading numerous probabilities that reality could offer. Many had tried, and many 
        </span>
        <span className="futurastd-medium-white-28px">
          had failed. Yet, the survivors were given the fruit of immortality, able to preserve their
        </span>
        <span className="futurastd-medium-white-28px">consciousness through transference at will.</span>
      </TheCognitiveArkWa>
      <div style={{ width: '100%', textAlign: 'center', marginTop: '10%' }}>
        <Img src='/assets/ASSETS/MESSIAH_BLUEPRINT.png' alt='MESSIAH_BLUEPRINT.png' />
      </div>
      <Title2 style={{ marginTop: '10px' }}>Mothership Messiah — First Concept Blueprint</Title2>
      <InThe23rdCentury>
        <span className="futurastd-book-normal-white-28px">In the 23</span>
        <span className="futurastd-book-normal-white-28px">rd</span>
        <span className="futurastd-book-normal-white-28px">
          {" "}
          century, a mass cataclysmic outbreak drove mankind—or what was left of us—to leave
          
        </span>
        <span className="futurastd-book-normal-white-28px">
          Earth, the only home we had ever known. The Mothership ‘Messiah’ was one of the three
        </span>
        <span className="futurastd-book-normal-white-28px">
          Mega-Spaceships embarking on the journey to find salvation—to find a new habitable
        </span>
        <span className="futurastd-book-normal-white-28px">home for the exiled scions of the Earth.</span>
      </InThe23rdCentury>
      </StoryDiv>
    </div>
  )
}

export default Story