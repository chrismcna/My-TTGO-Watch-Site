import React from 'react';

import { Backdrop, makeStyles, Button } from '@material-ui/core';

import BluetoothIcon from '@material-ui/icons/Bluetooth';

import { Context } from "../contexts/device-context";


const useStyles = makeStyles((theme) => ({
    main: {
        position: "relative"
      },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
      position: "absolute"
    },
  }));

export default  props => {
    const classes = useStyles();
    const deviceContext = React.useContext(Context);
    const { bluetoothDevice, connect } = deviceContext;

    return (
        <>
            <div  className={classes.main}>
                <Backdrop className={classes.backdrop} open={bluetoothDevice == null} >
                    <Button type="button" variant="contained" color="primary" startIcon={<BluetoothIcon/>} onClick={connect}>Connect</Button>
                </Backdrop>
                {
                    props.children
                }

            </div>
        </>
    );
}