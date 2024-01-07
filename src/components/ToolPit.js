import React, { useState } from 'react'

const ToolPit = ({ position }) => {

    const [flag, setFlag] = useState(false);
    //when hovered on the button setting the value of flag to true
    function handleMouseIn() {
        setFlag(true);
    }
    //when hovered off the button setting the value of flag to flase
    function handleMouseOut() {
        setFlag(false);

    }
    //based on the flag value setting the display of the tiop to visible not visible
    const visibility = { display: flag ? "block" : "none" }
    return (
        <div>
            <button className='tooltipContainer' onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                Hover over me
                {/* this is the tip message */}

            </button>
            <div className={`${position}`} id="tooltipText" style={visibility}>
                i am {position} tip
            </div>
        </div>
    )
}

export default ToolPit
