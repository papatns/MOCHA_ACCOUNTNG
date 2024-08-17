import React from 'react'
import "./Testimonial.css"
import Card from "./Card"

const Testimonial = () => {
  return (
    <>
        <div className='main_container'>
            <div className='testimonial-header'>
                <h2>What Our Clients Have To Say</h2>
            </div>
            <div className='testimonial-card'>
                <Card/>
            </div>
        </div>
    </>
  )
}

export default Testimonial