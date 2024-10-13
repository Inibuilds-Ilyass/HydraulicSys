import React, { useState, useEffect, useContext} from "react";

import { Context } from "../../../App";


import BTN from "../BTN";

function BlueElectricPump(){

    
    const [ACPower, setACPower] = useContext(Context);
    const [BlueElecPump, setBlueElecPump] = useContext(Context);
    
    const handleBlueElecPumpToggle = () => {
        setBlueElecPump(prevState => !prevState);
        // alert(BlueElecPump)
    };


    return (
        <div>
            <BTN
                name="BLUE ELEC PUMP"
                onClick={handleBlueElecPumpToggle} 
                isACPowerOn={BlueElecPump}   
            />
        </div>
    );
}

export default BlueElectricPump