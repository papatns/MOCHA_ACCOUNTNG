import React from 'react'
import "./Benefits.css"
import BenefitCard from './BenefitCard'

const Benefits = () => {
  return (
    <>
        <div className='benefit_container'>
            <div className='benefit_header'>
                <h3>Why MOCHA ?</h3>
            </div>
            <div className='benefits_card'>
                <BenefitCard/>
            </div>


        </div>
    </>
  )
}

export default Benefits