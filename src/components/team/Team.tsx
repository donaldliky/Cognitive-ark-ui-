import React from 'react'
import styled, {css} from 'styled-components'

const Team = () => {
  return (
    <div>
      <Body id='team'>
        <Title>TEAM</Title>
          <GloballyDistributed>
          <span className="futurastd-medium-white-28px">
            Globally distributed team. Embracing different cultures and alchemizing them all into one vision.
          </span>
          <span className="futurastd-medium-white-28px">
            We enjoy our dynamics, and we are looking to contribute to the blockchain community.
            <br />
          </span>
          <span className="futurastd-medium-white-28px">
            Most importantly, we all just happen to ‘vibe’ (yes, we are using that word)—
          </span>
          <span className="futurastd-medium-white-28px">our values resonate with each other, and our ideas align effortlessly!</span>
        </GloballyDistributed>

        <TeamPfP>
          <TeamImg src='/assets/ASSETS/Efacsen_ik.png' alt='Efacsen_ik.png' />
          <TeamImg src='/assets/ASSETS/Nowhere_ih.png' alt='Nowhere_ih.png' />
          <TeamImg src='/assets/ASSETS/Putri_ie.png' alt='Putri_ie.png' />
          <TeamImg src='/assets/ASSETS/howler_ib.png' alt='howler_ib.png' />
          <TeamImg src='/assets/ASSETS/kvlj_h.png' alt='kvlj_h.png' />
          <TeamImg src='/assets/ASSETS/Lord_h.png' alt='Lord_h.png' />
          <TeamImg src='/assets/ASSETS/mudikers_h.png' alt='mudikers_h.png' />
          {/* <OverlapGroup8>
            <Howler effect3="/assets/ASSETS/effect3.png" howler="howler.png" />
            <Putri effect3="/assets/ASSETS/effect3-1.png" putri="putri.png" />
            <Nowhere effect2="/assets/ASSETS/effect2.png" nowhere="nowhere.png" />
            <Efacsen effect1="/assets/ASSETS/effect1.png" efacsen="efacsen.png" />
          </OverlapGroup8>
          <FlexRow>
            <Kvlj effect5="/assets/ASSETS/effect5.png" kvlj="kvlj.png" />
            <OverlapGroup7>
              <Mudikers effect7="/assets/ASSETS/effect7.png" mudikers="mudikers.png" />
              <Lord effect6="/assets/ASSETS/effect6.png" lord="lord.png" />
            </OverlapGroup7>
          </FlexRow> */}
        </TeamPfP>
      </Body>
    </div>
  )
}

export default Team

const Body = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-top: 10%;
`
const Title = styled.div`
  font-family: var(--font-family-valorant-regular);
  font-weight: 400;
  color: var(--white);
  font-size: 122px;
  text-align: center;
  letter-spacing: 0;
  line-height: 119.2px;
`;

const FuturastdMediumWhite28px = css`
  color: var(--white);
  font-family: var(--font-family-futurastd-medium);
  font-size: var(--font-size-m);
  font-weight: 500;
  font-style: normal;
`;

const GloballyDistributed = styled.h1`
  ${FuturastdMediumWhite28px}
  
  text-align: center;
  letter-spacing: 1.12px;
  line-height: 40px;
  width: 90%;
  margin-left: 5%;
`;

const TeamPfP = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

const TeamImg = styled.img`
  width: 350px;
  height: 324px;
`

const OverlapGroup8 = styled.div`
  width: 1411px;
  height: 358px;
  position: relative;
`;

const FlexRow = styled.div`
  position: relative;
  margin-top: 42px;
  margin-right: 33px;
  display: flex;
  align-items: flex-end;
  min-width: 1006px;
`;

const OverlapGroup7 = styled.div`
  width: 673px;
  height: 336px;
  position: relative;
`;

const Howler = (props: any) => {
  
    const { effect3, howler } = props;

    return (
      <Howler1>
        <OverlapGroup3>
          <Effect3 src={effect3} />
          <Howler2 src={howler} />
        </OverlapGroup3>
      </Howler1>
    );
  
}

const Howler1 = styled.div`
  position: absolute;
  height: 324px;
  top: 12px;
  left: 1061px;
  display: flex;
  align-items: flex-start;
  min-width: 350px;
`;

const OverlapGroup3 = styled.div`
  width: 350px;
  height: 324px;
  position: relative;
`;

const Effect3 = styled.img`
  position: absolute;
  width: 168px;
  height: 156px;
  top: 84px;
  left: 91px;
  object-fit: cover;
`;

const Howler2 = styled.img`
  position: absolute;
  width: 350px;
  height: 324px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Putri = (props: any) => {
  
    const { effect3, putri } = props;

    return (
      <Putri1>
        <OverlapGroup4>
          <Effect3 src={effect3} />
          <Putri2 src={putri} />
        </OverlapGroup4>
      </Putri1>
    );
  
}

