import React from "react";
import PropTypes from "prop-types";

import { withRouter } from 'react-router-dom'

export const Context = React.createContext({});

export const Provider = withRouter(props => {
  // Initial values are obtained from the props
  const {
    bluetoothDevice: initialBluetoothDevice,
    children
  } = props;


  const [bluetoothDevice, setBluetoothDevice] = React.useState(initialBluetoothDevice);


  const connect = React.useCallback(() => {

    navigator.bluetooth.requestDevice({ filters: [{ services: ['device_information', 'battery_service', '6e400001-b5a3-f393-e0a9-e50e24dcca9e'] }] })
      .then(device => {
        device.addEventListener('gattserverdisconnected', () => setBluetoothDevice(null));
        setBluetoothDevice(device);
      })
      .catch(error => {
        if (window.confirm("Do you need some help?")) {
          props.history.push('/device/connect')
        }
      });

  }, [setBluetoothDevice]);

  const disconnect = React.useCallback(() => {
    setBluetoothDevice(null);
  }, [setBluetoothDevice]);


  // Make the context object:
  const context = {
    bluetoothDevice,
    connect,
    disconnect
  };

  // pass the value in provider and return
  return <Context.Provider value={context}>{children}</Context.Provider>;
});

export const { Consumer } = Context;

Provider.propTypes = {
  bluetoothDevice: PropTypes.object
};

Provider.defaultProps = {
  bluetoothDevice: null
};