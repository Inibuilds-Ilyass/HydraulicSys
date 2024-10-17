import HydraulicSYS from "../HydraulicSYS";
import YellowElecPump from "../YellowElecPump";
import PTUIndication from "../PTU";

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
        if (ACPower) {
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
            } else {
                setDisplayContent(
                    <> 
                        <div className="DisplayHeader">
                            <h1>HYD</h1>
                        </div>
                        <div className="DisplayBody">
                            <PTUIndication/>
                            <HydraulicSYS   
                                HydraulicSYSName={"Green"}
                                FluidQte={GreenHydraulicValues ? GreenHydraulicValues.FluidQte : 0}
                                FluidminQTE={GreenHydraulicValues ? GreenHydraulicValues.FluidminQTE : 0}
                                Indication={GreenHydraulicValues ? GreenHydraulicValues.Indication : 0}
                                ShutOff={GreenHydraulicValues ? GreenHydraulicValues.ShutOff : false}
                                LowState={GreenPump === false ? false : true}
                                ShutoffRender={true}
                            />
                            <HydraulicSYS
                                HydraulicSYSName={"Blue"}
                                FluidQte={BlueHydraulicValues ? BlueHydraulicValues.FluidQte : 0}
                                FluidminQTE={BlueHydraulicValues ? BlueHydraulicValues.FluidminQTE : 0}
                                Indication={BlueHydraulicValues ? BlueHydraulicValues.Indication : 0}
                                ShutOff={BlueHydraulicValues ? BlueHydraulicValues.ShutOff : false}
                                LowState={BluePump === false ? false : true}
                                ShutoffRender={false}
                            />
                            <HydraulicSYS
                                HydraulicSYSName={"Yellow"}
                                FluidQte={YellowHydraulicValues ? YellowHydraulicValues.FluidQte : 0}
                                FluidminQTE={YellowHydraulicValues ? YellowHydraulicValues.FluidminQTE : 0}
                                Indication={YellowHydraulicValues ? YellowHydraulicValues.Indication : 0}
                                ShutOff={YellowHydraulicValues ? YellowHydraulicValues.ShutOff : false}
                                LowState={YellowPump === false ? false : true}
                                ShutoffRender={true}
                            />
                            <YellowElecPump />
                        </div>
                        <div className="DisplayFooter">
                            <h1>Other</h1>
                        </div>
                    </>
                );
            }
        } else {
            setDisplayContent(<></>);
        }
    }

    useEffect(()=>{
        turnOnEcam();
    },[ACPower, GreenPump, BluePump, YellowPump, ElecPump, PowerTransferUnit])
    

    return (
        <div className="Display">
            {DisplayContent}
        </div>
    );
}

export default ECAMDisplay;
