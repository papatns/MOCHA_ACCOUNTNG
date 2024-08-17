import React from 'react'
import "./Footer.css"
import FooterLogo from "../../assets/footer_logo.png"
import FacebookLogo from "../../assets/Facebook.png"
import TwitterLogo from "../../assets/Twitter.png"
import InstagramLogo from "../../assets/Instagram.png"
import LinkedInLogo from "../../assets/LinkedIn.png"
import YouTubeLogo from "../../assets/YouTube.png"

const Footer = () => {
  return (
    <>
        <div className='footer_container'>
            <div className='footer_top_content'>
            <div className='footer_left_content'>
                <div className='logo-container'>
                    <img src={FooterLogo} alt='footer-logo'/>
                </div>
                <p>A dedicated team committed to providing our clients peace of mind with innovative business solutions on a highly secure platform.</p>
                <div className='left_footer_container'>
                    <img src={FacebookLogo} alt='FacebookLogo' className='logo'/>
                    <img src={TwitterLogo} alt='TwitterLogo' className='logo'/>
                    <img src={InstagramLogo} alt='InstagramLogo' className='logo'/>
                    <img src={LinkedInLogo} alt='LinkedInLogo' className='logo'/>
                    <img src={YouTubeLogo} alt='YouTubeLogo' className='logo'/>
                </div>
            </div>
            <div className='footer_right_content'>
                <div className='right_header1'>
                    <div className='subheader'>Product</div>
                    
                        <div className='list'><a href=''>Features</a></div>
                        <div className='list'><a href=''>Pricing</a></div>
                        <div className='list'><a href=''>Resources</a></div>
                    
                </div>
                <div className='right_header2'>
                    <div className='subheader'>Company</div>
                        <div className='list'><a href='#'>About</a></div>
                        <div className='list'><a href='#'>Vision</a></div>
                        <div className='list'><a href='#'>Our Values</a></div>
                        <div className='list'><a href='#'>Contact us</a></div>
                        <div className='list'><a href='#'>Careers</a></div>
                </div>
                <div className='right_header3'>
                    <div className='subheader'>Company</div>
                    
                        <div className='list'><a href='#'>Getting Started</a></div>
                        <div className='list'><a href='#'>Help Center</a></div>
                        <div className='list'><a href='#'>Request Support</a></div>
                    
                </div>
            </div>
            </div>
            
            <div className='footer_down'>
                <div className='footer_down_design'>
                    <div>Copyright © 2024 Mocha |</div>
                    <div> All Rights Reserved |</div>
                    <div className='terms'> Terms and Conditions |</div>
                    <div className='policy'> Privacy Policy</div>
                </div>
        </div>
        </div>
        
    </>
  )
}

export default Footer