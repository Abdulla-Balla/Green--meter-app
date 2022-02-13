import React from 'react'
function WarningPopup(props) {
    function clearData(){
        
    }
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            { props.children }
            <div className='options'>
                <button id='accept-btn' onClick={clearData}>Accept</button>
                <button id='close-btn' onClick={()=>props.setTrigger(false)}>Close</button>
            </div>
        </div>
    </div>
  ) : "";
}

export default WarningPopup