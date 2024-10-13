import ExtPwr from "./ExtPwr"
import BlueElectricPump from "./BlueElecPump";
import "./index.css"

import { useState, useEffect } from 'react';

function Action(props){


    return(
        <div className="Action">
            <div className="Electricity">
                <ExtPwr
                />
            </div>
            
            <div className="Pumps">
                <BlueElectricPump
                />
            </div>
        </div>
    )
}

export default Action