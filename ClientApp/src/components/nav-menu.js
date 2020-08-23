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



				<SubMenu icon={<HelpIcon />} label={"User Guide"}>
					<List component="div" disablePadding>
						<ListItem button component={Link} to="/user-guide" className={classes.nested}>
							<ListItemIcon><InfoIcon /></ListItemIcon>
							<ListItemText primary={"Home"} />
						</ListItem>

						<ListItem button component={Link} to="/user-guide/navigation" className={classes.nested}>
							<ListItemIcon><InfoIcon /></ListItemIcon>
							<ListItemText primary={"Navigation"} />
						</ListItem>

						

						<SubMenu icon={<HelpIcon />} label={"Settings"} className={classes.nested}>
							<List component="div" disablePadding>
								<ListItem button component={Link} to="/user-guide/settings/battery" className={classes.nested}>
									<ListItemIcon><WbSunnyIcon /></ListItemIcon>
									<ListItemText primary={"Battery"} />
								</ListItem>
								<ListItem button component={Link} to="/user-guide/settings/display" className={classes.nested}>
									<ListItemIcon><InfoIcon /></ListItemIcon>
									<ListItemText primary={"Display"} />
								</ListItem>
								<ListItem button component={Link} to="/user-guide/settings/movement" className={classes.nested}>
									<ListItemIcon><DirectionsWalkIcon /></ListItemIcon>
									<ListItemText primary={"Movement"} />
								</ListItem>
								<ListItem button component={Link} to="/user-guide/settings/wifi" className={classes.nested}>
									<ListItemIcon><WifiIcon /></ListItemIcon>
									<ListItemText primary={"Wifi"} />
								</ListItem>
								<ListItem button component={Link} to="/user-guide/settings/bluetooth" className={classes.nested}>
									<ListItemIcon><BluetoothIcon /></ListItemIcon>
									<ListItemText primary={"Bluetooth"} />
								</ListItem>
								<ListItem button component={Link} to="/user-guide/settings/time" className={classes.nested}>
									<ListItemIcon><BluetoothIcon /></ListItemIcon>
									<ListItemText primary={"Time"} />
								</ListItem>
								<ListItem button component={Link} to="/user-guide/settings/update" className={classes.nested}>
									<ListItemIcon><InfoIcon /></ListItemIcon>
									<ListItemText primary={"Update"} />
								</ListItem>
							</List>
						</SubMenu>

						<SubMenu icon={<InfoIcon />} label={"Apps"} className={classes.nested}>
							<List component="div" disablePadding>
								<ListItem button component={Link} to="/user-guide/apps/weather" className={classes.nested}>
									<ListItemIcon><WbSunnyIcon /></ListItemIcon>
									<ListItemText primary={"Weather"} />
								</ListItem>
								<ListItem button component={Link} to="/user-guide/apps/stop-watch" className={classes.nested}>
									<ListItemIcon><InfoIcon /></ListItemIcon>
									<ListItemText primary={"Stop Watch"} />
								</ListItem>
								<ListItem button component={Link} to="/user-guide/apps/crypto-ticker" className={classes.nested}>
									<ListItemIcon><InfoIcon /></ListItemIcon>
									<ListItemText primary={"Crypto Ticker"} />
								</ListItem>
							</List>
						</SubMenu>

						<ListItem button component={Link} to="/user-guide/gadget-bridge" className={classes.nested}>
							<ListItemIcon><InfoIcon /></ListItemIcon>
							<ListItemText primary={"Gadget Bridge"} />
						</ListItem>
					</List>
				</SubMenu>



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


				<SubMenu icon={<GitHubIcon />} label={"GitHub"}>
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
				</SubMenu>



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


const SubMenu = props => {

	const [subMenuOpen, setSubMenuOpen] = React.useState(false);

	var onSubMenuOpenClick = React.useCallback(() => {
		setSubMenuOpen(!subMenuOpen);
	}, [subMenuOpen, setSubMenuOpen]);


	return <>
		<ListItem button onClick={onSubMenuOpenClick} className={ props.className}>
			<ListItemIcon>
				{props.icon}
			</ListItemIcon>
			<ListItemText primary={props.label} />
			{subMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
		</ListItem>
		<Collapse in={subMenuOpen} timeout="auto" unmountOnExit className={props.className}>
			{props.children}
		</Collapse>
	</>
}