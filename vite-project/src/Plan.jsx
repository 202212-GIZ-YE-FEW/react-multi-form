import React from 'react'

function Plan({title , price,play}) {
    return (
        <div className='plan'>
            <img src={play} alt="Logo" />
            <div>
                <h3>{title}</h3>
                <p>{price}/mo</p>
            </div>
        </div>
    )
}

export default Plan