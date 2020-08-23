import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import HomeIcon from '@material-ui/icons/Home';
import GetAppIcon from '@material-ui/icons/GetApp';
import HelpIcon from '@material-ui/icons/Help';
import BugReportIcon from '@material-ui/icons/BugReport';
import CodeIcon from '@material-ui/icons/Code';
import InfoIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import BluetoothDisabledIcon from '@material-ui/icons/BluetoothDisabled';
import WatchIcon from '@material-ui/icons/Watch';
import WifiIcon from '@material-ui/icons/Wifi';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';


import { Link } from "react-router-dom";

import { Context } from "../contexts/device-context";


const useStyles = makeStyles((theme) => ({
    nested: {
      paddingLeft: theme.spacing(4),
    },
}));

export default props => {
    const classes = useStyles();

    const deviceContext = React.useContext(Context);
    const { bluetoothDevice, setBluetoothDevice } = deviceContext;

    const [gitHubSubMenuOpen, setGitHubSubMenuOpen] = React.useState(false);

    var onGitHubSubMenuClick = React.useCallback(() => {
        setGitHubSubMenuOpen(!gitHubSubMenuOpen);
    }, [gitHubSubMenuOpen, setGitHubSubMenuOpen]);



    const [userGuidSubMenuOpen, setUserGuidSubMenuOpen] = React.useState(false);

    var onUserGuidSubMenuClick = React.useCallback(() => {
        setUserGuidSubMenuOpen(!userGuidSubMenuOpen);
    }, [userGuidSubMenuOpen, setUserGuidSubMenuOpen]);


    var onBluetoothConnectClick = React.useCallback(() => {
        navigator.bluetooth.requestDevice({ filters: [{ services: ['device_information', 'battery_service', '6e400001-b5a3-f393-e0a9-e50e24dcca9e'] }] })
            .then(device => {
                device.addEventListener('gattserverdisconnected', () => setBluetoothDevice(null));
                setBluetoothDevice(device);
            })
            .catch(error => {
            });
    }, [setBluetoothDevice]);

    var onBluetoothDisconnectClick = React.useCallback(() => {
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
                <ListItem button component={Link} to="/installation">
                    <ListItemIcon><GetAppIcon /></ListItemIcon>
                    <ListItemText primary={"Installation"} />
                </ListItem>
                


                <ListItem button onClick={onUserGuidSubMenuClick}>
                    <ListItemIcon>
                        <HelpIcon />
                    </ListItemIcon>
                    <ListItemText primary="User Guide" />
                    {userGuidSubMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
                <Collapse in={userGuidSubMenuOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={Link} to="/user-guide" className={classes.nested}>
                            <ListItemIcon><InfoIcon /></ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem>
                        <ListItem button component={Link} to="/user-guide/apps/crypto-ticker" className={classes.nested}>
                            <ListItemIcon><InfoIcon /></ListItemIcon>
                            <ListItemText primary={"App - Crypto Ticker"} />
                        </ListItem>
                    </List>
                </Collapse>


                <ListItem button component={Link} to="/issues">
                    <ListItemIcon><BugReportIcon /></ListItemIcon>
                    <ListItemText primary={"Issues"} />
                </ListItem>
                <ListItem button component={Link} to="/development">
                    <ListItemIcon><CodeIcon /></ListItemIcon>
                    <ListItemText primary={"Development"} />
                </ListItem>
                <ListItem button component={Link} to="/about">
                    <ListItemIcon><InfoIcon /></ListItemIcon>
                    <ListItemText primary={"About"} />
                </ListItem>

                <ListItem button onClick={onGitHubSubMenuClick}>
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText primary="GitHub" />
                    {gitHubSubMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
                <Collapse in={gitHubSubMenuOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component="a" href="https://github.com/sharandac/My-TTGO-Watch" className={classes.nested} >
                            <ListItemIcon><GitHubIcon /></ListItemIcon>
                            <ListItemText primary={"Watch"} />
                        </ListItem>
                        <ListItem button component="a" href="https://github.com/chrismcna/My-TTGO-Watch-Site" className={classes.nested}>
                            <ListItemIcon><GitHubIcon /></ListItemIcon>
                            <ListItemText primary={"Site"} />
                        </ListItem>
                    </List>
                </Collapse>

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
                <ListItem button component={Link} to="/device/steps" disabled={bluetoothDevice == null}>
                    <ListItemIcon><DirectionsWalkIcon /></ListItemIcon>
                    <ListItemText primary={"Steps"} />
                </ListItem>
                <ListItem button component={Link} to="/device/tests" disabled={bluetoothDevice == null}>
                    <ListItemIcon><HourglassFullIcon /></ListItemIcon>
                    <ListItemText primary={"Tests"} />
                </ListItem>
            </List>
        </>
    )
}