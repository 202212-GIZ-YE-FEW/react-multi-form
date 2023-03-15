import React from 'react'
import Heading from './Heading'
import play from './assets/controller.png'
import Plan from './Plan'


function ContentTwo() {
    return (
        <div className='col-lg-9 col-md-8 col-sm-12 content-two' style={{ background: "#FFF", height: '100%' }}>
            <div className="content">
                <Heading title="Select your plan" desc="you have the option of monthly or yearly billing" />
                <div className='plan-container'>
                    <Plan price="$9" title="Arcade" play={play} />
                    <Plan price="$9" title="Advance" play={play} />
                    <Plan price="$9" title="Pro" play={play} />
                </div>
                <div className='section-two'>
                    <span>Monthly</span>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                    <span>Yearly</span>
                </div>
                <div className="last-section">
                    <button className='btn-content-back'>Go Back</button>
                    <button className='btn-content'>Next Step</button>
                </div>
            </div>
        </div>
    )
}

export default ContentTwo