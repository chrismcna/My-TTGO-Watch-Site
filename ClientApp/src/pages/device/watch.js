import React from 'react';

import ConnctDevice from "../../components/connect-device";

import { BatteryContext } from "../../contexts/device-context";




const BATTERY_POWER_STATE_BATTERY_UNKNOWN = 0x0;
const BATTERY_POWER_STATE_BATTERY_NOT_SUPPORTED = 0x1;
const BATTERY_POWER_STATE_BATTERY_NOT_PRESENT = 0x2;
const BATTERY_POWER_STATE_BATTERY_PRESENT = 0x3;

const BATTERY_POWER_STATE_DISCHARGE_UNKNOWN = 0x0;
const BATTERY_POWER_STATE_DISCHARGE_NOT_SUPPORTED = 0x4;
const BATTERY_POWER_STATE_DISCHARGE_NOT_DISCHARING = 0x8;
const BATTERY_POWER_STATE_DISCHARGE_DISCHARING = 0xc;

const BATTERY_POWER_STATE_CHARGE_UNKNOWN = 0x0;
const BATTERY_POWER_STATE_CHARGE_NOT_CHARGEABLE = 0x10;
const BATTERY_POWER_STATE_CHARGE_NOT_CHARING = 0x20;
const BATTERY_POWER_STATE_CHARGE_CHARING = 0x30;

const BATTERY_POWER_STATE_LEVEL_UNKNOWN = 0x0;
const BATTERY_POWER_STATE_LEVEL_NOT_SUPPORTED = 0x40;
const BATTERY_POWER_STATE_LEVEL_GOOD = 0x80;
const BATTERY_POWER_STATE_LEVEL_CRITICALLY_LOW = 0xC0;





export default  props => {
    const { batteryLevel, batteryPowerState} = React.useContext(BatteryContext);




    
    return (
        <>
            <h2>Watch</h2>
            

            <ConnctDevice>
                <p>
                    battery Level: {batteryLevel}
                </p>
                <p>
                    battery Power State: {batteryPowerState}
                    <ul>
                        <li>
                            Battery Flag: {batteryPowerStateToBattery(batteryPowerState)}
                        </li>

                        <li>
                            Discharge Flag: {batteryPowerStateToDischarge(batteryPowerState)}
                        </li>

                        <li>
                            Charge Flag: {batteryPowerStateToCharge(batteryPowerState)}
                        </li>

                        <li>
                            Level Flag: {batteryPowerStateToLevel(batteryPowerState)}
                        </li>
                    </ul>
                </p>
               
            </ConnctDevice>
        </>
    );
};



const batteryPowerStateToBattery = batteryPowerState =>{
    if (batteryPowerState & BATTERY_POWER_STATE_BATTERY_UNKNOWN) return "Unknown";
    else if (batteryPowerState & BATTERY_POWER_STATE_BATTERY_NOT_SUPPORTED) return "Not Suported";
    else if (batteryPowerState & BATTERY_POWER_STATE_BATTERY_NOT_PRESENT) return "Not Present";
    else if (batteryPowerState & BATTERY_POWER_STATE_BATTERY_PRESENT) return "Present";
};

const batteryPowerStateToDischarge = batteryPowerState =>{
    if (batteryPowerState & BATTERY_POWER_STATE_DISCHARGE_UNKNOWN) return "Unknown";
    else if (batteryPowerState & BATTERY_POWER_STATE_DISCHARGE_NOT_SUPPORTED) return "Not Suported";
    else if (batteryPowerState & BATTERY_POWER_STATE_DISCHARGE_NOT_DISCHARING) return "Not Discharging";
    else if (batteryPowerState & BATTERY_POWER_STATE_DISCHARGE_DISCHARING) return "Discharging";
};

const batteryPowerStateToCharge = batteryPowerState =>{
    if (batteryPowerState & BATTERY_POWER_STATE_CHARGE_UNKNOWN) return "Unknown";
    else if (batteryPowerState & BATTERY_POWER_STATE_CHARGE_NOT_CHARGEABLE) return "Not Chargeable";
    else if (batteryPowerState & BATTERY_POWER_STATE_CHARGE_NOT_CHARING) return "Not Charging";
    else if (batteryPowerState & BATTERY_POWER_STATE_CHARGE_CHARING) return "Charging";
};

const batteryPowerStateToLevel = batteryPowerState =>{
    if (batteryPowerState & BATTERY_POWER_STATE_LEVEL_UNKNOWN) return "Unknown";
    else if (batteryPowerState & BATTERY_POWER_STATE_LEVEL_NOT_SUPPORTED) return "Not Suported";
    else if (batteryPowerState & BATTERY_POWER_STATE_LEVEL_GOOD) return "Good";
    else if (batteryPowerState & BATTERY_POWER_STATE_LEVEL_CRITICALLY_LOW) return "Critically Low";
};