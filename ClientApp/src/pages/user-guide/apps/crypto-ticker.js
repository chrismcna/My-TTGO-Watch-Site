import React from 'react';


export default  props => {
    return (
        <>
            <h2>App Crypto Ticker</h2>

            <p>
                Binance api are used to retrieve crypto data.
            </p>


            <h3>Settings</h3>

            <p>
                Symbol: a valid binance symbol, e.g. BNBBTC, BTCUSDT, NEOUSDT ....
            </p>
            <p>
                AutoSync: automatically get widget data when wifi connnects
            </p>
        </>
    );
}