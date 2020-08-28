import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import ConnctDevice from "../../../components/connect-device";

import { DeviceContext } from "../../../contexts/device-context";

export default props => {

    const deviceContext = React.useContext(DeviceContext);
    const { bluetoothDevice } = deviceContext;


    const [apiKey, setApiKey] = React.useState("");
    const onApiKeyChange = React.useCallback(e => setApiKey(e.target.value), [setApiKey]);

    const [lat, setLat] = React.useState("");
    const onLatChange = React.useCallback(e => setLat(e.target.value), [setLat]);

    const [long, setLong] = React.useState("");
    const onLongChange = React.useCallback(e => setLong(e.target.value), [setLong]);

    const onGetCurrentLocation = React.useCallback(() =>{
        navigator.geolocation.getCurrentPosition(position =>{
            setLat(position.coords.latitude.toFixed(7));
            setLong(position.coords.longitude.toFixed(7));
        });
    },[setLat, setLong]);


    const form = React.createRef()
    const onSubmit = React.useCallback(() => {

        bluetoothDevice.gatt.connect()
        .then(server => {
            return server.getPrimaryService('6e400001-b5a3-f393-e0a9-e50e24dcca9e');
        })
        .then(service => {
            return service.getCharacteristic('6e400002-b5a3-f393-e0a9-e50e24dcca9e');
        })
        .then(characteristic  => {


            const enc = new TextEncoder();
            return characteristic.writeValue(enc.encode(JSON.stringify({
                t:"conf",
                app: "weather",
                apikey:apiKey,
                lat:lat,
                lon:long
            }) +'\n'))
            .then(() => characteristic.writeValue(Uint8Array.of(0x03)));


        }).catch(error => {
            alert('Argh! ' + error);
        });

    }, [apiKey, lat, long, bluetoothDevice]);

    return (
        <>
            <h2>Weather</h2>

            the weather app you need an openweather.com api-id. <a href="http://openweathermap.org/appid"  target="_blank" rel="noopener noreferrer">http://openweathermap.org/appid</a> is a good starting point.
            <br/>

            <h2>Device Configuration</h2>

            <ConnctDevice>
                <ValidatorForm
                    ref={form}
                    onSubmit={onSubmit}
                    onError={errors => console.log(errors)}
                >
                    <TextValidator
                        maxlength={32}
                        label="Api Key(APPID)"
                        onChange={onApiKeyChange}
                        name="apiKey"
                        value={apiKey}
                        validators={['required', 'matchRegexp:^[0-9a-f]{32}$']}
                        errorMessages={['this field is required', 'invalid Api Key']}
                    />

                    <Button type="button" variant="contained" color="primary" onClick={onGetCurrentLocation}>Use Current Location</Button>
                    <TextValidator
                        label="Lat"
                        onChange={onLatChange}
                        name="lat"
                        value={lat}
                        validators={['required', 'matchRegexp:^(-)?[0-9]+(\\.[0-9]+)?$']}
                        errorMessages={['this field is required', 'invalid Latitude']}
                    />
                    <TextValidator
                        label="Long"
                        onChange={onLongChange}
                        name="long"
                        value={long}
                        validators={['required', 'matchRegexp:^(-)?[0-9]+(\\.[0-9]+)?$']}
                        errorMessages={['this field is required', 'invalid Longitude']}
                    />
                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                </ValidatorForm>
            </ConnctDevice>
            
           
        </>
    );
}