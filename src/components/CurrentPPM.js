import React, { useState } from "react";
import {SENSORS} from '../constants/enum'
function CurrentPPM(props){
    const [data, setData] = useState('')
    
    React.useEffect(()=>{
        var reqString = '/api/reading/'+SENSORS[props.sensor];
        console.log(reqString)
        fetch(reqString)
        .then(res=> res.json())
        .then(data => {
            setData(data)
        });
    }, [props.time]);
    return(
        <div className="display">
            <p className="value">{data}402</p>
            <p className="sensor">{props.sensor}</p>
        </div>
    );
}

export default CurrentPPM;