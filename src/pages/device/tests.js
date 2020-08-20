import React from 'react';
import Button from '@material-ui/core/Button';

import { Context } from "../../contexts/device-context";

export default props => {

    const deviceContext = React.useContext(Context);
    const { bluetoothDevice } = deviceContext;

   
    const handleWhatsAppTest = React.useCallback(() => {

        bluetoothDevice.gatt.connect()
        .then(server => {
            return server.getPrimaryService('6e400001-b5a3-f393-e0a9-e50e24dcca9e');
        })
        .then(service => {
            return service.getCharacteristic('6e400002-b5a3-f393-e0a9-e50e24dcca9e');
        })
        .then(characteristic  => {

            const enc = new TextEncoder();
            return characteristic.writeValue(enc.encode('GB:{"t":"notify","src":"Whatsapp"} \n'))
            .then(() => characteristic.writeValue(Uint8Array.of(0x03)));

        }).catch(error => {
            alert('Argh! ' + error);
        });

    }, [bluetoothDevice]);

    return (
        <>
            <h2>Tests</h2>

            <Button type="submit" variant="contained" color="primary" onClick={handleWhatsAppTest}>Whatsapp</Button>
           
        </>
    );
}