import React from 'react'
import "./Card.css"
import CardImage from "../../assets/Card_Image1.png"
import CardImage2 from "../../assets/Card_Image2.png"
import CardImage3 from "../../assets/Card_Image3.png"

const Card = () => {
   const carddescription1 ="Mocha Accounting Software is easy to learn and simple to use and has more functionalities than other software in the market. I switched from QuickBooks for my business, and I don't see myself using another accounting software again."
   const carddescription2 ="Mocha is intuitive and user-friendly, making tasks like invoicing, expense tracking, and financial reporting much simpler. It not only saves time by reducing human error but also improves reliability of Financial Reporting."
   const carddescription3 ="Mocha Accounting is modular, easy-to-use accounting software. It offers everything its competitors offer, but beyond that, Mocha’s USP is the customization they can offer to match your industry and business’s custom requirements."
  
   return (
    <>
      <div className='Card-Container'>
        <div className='cards'>
          <img src={CardImage} alt='CardImage1'/>
          <p>{carddescription1.length>120?carddescription1.substring(0, 130) + '...' : carddescription1}</p>
          <div>ANISHA HINDOCHA</div>
          <span>Lawyer and Business Owner</span>
        </div>
        <div className='cards'>
          <img src={CardImage2} alt='CardImage1'/>
          <p>{carddescription2.length>120?carddescription2.substring(0, 130) + '...' : carddescription2}</p>
          <div>NIRMITI NIMKAR</div>
          <span>Accountant</span>
        </div>
        <div className='cards'>
          <img src={CardImage3} alt='CardImage1'/>
          <p>{carddescription3.length>120?carddescription3.substring(0, 130) + '...' : carddescription3}</p>
          <div>BHUMISH SHETH</div>
          <span>Entrepreneur</span>
        </div>
      </div>
    </>
  )
}

export default Card