import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function Graph(props) {
  return (
      
    <div className='history'>
        <h1 className='page-title'>Graph</h1>
        {/* Add this part later */}
        <LineChart width={"Based on device"} height={"Based on device"} data={"List of key val pairs"}>
            <Line type='monotone' dataKey='key of the value var' stroke='#000' />
            <CartesianGrid stroke='#ccc'/>
            <XAxis/>
            <YAxis/>
            <Tooltip/>
        </LineChart>
        <button className='time-btn' onClick={}></button>
        <button className='time-btn' onClick={}></button>
        <button className='time-btn' onClick={}></button>
    </div>
    
  )
}

Graph.propTypes = {}

export default Graph
