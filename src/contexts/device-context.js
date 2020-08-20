import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const {
    bluetoothDevice: initialBluetoothDevice,
    children
  } = props;


  const [bluetoothDevice, setBluetoothDevice] = useState(initialBluetoothDevice);


  // Make the context object:
  const context = {
    bluetoothDevice,
    setBluetoothDevice
  };

  // pass the value in provider and return
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.propTypes = {
    bluetoothDevice: PropTypes.object
};

Provider.defaultProps = {
    bluetoothDevice: null
};