const Putri1 = styled.div`
  position: absolute;
  height: 324px;
  top: 12px;
  left: 719px;
  display: flex;
  align-items: flex-start;
  min-width: 350px;
`;

const OverlapGroup4 = styled.div`
  width: 350px;
  height: 324px;
  position: relative;
`;

// const Effect3 = styled.img`
//   position: absolute;
//   width: 176px;
//   height: 164px;
//   top: 80px;
//   left: 87px;
//   object-fit: cover;
// `;

const Putri2 = styled.img`
  position: absolute;
  width: 350px;
  height: 324px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Nowhere = (props: any) => {
  
    const { effect2, nowhere } = props;

    return (
      <Nowhere1>
        <OverlapGroup5>
          <Effect2 src={effect2} />
          <Nowhere2 src={nowhere} />
        </OverlapGroup5>
      </Nowhere1>
    );
  
}

const Nowhere1 = styled.div`
  position: absolute;
  height: 358px;
  top: 0;
  left: 360px;
  display: flex;
  align-items: flex-start;
  min-width: 384px;
`;

const OverlapGroup5 = styled.div`
  width: 384px;
  height: 358px;
  position: relative;
`;

const Effect2 = styled.img`
  position: absolute;
  width: 208px;
  height: 192px;
  top: 78px;
  left: 71px;
  object-fit: cover;
`;

const Nowhere2 = styled.img`
  position: absolute;
  width: 384px;
  height: 358px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Efacsen = (props: any) => {
  
    const { effect1, efacsen } = props;

    return (
      <Efacsen1>
        <OverlapGroup6>
          <Effect1 src={effect1} />
          <Efacsen2 src={efacsen} />
        </OverlapGroup6>
      </Efacsen1>
    );
  
}

const Efacsen1 = styled.div`
  position: absolute;
  height: 346px;
  top: 6px;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 372px;
`;

const OverlapGroup6 = styled.div`
  width: 372px;
  height: 346px;
  position: relative;
`;

const Effect1 = styled.img`
  position: absolute;
  width: 258px;
  height: 238px;
  top: 49px;
  left: 45px;
  object-fit: cover;
`;

const Efacsen2 = styled.img`
  position: absolute;
  width: 372px;
  height: 346px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Kvlj = (props: any) => {
  
    const { effect5, kvlj } = props;

    return (
      <Kvlj1>
        <OverlapGroup2>
          <Effect5 src={effect5} />
          <Kvlj2 src={kvlj} />
        </OverlapGroup2>
      </Kvlj1>
    );
  
}

const Kvlj1 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 333px;
`;

const OverlapGroup2 = styled.div`
  width: 333px;
  height: 324px;
  position: relative;
`;

const Effect5 = styled.img`
  position: absolute;
  width: 162px;
  height: 150px;
  top: 87px;
  left: 94px;
  object-fit: cover;
`;

const Kvlj2 = styled.img`
  position: absolute;
  width: 333px;
  height: 324px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Mudikers = (props: any) => {
  
    const { effect7, mudikers } = props;

    return (
      <Mudikers1>
        <OverlapGroup>
          <Effect7 src={effect7} />
          <Mudikers2 src={mudikers} />
        </OverlapGroup>
      </Mudikers1>
    );
  
}

const Mudikers1 = styled.div`
  position: absolute;
  height: 324px;
  top: 12px;
  left: 348px;
  display: flex;
  align-items: flex-start;
  min-width: 325px;
`;

const OverlapGroup = styled.div`
  width: 325px;
  height: 324px;
  position: relative;
`;

const Effect7 = styled.img`
  position: absolute;
  width: 174px;
  height: 162px;
  top: 81px;
  left: 88px;
  object-fit: cover;
`;

const Mudikers2 = styled.img`
  position: absolute;
  width: 325px;
  height: 324px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Lord = (props: any) => {
  
    const { effect6, lord } = props;

    return (
      <Lord1>
        <OverlapGroup1>
          <Effect6 src={effect6} />
          <Lord2 src={lord} />
        </OverlapGroup1>
      </Lord1>
    );
  
}

const Lord1 = styled.div`
  position: absolute;
  height: 324px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 350px;
`;

const OverlapGroup1 = styled.div`
  width: 350px;
  height: 324px;
  position: relative;
`;

const Effect6 = styled.img`
  position: absolute;
  width: 134px;
  height: 124px;
  top: 112px;
  left: 108px;
  object-fit: cover;
`;

const Lord2 = styled.img`
  position: absolute;
  width: 350px;
  height: 324px;
  top: 0;
  left: 0;
  object-fit: cover;
`;