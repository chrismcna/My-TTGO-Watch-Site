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

            <ul>
                <li>
                    Apps - <Link to="/user-guide/apps/weather">Weather</Link>, <Link to="/user-guide/apps/stop-watch">StopWatch</Link>, <Link to="/user-guide/apps/crypto-ticker">Crypto Ticker</Link>, <Link to="/user-guide/apps/alexa-smart-home-controller">Alexa Smart Home Controller</Link> (in developement) and more to come
                </li>
                <li>
                    <Link to="/user-guide/gadget-bridge">Gadgetbridge</Link> Gadgetbridge - notifications from Whatsapps, Gmail, OsmAnd, Instagram... 
                </li>
                <li>
                    <Link to="/user-guide/settings/wifi">Wifi</Link>
                </li>
                <li>
                    <Link to="/user-guide/settings/bluetooth">Bluetooth</Link> - remote <Link to="/device/bluetooth">wifi</Link> and <Link to="/device/apps/weather">weather app</Link> configuration, BLE characteristics (manufacturer name, firmware revision, power level, power state and more to come) 
                </li>
                <li>
                    <Link to="/user-guide/settings/steps">Step Counter</Link> 
                </li>
                <li>
                    <Link to="/user-guide/settings/power">Power management</Link>
                </li>
                <li>
                    <Link to="/user-guide/settings/display">Display</Link>
                </li>
                <li>
                    <Link to="/user-guide/settings/time">Time</Link>
                </li>
                <li>
                    WebServer
                </li>
            </ul>

            

            




        </>
    );
}