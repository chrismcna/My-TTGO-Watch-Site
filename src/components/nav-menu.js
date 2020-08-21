import React from 'react';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import BluetoothDisabledIcon from '@material-ui/icons/BluetoothDisabled';
import WatchIcon from '@material-ui/icons/Watch';
import WifiIcon from '@material-ui/icons/Wifi';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';


import { Link } from "react-router-dom";

import { Context } from "../contexts/device-context";


export default  props => {

    const deviceContext = React.useContext(Context);
    const { bluetoothDevice, setBluetoothDevice } = deviceContext;

    var onBluetoothConnectClick = React.useCallback(() =>{
        navigator.bluetooth.requestDevice({filters: [{services: ['6e400001-b5a3-f393-e0a9-e50e24dcca9e']}]})
        .then(device => {
            device.addEventListener('gattserverdisconnected', () => setBluetoothDevice(null));
            setBluetoothDevice(device);
        })
        .catch(error => {
        });
    }, [setBluetoothDevice]);

    var onBluetoothDisconnectClick = React.useCallback(() =>{
        setBluetoothDevice(null);
    }, [setBluetoothDevice]);


    return (
        <>
            <Divider />
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary={"Home"} />
                </ListItem>
                <ListItem button component={Link} to="/about">
                    <ListItemIcon><InfoIcon /></ListItemIcon>
                    <ListItemText primary={"About"} />
                </ListItem>
                <ListItem button component="a" href="https://github.com/sharandac/My-TTGO-Watch">
                    <ListItemIcon><GitHubIcon /></ListItemIcon>
                    <ListItemText primary={"GitHub - Watch"} />
                </ListItem>
                <ListItem button component="a" href="https://github.com/chrismcna/My-TTGO-Watch-Site">
                    <ListItemIcon><GitHubIcon /></ListItemIcon>
                    <ListItemText primary={"GitHub - Site"} />
                </ListItem>
            </List>
            <Divider />
    
            <List>
                {
                    bluetoothDevice == null ?
                    (
                        <ListItem button onClick={onBluetoothConnectClick}>
                            <ListItemIcon><BluetoothIcon /></ListItemIcon>
                            <ListItemText primary={"Connect"} />
                        </ListItem>
                    )
                    :
                    (
                        <ListItem button onClick={onBluetoothDisconnectClick}>
                            <ListItemIcon><BluetoothDisabledIcon /></ListItemIcon>
                            <ListItemText primary={"Disconnect"} />
                        </ListItem>
                    )
                }

                <ListItem button component={Link} to="/device/watch" disabled={bluetoothDevice == null}>
                    <ListItemIcon><WatchIcon /></ListItemIcon>
                    <ListItemText primary={"Watch"} />
                </ListItem>
                <ListItem button component={Link} to="/device/wifi" disabled={bluetoothDevice == null}>
                    <ListItemIcon><WifiIcon /></ListItemIcon>
                    <ListItemText primary={"Wifi"} />
                </ListItem>
                <ListItem button component={Link} to="/device/weather" disabled={bluetoothDevice == null}>
                    <ListItemIcon><WbSunnyIcon /></ListItemIcon>
                    <ListItemText primary={"Weather"} />
                </ListItem>
                <ListItem button component={Link} to="/device/tests" disabled={bluetoothDevice == null}>
                    <ListItemIcon><HourglassFullIcon /></ListItemIcon>
                    <ListItemText primary={"Tests"} />
                </ListItem>
            </List>
        </>
    )
}