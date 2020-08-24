import React from 'react';

import CryptoTicker from './apps/crypto-ticker';


export default  props => {
    return (
        <>
            <h2>Status Bar</h2>

            <img src="/user-guide/status-bar/status-bar.png" />


            <p>
                There is a status bar that can be dragged down and gives quick access to turning wifi on or off.
                If will is connected then you ip will be shown
            </p>
           
        </>
    );
}