import React from 'react'
import styled, { css } from "styled-components";
import '../../mystyle.css'

const HomeBody = styled.div`
    width: 100%;
`

const HomeTop = styled.div`
`
const HomeBottom = styled.div`
    width: 100%;
    
    margin-top: 350px;
    background-color: black;
`

const Text1 = styled.p`
    font-size: 122px;
    color: white;
    text-align: center;
    font-family: var(--font-family-valorant-regular);
    margin-top: 400px;
    margin-bottom: 0px;
    @media (max-width: 992px) {
        font-size: 80px;
    }
`
const Text2 = styled.p`
    font-size: 28px;
    color: white;
    text-align: center;
    font-family: var(--font-family-futurastd-medium);
`
const Text3 = styled.p`
    font-size: 28px;
    color: white;
    text-align: center;
    font-family: var(--font-family-futurastd-heavy);
    width: 90%;
    margin: 0 auto;
    span {
        color: var(--eucalyptus);
    }
`
const ImgDiv = styled.div`
    background-image: url(/assets/ASSETS/TOP_BG_copy.png);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 200px;
    width: 80%;
    margin-left: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
`
const Text4 = styled.p`
    font-size: 41px;
    color: white;
    text-align: center;
    margin-bottom: 0px;
    margin-top: 0px;
`
const Text5 = styled.p`
    font-size: 41px;
    text-align: center;
    color: var(--heliotrope);
    font-family: var(--font-family-valorant-regular);
    margin-bottom: 0px;
    margin-top: 0px;
`
const Text6 = styled.p`
    font-size: 28px;
    color: white;
    text-align: center;
    font-family: var(--font-family-futurastd-heavy);
    width: 70%;
    margin: 50px auto;
    margin-bottom: 0px;
`
const Home = () => {
  return (
    <div>
        <HomeBody>
            <HomeTop>
                <Text1>THE COGNITIVE ARK</Text1>
                <Text2>Interdimensional interactive comic NFT</Text2>
                <Text3><span>Experience NFT as the multi-dimensional storyline of the future</span></Text3>
            </HomeTop>
            <HomeBottom>
                {/* <div style={{width: '70%'}}> */}
                {/* <Img src='/assets/ASSETS/TOP_BG_copy.png' alt='top-bg-copy'></Img> */}
                <ImgDiv>
                    <Text4>EXPLORE THE UNKNOWN</Text4>
                    <Text5>TERRAFORM THE NFT-COMMUNITY</Text5>
                </ImgDiv>
                {/* </div> */}
                <Text6>We are exploring new frontiers of creative ideas and implementing infinite possibilities to reshape
the NFT art landscape. We are making our mark on the NFT Space, breaking all boundaries and
building a new world beyond borders along with the collective.</Text6>
            </HomeBottom>
        </HomeBody>
    </div>
  )
}

export default Home