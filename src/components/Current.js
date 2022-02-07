import CurrentPPM from './CurrentPPM'
import Sidebar from './Sidebar'
import React from 'react'

function Current(){
    const [data, setData] = React.useState('some data');
    

    return (
        <div className="view">
            <Sidebar/>
            <CurrentPPM pass = {data}/>
            <CurrentPPM pass = {data}/>
        </div>
    )
}

export default Current;