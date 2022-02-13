import React from 'react';
import WarningPopup from '../components/WarningPopup';
import './Settings.css'
function Settings() {
    const [popupTrigger, setPopupTrigger] = React.useState(false);

    return (
        <div className='settings'>
            <h1 className='page-title'>Settings</h1>
            <div className='btn-options'>
                <button id='clear-btn'onClick={()=> setPopupTrigger(true)}>Clear data</button>
            </div>
            <WarningPopup trigger={popupTrigger} setTrigger={setPopupTrigger}>
                <h3 className='warning-text'>Are you sure you want to delete all data?</h3>
            </WarningPopup>
        </div>
    );
}

export default Settings;