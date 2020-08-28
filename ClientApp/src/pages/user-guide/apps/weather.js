import React from 'react';
import { Link } from 'react-router-dom';


export default  props => {
    return (
        <>
            <h2>Weather App</h2>

            <p>
                openweather.com api are used to retrieve weather data. An api key(APPID) is required <a href="http://openweathermap.org/appid" target="_blank" >http://openweathermap.org/appid</a>
            </p>


            <h3>Settings</h3>

            <p>
                appid: a valid api key(APPID) from <a href="http://openweathermap.org/appid" target="_blank" >http://openweathermap.org/appid</a>
                <br/>

                finding it a pain to enter the weather api key in on the device? How about you try using the <Link to="/device/apps/weather">weather app remote configuration</Link>
            </p>

            
            <p>
                lat: 
            </p>
            <p>
                lon:
            </p>

            <p>
                Sync if wifi connected:
            </p>

            <p>
                Display wind:
            </p>
            <p>
                Use Imperial:
            </p>
        </>
    );
}