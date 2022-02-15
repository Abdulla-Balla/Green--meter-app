import React from 'react';
import Current from '../components/Current';
import './Live.css'
function Live() {
    // React.useEffect(()=>{
    //     // Get request to api providing data
    //     fetch('/api/reading/1')
    //       .then(response =>
    //         (response.json())
    //       )
    //       .then(data => setApi(data))
    //       .catch((err) => {console.error(err)})
    //     },[]);
    return (
        <div className='live'>
            <h1 className='page-title'>Live data</h1>
            {/* <Current /> */}
        </div>
    );
}

export default Live;