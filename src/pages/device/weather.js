import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { Context } from "../../contexts/device-context";

export default props => {

    const deviceContext = React.useContext(Context);
    const { bluetoothDevice } = deviceContext;


    const [apiKey, setApiKey] = React.useState("");
    const onApiKeyChange = React.useCallback(e => setApiKey(e.target.value), [setApiKey]);

    const [lat, setLat] = React.useState("");
    const onLatChange = React.useCallback(e => setLat(e.target.value), [setLat]);

    const [long, setLong] = React.useState("");
    const onLongChange = React.useCallback(e => setLong(e.target.value), [setLong]);

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

            // Writing 1 is the signal to reset energy expended.
            //var enc = new TextEncoder(); // always utf-8
            //let resetEnergyExpended = enc.encode("GB: {}\n");
            const enc = new TextEncoder('ascii');

            return characteristic.writeValue(enc.encode("G"))
            .then(() => characteristic.writeValue(enc.encode("B")))
            .then(() => characteristic.writeValue(enc.encode(":")))
            .then(() => characteristic.writeValue(enc.encode("{")))
            .then(() => characteristic.writeValue(enc.encode("}")))
            .then(() => characteristic.writeValue(enc.encode("\n")));
        }).catch(error => {
            alert('Argh! ' + error);
        });

    }, [apiKey, lat, long, bluetoothDevice]);

    return (
        <>
            <h2>Weather</h2>

            <ValidatorForm
                ref={form}
                onSubmit={onSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    label="Api Key"
                    onChange={onApiKeyChange}
                    name="apiKey"
                    value={apiKey}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <TextValidator
                    label="Lat"
                    onChange={onLatChange}
                    name="lat"
                    value={lat}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <TextValidator
                    label="Long"
                    onChange={onLongChange}
                    name="long"
                    value={long}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </ValidatorForm>

            
            <script src="https://github.com/inexorabletash/text-encoding/encoding-indexes.js"></script>
            <script src="https://github.com/inexorabletash/text-encoding/encoding.js"></script>

            <script>
                window.TextEncoder = window.TextDecoder = null;
            </script>
        </>
    );
}