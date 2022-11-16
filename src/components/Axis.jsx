import React, { useRef } from 'react'

function Axis(props) {
    const refAxis = useRef(props.axis);
    return (
        <g
            className="main axis date"
            transform={props.transform}
            ref={refAxis}
        />
    )
}

export default Axis