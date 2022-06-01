import React from 'react'
import Header from '../components/header/Header'
import Home from '../components/home/Home'
import Ark from '../components/ark/Ark'
import Cognition from '../components/cognition/Cognition'
import Story from '../components/story/Story'
import Roadmap from '../components/roadmap/Roadmap'
import Team from '../components/team/Team'
import Faq from '../components/faq/Faq'
import Join from '../components/join/Join'

const Main = () => {
  return (
    <div>
      <Header />
      <Home />
      <Ark />
      <Cognition />
      <Story />
      <Roadmap />
      <Team />
      <Faq />
      <Join />
    </div>
  )
}

export default Main