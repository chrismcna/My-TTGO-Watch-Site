import React from 'react';


export default  props => {
    return (
        <>
            <h2>Development</h2>
            My-TTGO-Watch is an open source personal project, so all development is done in personal time. <br/>

            <h3>Developers</h3>
            if your a developer and would like to get involved, start forking the My-TTGO-Watch firmware repo<br/>

            Internal RAM is very limited, use PSRAM as much as possible. When you work with ArduinoJson, include this<br/>

            #include "hardware/json_psram_allocator.h"<br/>

            and create your json with<br/>

            SpiRamJsonDocument doc( 1000 );<br/>

            to move your json into PSRAM, here is enough RAM for all the crazy stuff you will do. And use<br/>

            ps_malloc(), ps_calloc() and ps_realloc()<br/>

            as often as possible. And one very important thing: Do not talk directly to the hardware!<br/>

        </>
    );
}