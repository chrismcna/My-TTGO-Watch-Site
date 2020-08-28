import React from 'react';

import { Link } from "react-router-dom";

export default  props => {
    return (
        <>
            <h2>Home</h2>

            <img src="/home/home.png" />

            <p>
                Welcome to My-TTGO-Watch a smartwatch firmware based on ESP32 from LlyGo. Currently under development!!!
            </p>
            


            <h3>Features</h3>

            Wifi  <br/>

            Bluetooth - Gadgetbridge (Notification from mobile), remote wifi and weather app configuration, BLE characteristics (manufacturer name, firmware revision, power level, power state and more to come)  <br/>

            Step Counter <br/>

            Power management <br/>

            Display <br/>

            Time <br/>

            Apps - <Link to="/user-guide/apps/weather">Weather</Link>, <Link to="/user-guide/apps/stop-watch">StopWatch</Link>, <Link to="/user-guide/apps/crypto-ticker">Crypto Ticker</Link>, <Link to="/user-guide/apps/alexa-smart-home-controller">Alexa Smart Home Controller</Link> (in developement) and more to come <br/>

            WebServer <br/>



        </>
    );
}