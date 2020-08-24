import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";


import ResponsiveDrawer from './components/responsive-drawer'
import NavMenu from './components/nav-menu'

//Main pages
import Home from './pages/home';
import Installation from './pages/installation';
import Issues from './pages/issues';
import Development from './pages/development';
import About from './pages/about';


//User Guide Pages
import UserGuide_Navigation from './pages/user-guide/navigation';
import UserGuide_StatusBar from './pages/user-guide/status-bar';

import UserGuide_Setting_Battery from './pages/user-guide/settings/battery'
import UserGuide_Setting_Display from './pages/user-guide/settings/display';
import UserGuide_Setting_Movement from './pages/user-guide/settings/movement';
import UserGuide_Setting_Wifi from './pages/user-guide/settings/wifi';
import UserGuide_Setting_Bluetooth from './pages/user-guide/settings/bluetooth';
import UserGuide_Setting_Time from './pages/user-guide/settings/time';
import UserGuide_Setting_Update from './pages/user-guide/settings/update';

import UserGuide_Apps_Weather from './pages/user-guide/apps/weather';
import UserGuide_Apps_StopWatch from './pages/user-guide/apps/stop-watch';
import UserGuide_Apps_CryptoTicker from './pages/user-guide/apps/crypto-ticker';

import UserGuide_GadgetBridge from './pages/user-guide/gadget-bridge';
//User Guide Pages - end

//device components
import { Provider } from './contexts/device-context';
import Steps from './pages/device/steps';
import Wifi from './pages/device/wifi';
import Weather from './pages/device/weather';
import Watch from './pages/device/watch';
import Tests from './pages/device/tests';

import logo from './logo.svg';
import './App.css';



function App() {
	return (
		<Provider>
			<Router>
				<ResponsiveDrawer drawerContent={<NavMenu />}>
					<Switch>

						<Route path="/installation">
							<Installation />
						</Route>

						<Route path="/user-guide/navigation">
							<UserGuide_Navigation />
						</Route>

						<Route path="/user-guide/status-bar">
							<UserGuide_StatusBar />
						</Route>
						

						<Route path="/user-guide/settings/battery">
							<UserGuide_Setting_Battery />
						</Route>
						<Route path="/user-guide/settings/display">
							<UserGuide_Setting_Display />
						</Route>
						<Route path="/user-guide/settings/movement">
							<UserGuide_Setting_Movement />
						</Route>
						<Route path="/user-guide/settings/wifi">
							<UserGuide_Setting_Wifi />
						</Route>
						<Route path="/user-guide/settings/bluetooth">
							<UserGuide_Setting_Bluetooth />
						</Route>
						<Route path="/user-guide/settings/time">
							<UserGuide_Setting_Time />
						</Route>
						<Route path="/user-guide/settings/update">
							<UserGuide_Setting_Update />
						</Route>


						<Route path="/user-guide/apps/weather">
							<UserGuide_Apps_Weather />
						</Route>
						<Route path="/user-guide/apps/stop-watch">
							<UserGuide_Apps_StopWatch />
						</Route>
						<Route path="/user-guide/apps/crypto-ticker">
							<UserGuide_Apps_CryptoTicker />
						</Route>

						<Route path="/user-guide/gadget-bridge">
							<UserGuide_GadgetBridge />
						</Route>

						


						<Route path="/issues">
							<Issues />
						</Route>

						<Route path="/development">
							<Development />
						</Route>


						<Route path="/about">
							<About />
						</Route>
						

						<Route path="/device/watch">
							<Watch />
						</Route>
						<Route path="/device/wifi">
							<Wifi />
						</Route>
						<Route path="/device/weather">
							<Weather />
						</Route>
						<Route path="/device/steps">
							<Steps />
						</Route>
						<Route path="/device/tests">
							<Tests />
						</Route>


						<Route path="/">
							<Home />
						</Route>
					</Switch>

				</ResponsiveDrawer>
			</Router>
		</Provider>
	);
}

export default App;
