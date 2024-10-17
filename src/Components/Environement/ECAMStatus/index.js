import "./index.css"

import React, { useState, useEffect, useContext} from "react";

import { Context } from "../../../App";

function ECAMStatus(){
    const [statusContent, setstatusContent] = useState(<></>)
    const {

        YellowHydraulicValues,
        BlueHydraulicValues,
        GreenHydraulicValues,
        
        
        BluePump,
        YellowPump,
        GreenPump,

        ACPower

        } = useContext(Context);
    
    useEffect(()=>{

        if (ACPower === true){
            setstatusContent(<p>hello</p>)


        }
        else{
            setstatusContent(<p></p>)
        }
    },[ACPower])
        
    return(
        <div className="ECAMStatus">
            {statusContent}
        </div>
    )
}

export default ECAMStatus;