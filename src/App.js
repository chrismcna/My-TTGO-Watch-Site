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
import UserGuide from './pages/user-guide';
import Issues from './pages/issues';
import About from './pages/about';

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

            <Route path="/user-guide">
              <UserGuide />
            </Route>
            

            <Route path="/issues">
              <Issues />
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
