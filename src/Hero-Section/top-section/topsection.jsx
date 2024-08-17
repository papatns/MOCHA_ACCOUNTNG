import React from 'react'
import "./topsection.css"
import ContentImage from "../../assets/Untitled design 1.png";

const topsection = () => {
  return (
    <>
        <div className='top-section'>
            <div className='content'>
                <div className='content1'>Effortless GST Compliant Invoicing </div>
                <div className='content2'>Mocha Accounting software accurately assigns applicable taxes, generates professional, customized invoices, and generates automated reminders to save you valuable time.</div>
                <div>
                    <button className='content-buttom'>Try for FREE NOW</button>
                </div>
            </div>
            <div className='content-image'>
                <img src={ContentImage} alt='ContentImahe'/>
            </div>
        </div>
    </>
  )
}

export default topsection