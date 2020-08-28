import React from 'react';
import Button from '@material-ui/core/Button';

import ConnctDevice from "../../components/connect-device";

import { DeviceContext } from "../../contexts/device-context";

export default props => {

    const deviceContext = React.useContext(DeviceContext);
    const { bluetoothDevice } = deviceContext;


    const handleWhatsAppTest = React.useCallback(() => {
        bluetoothDevice.gatt.connect()
            .then(server => {
                return server.getPrimaryService('6e400001-b5a3-f393-e0a9-e50e24dcca9e');
            })
            .then(service => {
                return service.getCharacteristic('6e400002-b5a3-f393-e0a9-e50e24dcca9e');
            })
            .then(characteristic => {

                const enc = new TextEncoder();
                return characteristic.writeValue(enc.encode('GB:{"t":"notify","src":"Whatsapp"} \n'))
                    .then(() => characteristic.writeValue(Uint8Array.of(0x03)));

            }).catch(error => {
                alert('Argh! ' + error);
            });

    }, [bluetoothDevice]);

    const handleBleDeviceInformationService = React.useCallback(() => {
        bluetoothDevice.gatt.connect()
            .then(server => {
                return server.getPrimaryService('device_information');
            })
            .then(service => {
                return service.getCharacteristics();
            })
            .then(characteristics => {
                let decoder = new TextDecoder('utf-8');
                let queue = Promise.resolve();
                let promises = characteristics.map(characteristic => {
                    switch (characteristic.uuid) {

                        case window.BluetoothUUID.getCharacteristic('manufacturer_name_string'):
                            queue = queue.then(_ => characteristic.readValue()).then(value => {
                                return 'Manufacturer Name String: ' + decoder.decode(value);
                            });
                            return queue;
                        case window.BluetoothUUID.getCharacteristic('firmware_revision_string'):
                            queue = queue.then(_ => characteristic.readValue()).then(value => {
                                return 'Software Revision String: ' + decoder.decode(value);
                            });
                            return queue;
                        default:
                            return Promise.resolve("Unhandled characteristic - " + characteristic.uuid);
                    }
                })

                return Promise.all(promises);
            })
            .then(results => {
                alert(results.join('. '));
            }).catch(error => {
                alert('Argh! ' + error);
            });
    }, [bluetoothDevice]);

    const handleBleBatteryService = React.useCallback(() => {
        bluetoothDevice.gatt.connect()
            .then(server => {
                return server.getPrimaryService('battery_service');
            })
            .then(service => {
                return service.getCharacteristics();
            })
            .then(characteristics => {
                let decoder = new TextDecoder('utf-8');
                let queue = Promise.resolve();
                let promises = characteristics.map(characteristic => {
                    switch (characteristic.uuid) {

                        case window.BluetoothUUID.getCharacteristic('battery_level'):
                            queue = queue.then(_ => characteristic.readValue()).then(value => {
                                const batteryLevel = value.getUint8(0);
                                return 'Battery Level is ' + batteryLevel + '%';
                            });
                            return queue;
                        case window.BluetoothUUID.getCharacteristic('battery_power_state'):
                            queue = queue.then(_ => characteristic.readValue()).then(value => {
                                const batteryPowerState = value.getUint8(0);
                                return 'Battery Power State: ' + batteryPowerState;
                            });
                            return queue;
                        default:
                            return Promise.resolve("Unhandled characteristic - " + characteristic.uuid);
                    }
                })

                return Promise.all(promises);
            })
            .then(results => {
                alert(results.join('. '));
            })


    }, [bluetoothDevice]);






    return (
        <>
            <h2>Tests</h2>

            <ConnctDevice>
                <Button type="submit" variant="contained" color="primary" onClick={handleWhatsAppTest}>Whatsapp</Button>
                <br />

                <Button type="submit" variant="contained" color="primary" onClick={handleBleDeviceInformationService}>BLE Device Information Service</Button>
                <br />

                <Button type="submit" variant="contained" color="primary" onClick={handleBleBatteryService}>BLE Battery Service</Button>
                <br />
            </ConnctDevice>
        </>
    );
}