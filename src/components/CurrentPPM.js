import React, { useState } from "react";
import {SENSORS} from '../constants/enum'
function CurrentPPM(props){
    const [data, setData] = useState('')
    function ColorSetting(value){
        if (value<500 && value>=0){
            return 'rgb(123, 196, 153)';
        }
        else if (value<1500) {
            return 'rgb(216, 147, 56)';
        }
        else{
            return 'rgb(199, 64, 64)';
        }
    }
    React.useEffect(()=>{
        var reqString = '/api/reading/'+props.sensor;
        console.log(reqString)
        fetch(reqString)
        .then(res=> res.json())
        .then(data => {
            setData(data)
        });
    }, [props.time]);
    return(
        <div className="display"  style={{borderTop: '10px solid '+ColorSetting(data.value)}}>
            <p className="value" >{data.value}</p>
        </div>
    );
}

export default CurrentPPM;