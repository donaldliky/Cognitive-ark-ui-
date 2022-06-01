import React from "react";
import './hamburger.scss'
import styled, { css } from "styled-components";

const MenuBody = styled.div`
  width: 100%;
  background-color: #00000073;
  position: fixed;
  top: 0px;
  z-index: 100;
`
const MenuMaxContainer = styled.div`
  max-width: 1920px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
`
const MenuItem = styled.div`
  color: white;
  font-family: var(--font-family-valorant-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`

const Header = () => {
  
    return (
      <MenuBody>
        <MenuMaxContainer>
          <MenuItem><a href="#">home</a></MenuItem>
          <MenuItem>
            <a href="#ark">the ark</a>
          </MenuItem>
          <MenuItem>
            <a href="#cognition">the cognition</a>
          </MenuItem>
          <MenuItem>
            <a href="#story">story and lore</a>
          </MenuItem>
          <MenuItem>
            <a href="#roadmap">roadmap</a>
          </MenuItem>
          <MenuItem>
            <a href="#team">team</a>
          </MenuItem>
        <section className="top-nav">
          {/* <div>
            Logo Here
          </div> */}
          <input id="menu-toggle" type="checkbox" />
          <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
          </label>
          <ul className="menu">
            <li><a href="#">home</a></li>
            <li><a href="#ark">the ark</a></li>
            <li><a href="#cognition">the cognition</a></li>
            <li><a href="#story">story and lore</a></li>
            <li><a href="#roadmap">roadmap</a></li>
            <li><a href="#team">team</a></li>
          </ul>
        </section>
        </MenuMaxContainer>
      </MenuBody>
    );
}

export default Header;