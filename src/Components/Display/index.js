
import HydraulicSYS from "../HydraulicSYS";
import "./index.css";

import React, { useState, useEffect, useContext} from "react";

import { Context } from "../../App";

function ECAMDisplay() {
    const [ACPower, setACPower] = useContext(Context);
    const [BlueElecPump, setBlueElecPump] = useContext(Context);

    let displayContent;
    

    if (ACPower) {
        
        displayContent = (
            <> 
            <div className="DisplayHeader">
                <h1>HYD</h1>
            </div>

            <div className="DisplayBody">
                <HydraulicSYS   
                    HydraulicSYSName={"Green"}
                    FluidQte={1.45}
                    FluidminQTE={0.25}
                    Indication={3000}
                    ShutOff={false}
                />

                <HydraulicSYS
                    HydraulicSYSName={"Blue"}
                    FluidQte={1.45}
                    FluidminQTE={0.45}
                    Indication={3000}
                    ShutOff={false}
                />

                <HydraulicSYS
                    HydraulicSYSName={"Yellow"}
                    FluidQte={1.45}
                    FluidminQTE={0.25}
                    Indication={3000}
                    ShutOff={false}
                />
            </div>

            <div className="DisplayFooter">
                <h1>Other</h1>
            </div>
                
            </>
        );
    } else {
        // If isGPUon is false, set the message
        displayContent = <p>US GPU is Off</p>;
    }

    return (
        <div className="Display">
            {displayContent}
           
        </div>
    );
}

export default ECAMDisplay;
