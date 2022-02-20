import React from 'react'
import { TIME_OPTIONS } from '../constants/enum';

export default function TimeOptions(props) {
  return (
    <div className='time-options'>
        <button onClick={()=>props.update(TIME_OPTIONS.MINUTE)}>{TIME_OPTIONS.MINUTE}</button>
        <button onClick={()=>props.update(TIME_OPTIONS.HOUR)}>{TIME_OPTIONS.HOUR}</button>
        <button onClick={()=>props.update(TIME_OPTIONS.DAY)}>{TIME_OPTIONS.DAY}</button>
        <button onClick={()=>props.update(TIME_OPTIONS.WEEK)}>{TIME_OPTIONS.WEEK}</button>
    </div>
  )
}
