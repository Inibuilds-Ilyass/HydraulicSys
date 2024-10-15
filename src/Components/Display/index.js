import HydraulicSYS from "../HydraulicSYS";
import YellowElecPump from "../YellowElecPump";

import "./index.css";

import React, { useContext, useState } from "react"; // Removed useState and useEffect as they are not used here
import { Context } from "../../App";

function ECAMDisplay() {
    // Destructure values from the context
    const {
         ACPower, 
         BlueElecPump, 
         GreenHydraulicPressure, 
         BlueHydraulicPressure,
         YellowHydraulicPressure
        } = useContext(Context);


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
                    FluidQte = {GreenHydraulicPressure.FluidQte}
                    FluidminQTE = {GreenHydraulicPressure.FluidminQTE}
                    Indication = {GreenHydraulicPressure.Indication}
                    ShutOff = {GreenHydraulicPressure.ShutOff}
                    LowState = {GreenHydraulicPressure.LowState}
                    ShutoffRender = {true}
                />

                <HydraulicSYS
                    HydraulicSYSName={"Blue"}
                    FluidQte = {BlueHydraulicPressure.FluidQte}
                    FluidminQTE = {BlueHydraulicPressure.FluidminQTE}
                    Indication = {BlueHydraulicPressure.Indication}
                    ShutOff = {BlueHydraulicPressure.ShutOff}
                    LowState = {BlueHydraulicPressure.LowState}
                    ShutoffRender = {false}
                />

                <HydraulicSYS
                    HydraulicSYSName={"Yellow"}
                    FluidQte = {YellowHydraulicPressure.FluidQte}
                    FluidminQTE = {YellowHydraulicPressure.FluidminQTE}
                    Indication = {YellowHydraulicPressure.Indication}
                    ShutOff = {YellowHydraulicPressure.ShutOff}
                    LowState = {YellowHydraulicPressure.LowState}
                    ShutoffRender = {true}
                />
                <YellowElecPump/>
            </div>

            <div className="DisplayFooter">
                <h1>Other</h1>
            </div>
            </>
        );
    } else {
        // If ACPower is false, set the message
        displayContent = <p>US GPU is Off</p>;
    }

    return (
        <div className="Display">
            {displayContent}
        </div>
    );
}

export default ECAMDisplay;
