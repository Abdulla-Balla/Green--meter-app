import React, { useState } from 'react';
import Graph from '../components/Graph';
import './History.css'
import TimeOptions from '../components/TimeOptions';
import { TIME_OPTIONS, SENSORS } from '../constants/enum'
function History() {
    
    const [timeInt, setTimeInt] = useState(TIME_OPTIONS.WEEK)
    const [sensorNum, setSensorNum] = useState(SENSORS['Sensor 1'])
    console.log(sensorNum)
    const updateData = time =>{
        setTimeInt(time)
    };

    function handleSensorSelect(event){
        setSensorNum(event.target.value);
    };
    return (
        <div className='history'>
            <h1 className='page-title'>History</h1>
            <Graph timeInt={timeInt} sensor={sensorNum}/>
            <TimeOptions update={updateData}/>
            <select className='dropdown' value={sensorNum} onChange={handleSensorSelect}>
                <option>Sensor 1</option>
                <option>Sensor 2</option>
                <option>Sensor 3</option>
            </select>
        </div>
    );
}

export default History;