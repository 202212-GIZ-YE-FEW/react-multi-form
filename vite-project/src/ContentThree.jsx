import React from 'react';
import Heading from './Heading';
import "./styles.css"


function ContentThree() {
  return (
    <div className='col-lg-9 col-md-8 col-sm-12 p-content-three' style={{ background: "#FFF", height: '100%' }}>
      <div className="content">
        <Heading title="Pick add-ons" desc="Add-ons help enhance your gaming experience." />

        <div className="content-three">
          <div className="option-box">
          <label>
              <input type="checkbox" />
              
            </label>
            <div>
              <h3>Online service</h3>
              <p className='p' >Access to multiplayer games <h4>+$1/mo</h4>  </p> 
            </div>
          
          </div>

          <div className="option-box">
          <label>
              <input type="checkbox" />
              
            </label>
            <div>
              <h3>Larger storage</h3>
              <p className='p'>Extra ITB of cloud save <h4>+$2/mo</h4> </p>
              
            </div>
          
          </div>

          <div className="option-box">
          <label>
              <input type="checkbox" />
             
            </label>
            <div>
              <h3>Customizable Profile</h3>
              <p className='p'>Custom theme on your profile <h4>+$2/mo</h4> </p>
              
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentThree;
