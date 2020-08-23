import React from 'react';


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