import React from 'react';
import Heading from './Heading';

function ContentFour() {
  return (
    <div className='col-lg-9 col-md-8 col-sm-12 content-four-box' style={{ background: "#FFF", height: '100%' }}>
      <div className="content">
        <Heading title="Finishing up" desc="Double-check everything looks oK before confirming." />

        <div className="pricing">
          <div className="item">
            <div className="name">Arcade (Monthly)</div>
            <div className="price">$9/mo</div>
          </div>
          <div className="item">
            <div className="name">Online service</div>
            <div className="quantity">1 Imo</div>
          </div>
          <div className="item">
            <div className="name">Larger storage</div>
            <div className="price">+$2/mo</div>
          </div>
          <div className="item total">
            <div className="name">Total (per month)</div>
            <div className="price">+$12/mo</div>
          </div>
        </div>

        <div className="confirm-button">
          <button>Confirm</button>
        </div>

      </div>
    </div>
  );
}

export default ContentFour;
