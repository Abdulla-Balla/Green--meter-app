import CurrentPPM from './CurrentPPM'
import React from 'react'

function Current(props){
    return (
        <div className='view'>
            <CurrentPPM time={props.time} sensor='1'/>
            <CurrentPPM time={props.time} sensor='2'/>
            <CurrentPPM time={props.time} sensor='3'/>
        </div>
    )
}

export default Current;