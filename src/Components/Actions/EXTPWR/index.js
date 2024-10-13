import React, { useState, useEffect, useContext} from "react";
import BTN from "../BTN";

import { Context } from "../../../App";

function ExtPwr(props) {

    const [ACPower, setACPower] = useContext(Context);

    
    const handleACPowerToggle = () => {
        setACPower(prevState => !prevState);
    };

    return (
        <div>
            <BTN
                name="EXT PWR"
                onClick={handleACPowerToggle} 
                isACPowerOn={ACPower}   
            />
        </div>
    );
}

export default ExtPwr;
