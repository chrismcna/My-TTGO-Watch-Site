import React from 'react';

import { Link } from 'react-router-dom';


export default props => {
    return (
        <>
            <h2>Gadgetbridge</h2>

            <p>
                <a href="https://gadgetbridge.org/" target="_blank" rel="noopener noreferrer">Gadgetbridge (https://gadgetbridge.org/)</a> notification from mobile and more to come later.
            </p>

            <p>
                Notifcation Support:
                <ul>
                    <li>Whatsapp</li>
                    <li>K-9 Mail</li>
                    <li>Gmail</li>
                    <li>E-Mail</li>
                    <li>OsmAnd</li>
                    <li>YouTube</li>
                    <li>Instagram</li>
                    <li>Tinder</li>
                </ul>

            </p>


            <h3>Setup</h3>

            <p>
                The setup is fairly simple<br/>
                <ol>
                    <li>Install Gadgetbridge on your Android deivce - accepting all the permissions</li>
                    <li>Open Gadgetbridge app</li>
                    <li>Click the add button</li>
                    <li>Click Start Discovery</li>
                    <li>Select your watch once found</li>
                    <li>Enter the code from the watch screen in to Gadgetbridge app</li>
                    <li>Done</li>
                </ol>
            </p>

            <h3>Issue</h3>

            <p>
                Not seeing the watch? have you made the watch discoverable? <Link to="/user-guide/setting/bluetooth">bluetooth user guide</Link>
            </p>
            <p>
                Still not seeing the watch? have you already paired? then unpair via android bluetooth settings and attempt pairing again via Gadgetbridge app
            </p>
        </>
    );
}