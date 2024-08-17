import React from 'react'
import "./Body.css"
import Feature from "./Feature/feature"
import Testimonial from './Testimonial/Testimonial'
import Benefits from "./Benefits/Benefits"
import Instigation from './Instigation/Instigation'
import FAQs from './FAQs/FAQs'
import Demo from "./Demo/Demo"
import Footer from "./Footer/Footer"

const Body = () => {
  return (
    <div className='body'>
        <Feature/>
        <Testimonial/>
        <Benefits/>
        <Instigation/>
        <FAQs/>
        <Demo/>
        <Footer/>
    </div>
  )
}

export default Body