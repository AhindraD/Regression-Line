import React from 'react'

function RenderCircles(props) {
    let renderCircles = props.data.map((coords, i) => (
        <circle
            cx={props.scale.x(coords[0])}
            cy={props.scale.y(coords[1])}
            r="7"
            style={{ fill: "rgba(5, 118, 158, .8)" }}
            key={i}
        />
    ))
    return (
        <g>{renderCircles}</g>
    )
}

export default RenderCircles