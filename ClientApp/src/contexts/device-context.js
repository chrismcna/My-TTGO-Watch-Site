import React from "react";
import PropTypes from "prop-types";

import { withRouter } from 'react-router-dom'

export const DeviceContext = React.createContext({});
export const BatteryContext = React.createContext({});

export const Provider = withRouter(props => {
  // Initial values are obtained from the props
  const {
    bluetoothDevice: initialBluetoothDevice,
    children
  } = props;


  const [bluetoothDevice, setBluetoothDevice] = React.useState(initialBluetoothDevice);
  const [gatt, setGatt] = React.useState(null);
  const [batteryLevel, setBatteryLevel] = React.useState(null);
  const [batteryPowerState, setBatteryPowerState] = React.useState(null);

  const connect = React.useCallback(() => {
    navigator.bluetooth.requestDevice({ filters: [{ services: ['device_information', 'battery_service', '6e400001-b5a3-f393-e0a9-e50e24dcca9e'] }] })
      .then(device => {
        device.addEventListener('gattserverdisconnected', () => setBluetoothDevice(null));
        setBluetoothDevice(device);

        return device.gatt.connect();
      })
      .then(gatt => {
        setGatt(gatt);
      })
      .catch(error => {
        if (window.confirm("Do you need some help?")) {
          props.history.push('/device/connect')
        }
      });

  }, [setBluetoothDevice, setGatt]);



  React.useEffect(() => {
    if (gatt != null) {
      gatt.getPrimaryService('battery_service').then(service => {
        return service.getCharacteristics();
      })
      .then(characteristics => {
        let queue = Promise.resolve();
        let promises = characteristics.map(characteristic => {
          switch (characteristic.uuid) {

            case window.BluetoothUUID.getCharacteristic('battery_level'):
              characteristic.startNotifications().then(value => {

                queue = queue.then(() =>characteristic.readValue().then(value => {
                  const batteryLevel = value.getUint8(0);
                  setBatteryLevel(batteryLevel);
                }));
                characteristic.addEventListener('characteristicvaluechanged',event =>{
                  if (event.target.uuid != window.BluetoothUUID.getCharacteristic('battery_level')) return;
                  const batteryLevel = event.target.value.getUint8(0);
                  setBatteryLevel(batteryLevel);
                });
               
              });  

            case window.BluetoothUUID.getCharacteristic('battery_power_state'):
              characteristic.startNotifications().then(value => {

                queue = queue.then(() =>characteristic.readValue().then(value => {
                  const batteryLevel = value.getUint8(0);
                  setBatteryPowerState(batteryLevel);
                }));
                characteristic.addEventListener('characteristicvaluechanged',event =>{
                  if (event.target.uuid != window.BluetoothUUID.getCharacteristic('battery_power_state')) return;
                  const batteryPowerState = event.target.value.getUint8(0);
                  setBatteryPowerState(batteryPowerState);
                  debugger;
                });
            
              });
              return queue;
            default:
              return Promise.resolve("Unhandled characteristic - " + characteristic.uuid);
          }
        })

        return Promise.all(promises);
      })
    }


    return () => {
    };
  }, [gatt]);



  const disconnect = React.useCallback(() => {
    setBluetoothDevice(null);
    setGatt(null);
  }, [setBluetoothDevice, setGatt]);



  

  const deviceContext = React.useMemo(
    () => ({
      bluetoothDevice,
      connected: gatt != null ? true : false,
      connect,
      disconnect,
    }),
    [bluetoothDevice, gatt, connect, disconnect]
  );


  const batteryContext = React.useMemo(
    () => ({
      batteryLevel,
      batteryPowerState
    }),
    [batteryLevel, batteryPowerState]
  );

  // pass the value in provider and return
  return (
    <>
      <DeviceContext.Provider value={deviceContext}>
        <BatteryContext.Provider value={batteryContext}>
        {children}
        </BatteryContext.Provider>
      </DeviceContext.Provider>

    
    </>
  
  );
});

export const DeviceConsumer = DeviceContext.Consumer;
export const BatteryConsumer = BatteryContext.Consumer;



Provider.propTypes = {
  bluetoothDevice: PropTypes.object
};

Provider.defaultProps = {
  bluetoothDevice: null
};