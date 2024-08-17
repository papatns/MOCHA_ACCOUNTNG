import React from 'react'
import "./HeroSection.css"
import Header from "./Header/Header"
import TopSection from "./top-section/topsection"

const HeroSection = () => {
  return (
    <div className='Hero-Section'>
        <Header/>
        <TopSection/>
    </div>
  )
}

export default HeroSection