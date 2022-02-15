import React from 'react'
import { useWindowDimensions } from 'react-native'
import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { TIME_OPTIONS } from '../constants/time';
import './Graph.css'
function Graph(props) {
  const { height, width } = useWindowDimensions();
    const [data, setData] = React.useState(null);

    React.useEffect(()=>{// Updating data based props.timeInt (time interval)
        var offset = 60*1000; // 1 Minute
        switch(props.timeInt){
            case TIME_OPTIONS.MINUTE:
                offset*=5;
                break;
            case TIME_OPTIONS.HOUR:
                offset*=60;
                break;
            case TIME_OPTIONS.DAY:
                offset*=24*60;
                break;
            case TIME_OPTIONS.WEEK:
                offset*=7*24*60;
                break
            default:
                console.log('Unexpected time interval')
        }
        var currentTime = new Date();
        var offsetTime = new Date(currentTime-offset);
        var reqString = '/api/reading/1/'+offsetTime.toISOString()+'/'+currentTime.toISOString();
        
        fetch(reqString)
        .then(res=> res.json())
        .then(data => {
            setData(data)
        });
    },[props.timeInt]);
    
    // return [{'val':300, 'time':'Dec 1'}, {'val': 340,'time':"Dec 2"}, {'val': 339,'time':"Dec 3"},{'val': 324, 'time':"Dec 4"},{'val': 354,'time':"Dec 5"},{'val': 389, 'time':"Dec 6"},{'val': 403, 'time':"Dec 7"}]
  return (
    <div className='history-container'>
        {/* Add this part later */}
        <LineChart width={ width<600 ? width : width*0.7} height={height*0.5} data={data} margin={{top: 0, right: 40, bottom: 0, left: 0}}>
            <Line type='monotone' dataKey='value' stroke='#40d39d' />
            <CartesianGrid stroke='#ccc'/>
            <XAxis dataKey={'time'}/>
            <YAxis/>
            <Tooltip/>
        </LineChart>
    </div>
    
  )
}

Graph.propTypes = {}

export default Graph
