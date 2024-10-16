import HydraulicSYS from "../HydraulicSYS";
import YellowElecPump from "../YellowElecPump";

import "./index.css";

import React, { useContext, useEffect, useState, useRef } from "react"; 
import { Context } from "../../App";

function ECAMDisplay() {
    const {
         ACPower, 
         GreenHydraulicValues, 
         BlueHydraulicValues,
         YellowHydraulicValues,
         GreenPump,
    } = useContext(Context);

    const [DisplayContent, setDisplayContent] = useState(null);
    const [displaySelfTestIndex, setDisplaySelfTestIndex] = useState(true);
    
    const firstUpdate = useRef(true);  // Ref to track the first update

    function turnOnEcam() {
        console.log("Green Hydraulic Values:", GreenHydraulicValues);
        console.warn(`-----------------------------------------------------------------`);

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

                const waitTime = Math.floor(Math.random() * (40 - 10 + 1)) + 10 * 1000; // Convert to milliseconds

                const timer = setTimeout(() => {
                    setDisplaySelfTestIndex(true);
                }, waitTime);

                return () => clearTimeout(timer); // Clean up timer
            } else {
                setDisplayContent(
                    <> 
                        <div className="DisplayHeader">
                            <h1>HYD</h1>
                        </div>
                        <div className="DisplayBody">
                            <HydraulicSYS   
                                HydraulicSYSName={"Green"}
                                FluidQte={GreenHydraulicValues ? GreenHydraulicValues.FluidQte : 0}
                                FluidminQTE={GreenHydraulicValues ? GreenHydraulicValues.FluidminQTE : 0}
                                Indication={GreenHydraulicValues ? GreenHydraulicValues.Indication : 0}
                                ShutOff={GreenHydraulicValues ? GreenHydraulicValues.ShutOff : false}
                                LowState={GreenHydraulicValues ? GreenHydraulicValues.LowState : false}
                                ShutoffRender={true}
                            />
                            <HydraulicSYS
                                HydraulicSYSName={"Blue"}
                                FluidQte={BlueHydraulicValues ? BlueHydraulicValues.FluidQte : 0}
                                FluidminQTE={BlueHydraulicValues ? BlueHydraulicValues.FluidminQTE : 0}
                                Indication={BlueHydraulicValues ? BlueHydraulicValues.Indication : 0}
                                ShutOff={BlueHydraulicValues ? BlueHydraulicValues.ShutOff : false}
                                LowState={BlueHydraulicValues ? BlueHydraulicValues.LowState : false}
                                ShutoffRender={false}
                            />
                            <HydraulicSYS
                                HydraulicSYSName={"Yellow"}
                                FluidQte={YellowHydraulicValues ? YellowHydraulicValues.FluidQte : 0}
                                FluidminQTE={YellowHydraulicValues ? YellowHydraulicValues.FluidminQTE : 0}
                                Indication={YellowHydraulicValues ? YellowHydraulicValues.Indication : 0}
                                ShutOff={YellowHydraulicValues ? YellowHydraulicValues.ShutOff : false}
                                LowState={YellowHydraulicValues ? YellowHydraulicValues.LowState : false}
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

    useEffect(() => {
        if (firstUpdate.current) {
            console.log("here");  // Log when the effect runs for the first time
            firstUpdate.current = false;  // Set it to false so this block doesn't run again
            return;  // Skip the effect logic for the first render
            
        }
        turnOnEcam();  // Call the function on subsequent renders
    }, [ACPower, displaySelfTestIndex, GreenPump]);

    return (
        <div className="Display">
            {DisplayContent}
        </div>
    );
}

export default ECAMDisplay;
