import React from 'react'
import "./feature.css"
import TopLeftImage from "../../assets/image 4.png"
import BottomRightImage from "../../assets/image 24.png"

const feature = () => {
  return (
    <>
        <div className='feature_section'>
            <h1 className='feature_header'>FEATURES</h1>
            <div className='content-container'>
                <div className='feature-top'>
                    <div className='top-left-image'>
                        <img src={TopLeftImage} alt='TOPLEFTIMAGE'/>
                    </div>
                    <div className='top-right-content'>
                        <div>
                            <h3>Professional Looking Personalized Invoices</h3>
                            <p>Personalize your invoices to reflect your brand by adding your logo, changing colors, and fonts. Choose from a variety of templates with flexible options.</p>
                        </div>
                        <div>
                            <h3>Automated GST Compliance</h3>
                            <p>Navigate the GST compliance maze with ease. Find and assign applicable tax rates to your products using our efficient HSN/SAC code search. Save time by generating e-invoices and filing GST online all in one place!</p>
                        </div>
                        <div>
                            <h3>Enjoy Steady Cashflows with Recurring Invoices</h3>
                            <p>Do you run a subscription business or bill customers at regular intervals?
                            No problem! MOCHA offers recurring invoices that can be easily set up for any frequency you desire.</p>
                        </div>
                    </div>
                </div>
                <div className='feature-bottom'>
                    <div className='bottom-left-content'>
                    <div>
                            <h3>Manage Returns and Refunds</h3>
                            <p>Handle customer returns and refunds with credit notes. Relax, because the 	next time you generate an invoice, we will notify you of any outstanding 	credit notes! </p>
                        </div>
                        <div>
                            <h3>Get Paid on Time</h3>
                            <p>Tired of chasing payments?  Mocha offers automated reminders for invoices. We will send them automated follow-ups, so you can save valuable time.</p>
                        </div>
                    </div>
                    <div className='bottom-right-image'>
                        <img src={BottomRightImage} alt='BottomRightImage'/>
                    </div>
                </div>
                <div className='bottom_button'>
                    <button><p>Try for FREE NOW</p></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default feature