import React from 'react';
import Button from '@material-ui/core/Button';

import ConenctDevice from "../../components/connect-device";

import { Context } from "../../contexts/device-context";

export default props => {

    const deviceContext = React.useContext(Context);
    const { bluetoothDevice } = deviceContext;





    return (
        <>
            <h2>Connect</h2>

            <h3>Requirements</h3>
            <p>
                Chrome - Window or Android (other OSes havnt been tested)
            </p>
            <p>
                Bluetooth - bluetooth is used to connect to the device
            </p>

            <h3>Step 1</h3>
            <p>
                Pair with the watch over bluetooth.
            </p>
            <p>
                windows: <a href="https://support.microsoft.com/en-gb/help/15290/windows-connect-bluetooth-device" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/en-gb/help/15290/windows-connect-bluetooth-device</a>
            </p>

            <p>
                android: <a href="https://support.google.com/android/answer/9075925?hl=en-GB" target="_blank" rel="noopener noreferrer">https://support.google.com/android/answer/9075925?hl=en-GB</a> <br/>
            </p>


            <h3>Step 2</h3>
            <p>
                Then press Connect in My TTGO Watch and select the watch
            </p>
            <img src="/device/connect/chrome-bluetooth-connect.png"/>


            <h3>Step 3</h3>
            <p>
                There is no step three, your browser is now connected
            </p>

            <h3>Issues</h3>

            Android - Gadgetbridge caues problems connecting to the watch, go into Gadgetbridge and close the app from the menu. Then attempt connecting again
        </>
    );
}