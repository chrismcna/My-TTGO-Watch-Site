import React from 'react';
import { Link } from 'react-router-dom';


export default  props => {
    return (
        <>
            <h2>Wifi Settings</h2>

            <p>
                finding it a pain to enter the wifi key in on the device? How about you try using the <Link to="/device/wifi">wifi remote configuration</Link>
            </p>

            <img src="/user-guide/settings/wifi/wifi.png" />
            
            <p>

            </p>

            <img src="/user-guide/settings/wifi/wifi2.png" />


            <p>

            </p>

            //TODO: couldnt take screen shot of wifi setting settings
           
        </>
    );
}