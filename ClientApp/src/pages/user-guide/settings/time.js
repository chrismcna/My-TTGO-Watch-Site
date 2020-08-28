import React from 'react';

import { Link } from 'react-router-dom';

export default  props => {
    return (
        <>
            <h2>Time Settings</h2>

            //TODO: couldnt take screen shot


            <h3>Issues</h3>

            <p>
                Changing the timezone will only take affect the next time the clock is synced via ntp
                <ol>
                    <li>
                        Enable "sync when connect" in time settings
                    </li>
                    <li>
                        turn on wifi - if the wifi is already on then turn if off and back on, you could use the <Link to="/user-guide/status-bar">status bar</Link> for quick access
                    </li>
                    <li>
                        wait a few seconds and if wifi was sucessful the time should now match the selected timezone
                    </li>
                </ol>
            </p>
           
        </>
    );
}