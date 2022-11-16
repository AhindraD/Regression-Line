import React from 'react';
import { scaleLinear, max, axisLeft, axisBottom, select } from "d3"
import RenderCircles from './RenderCircles';
import TrendLine from './TrendLine';
import Axis from './Axis';

function Graph() {
    const margin = { top: 20, right: 15, bottom: 60, left: 60 }
    const width = 800 - margin.left - margin.right
    const height = 600 - margin.top - margin.bottom
    const data = [[0, 3], [5, 13], [10, 22], [15, 36], [20, 48], [25, 59], [30, 77], [35, 85], [40, 95], [45, 105], [50, 120], [55, 150], [60, 147], [65, 168], [70, 176], [75, 188], [80, 199], [85, 213], [90, 222], [95, 236], [100, 249]]

    const x = scaleLinear()
        .domain([
            0,
            max(data, function (d) {
                return d[0]
            })
        ])
        .range([0, width])

    const y = scaleLinear()
        .domain([
            0,
            max(data, function (d) {
                return d[1]
            })
        ])
        .range([height, 0])

    return (
        <div>
            <h3> Scatter Plot with Trend Line </h3>
            <svg
                width={width + margin.right + margin.left}
                height={height + margin.top + margin.bottom}
                className="chart"
            >
                <g
                    transform={"translate(" + margin.left + "," + margin.top + ")"}
                    width={width}
                    height={height}
                    className="main"
                >
                    <RenderCircles data={data} scale={{ x, y }} />
                    <TrendLine data={data} scale={{ x, y }} />
                    <Axis
                        axis="x"
                        transform={"translate(0," + height + ")"}
                        scale={axisBottom().scale(x)}
                    />
                    <Axis
                        axis="y"
                        transform="translate(0,0)"
                        scale={axisLeft().scale(y)}
                    />
                </g>
            </svg>
        </div>
    )
}

export default Graph