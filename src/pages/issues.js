import React from 'react';


export default  props => {
    return (
        <>
            <h2>Known Issues</h2>
            
            The webserver crashes the ESP32 really often <br/>
            the battery indicator is not accurate, rather a problem with the power management unit ( axp202 ) <br/>
            from time to time the esp32 crashes accidentally <br/>
            and some other small things <br/>

            <h3>Reporting Issues</h3>
            Before reporting any issue please check out the currently open issues in github to ensure it hasn't reported already <br/>
            <a href="https://github.com/sharandac/My-TTGO-Watch/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a>
            
        </>
    );
}