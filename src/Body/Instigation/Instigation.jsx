import React from 'react'
import "./Instigation.css"
import AWSLOGO from "../../assets/AWS.png"
import FINANCIALLOGO from "../../assets/Financial.png"

const Instigation = () => {
  return (
    <>
        <div className='instigation_container'>
            <div className='header'>Our Trusted Partners</div>
            <div className='logo_container'>
                <img src={AWSLOGO} alt='AWS'/>
                <img src={FINANCIALLOGO} alt='financial'/>
            </div>
        </div>
    </>
  )
}

export default Instigation