import CurrentPPM from './CurrentPPM'
import React from 'react'

function Current(props){
    return (
        <div className='view'>
            <CurrentPPM time={props.time}>

            </CurrentPPM>
            <CurrentPPM time={props.time}/>
            <CurrentPPM time={props.time}/>
        </div>
    )
}

export default Current;