import ExtPwr from "./ExtPwr"
import BluePumpComponent from "./BluePump";
import YellowPumpComponent from "./YellowPump";
import GreenPumpComponent from "./GreenPump";
import ElectricPump from "./ElectricPump";


import "./index.css"

// import { useState, useEffect } from 'react';

function Action(props){


    return(
        <div className="Action">
            <div className="Electricity">
                <ExtPwr
                />
            </div>
            
            <div className="Pumps">
                <GreenPumpComponent/>
                <BluePumpComponent/>
                <YellowPumpComponent/>
                <ElectricPump/>
            </div>
        </div>
    )
}

export default Action