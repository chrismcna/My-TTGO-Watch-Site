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
import About from './pages/about';

//device components
import { Provider } from './contexts/device-context';
import Weather from './pages/device/weather';
import Tests from './pages/device/tests';

import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <Provider>
      <Router>
        <ResponsiveDrawer drawerContent={<NavMenu />}>
          <Switch>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/device/weather">
              <Weather />
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
