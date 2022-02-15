import React, { useState } from 'react';
import Graph from '../components/Graph';
import './History.css'
import TimeOptions from '../components/TimeOptions';
import { TIME_OPTIONS } from '../constants/time'
function History() {
    // 
    const [timeInt, setTimeInt] = useState(TIME_OPTIONS.WEEK)

    const updateData = (time) =>{
        setTimeInt(time)
        console.log(time)
    }
    return (
        <div className='history'>
            <h1 className='page-title'>History</h1>
            <Graph timeInt={timeInt}/>
            <TimeOptions update={updateData}/>
        </div>
    );
}

export default History;