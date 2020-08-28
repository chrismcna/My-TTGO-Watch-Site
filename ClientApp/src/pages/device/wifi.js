import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import ConenctDevice from "../../components/connect-device";

import { Context } from "../../contexts/device-context";

export default props => {

    const deviceContext = React.useContext(Context);
    const { bluetoothDevice } = deviceContext;

    const [ssid, setSsid] = React.useState("");
    const onSsidChange = React.useCallback(e => setSsid(e.target.value), [setSsid]);

    const [key, setKey] = React.useState("");
    const onkeyChange = React.useCallback(e => setKey(e.target.value), [setKey]);

    const form = React.createRef()
    const onSubmit = React.useCallback(() => {

        bluetoothDevice.gatt.connect()
            .then(server => {
                return server.getPrimaryService('6e400001-b5a3-f393-e0a9-e50e24dcca9e');
            })
            .then(service => {
                return service.getCharacteristic('6e400002-b5a3-f393-e0a9-e50e24dcca9e');
            })
            .then(characteristic => {


                const enc = new TextEncoder();
                return characteristic.writeValue(enc.encode(JSON.stringify({
                    t: "conf",
                    app: "settings",
                    settings: "wlan",
                    ssid: ssid,
                    key: key
                }) + '\n'))
                    .then(() => characteristic.writeValue(Uint8Array.of(0x03)));


            }).catch(error => {
                alert('Argh! ' + error);
            });

    }, [ssid, key, bluetoothDevice]);

    return (
        <>
            <h2>Wifi</h2>
            <p>
                Wifi can be remotely configured used bluetooth serial
            </p>

            <h2>Device Configuration</h2>

            <ConenctDevice>
                <ValidatorForm
                    ref={form}
                    onSubmit={onSubmit}
                    onError={errors => console.log(errors)}
                >
                    <TextValidator
                        label="SSID"
                        onChange={onSsidChange}
                        name="ssid"
                        value={ssid}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <TextValidator
                        label="Key"
                        onChange={onkeyChange}
                        name="key"
                        value={key}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />

                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                </ValidatorForm>
            </ConenctDevice>


        </>
    );
}