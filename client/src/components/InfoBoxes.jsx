import React from 'react';

const Box = (props) => {
    return (
        <div>
            <p className="boxHeader">{props.headline}</p>
            <p className="boxText">{props.desc}</p>
        </div>
    )
}

export default Box;