import React from 'react'
import "./Demo.css"
import Objects from "../../assets/OBJECTS.png"


const Demo = () => {
  return (
    <>
        <div className='demo_container'>
            <div className='demo_left_image'>
                <img src={Objects} alt='objects'/>
            </div>
            <div className='demo_right_content'>
                <h3>Schedule a Demo</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit 
                id venenatis pretium risus euismod dictum egestas orci netus 
                feugiat ut egestas ut sagittis tincidunt phasellus elit etiam 
                cursus orci in. Id sed montes. 
                </p>
                <div className='button_container'>
                    <button className='button1'>Schedule a Demo </button>
                    <button className='button2'>Ask a Question</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Demo