import React from 'react';
import Current from '../components/Current';
import './Live.css'
function Live() {
    return (
        <div className='live'>
            <h1 className='page-title'>Live data</h1>
            <Current />
        </div>
    );
}

export default Live;