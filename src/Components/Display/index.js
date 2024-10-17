import HydraulicSYS from "./HydraulicSYS";
import YellowElecPump from "./YellowElecPump";
import PTUIndication from "./PTU";

import "./index.css";

import React, { useContext, useEffect, useState, useRef } from "react"; 

import { Context } from "../../App";

function ECAMDisplay() {
    const {
         ACPower, 

         GreenPump,
         BluePump,
         YellowPump,
         ElecPump,
         PowerTransferUnit,

         GreenHydraulicValues, 
         BlueHydraulicValues,
         YellowHydraulicValues,
    } = useContext(Context);

    const [DisplayContent, setDisplayContent] = useState(null);
    const [displaySelfTestIndex, setDisplaySelfTestIndex] = useState(true);
    
    const firstUpdate = useRef(true);

   

    function turnOnEcam() {
        if (!ACPower) {
            setDisplayContent(<></>);
            return;
        }
    
        if (!displaySelfTestIndex) {
            setDisplayContent(
                <> 
                    <div className="DisplayHeader"></div>
                    <div className="DisplayBody">
                        <p style={{ color: "green" }}>
                            SELF TEST IN PROGRESS (MAX 40 SECONDS)
                        </p>
                    </div>
                    <div className="DisplayFooter"></div>
                </>
            );
    
            const waitTime = Math.floor(Math.random() * (40 - 10 + 1)) + 10 * 1000;
    
            const timer = setTimeout(() => {
                setDisplaySelfTestIndex(true);
            }, waitTime);
    
            return () => clearTimeout(timer);
        } 
    
        setDisplayContent(
            <> 
                <div className="DisplayHeader">
                    <h1>HYD</h1>
                </div>
                <div className="DisplayBody">
                    <PTUIndication/>
                    {renderHydraulicSystem("Green", GreenHydraulicValues, GreenPump, true)}
                    {renderHydraulicSystem("Blue", BlueHydraulicValues, BluePump, false)}
                    {renderHydraulicSystem("Yellow", YellowHydraulicValues, YellowPump, true)}
                    <YellowElecPump />
                </div>
                <div className="DisplayFooter">
                    <h1>Other</h1>
                </div>
            </>
        );
    }
    
    function renderHydraulicSystem(name, values, pump, shutoffRender) {
        return (
            <HydraulicSYS
                HydraulicSYSName={name}
                FluidQte={values ? values.FluidQte : 0}
                FluidminQTE={values ? values.FluidminQTE : 0}
                Indication={values ? values.Indication : 0}
                ShutOff={values ? values.ShutOff : false}
                LowState={pump !== false}
                ShutoffRender={shutoffRender}
            />
        );
    }
    

    useEffect(()=>{
        turnOnEcam();
    },[ACPower, GreenPump, BluePump, YellowPump, ElecPump, PowerTransferUnit,GreenHydraulicValues])
    

    return (
        <div className="Display">
            {DisplayContent}
        </div>
    );
}

export default ECAMDisplay;
