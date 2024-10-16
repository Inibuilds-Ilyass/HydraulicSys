import React, { useContext, useEffect } from "react";
import "./index.css";
import { Context } from "../../../App";

function PTU() {
    const { PowerTransferUnit, setPowerTransferUnit, setGreenHydraulicPressure, YellowHydraulicPressure } = useContext(Context);

    // Function to handle pressure toggle based on PTU and YellowHydraulicPressure states
    const toggleGreenHydraulicPressure = () => {
        // if (YellowHydraulicPressure.Indication > 0 && !PowerTransferUnit) {
        //     setGreenHydraulicPressure((prevState) => {
        //         if (prevState.Indication === 0) {
        //             // Set to pressurized state
        //             return {
        //                 FluidQte: 1.45,
        //                 FluidminQTE: 0.25,
        //                 Indication: Math.floor(Math.random() * (3000 - 2900 + 1)) + 2900,
        //                 ShutOff: false,
        //                 LowState: false,
        //             };
        //         } else {
        //             // Set to depressurized state
        //             return {
        //                 FluidQte: 1.45,
        //                 FluidminQTE: 0.25,
        //                 Indication: 0,
        //                 ShutOff: false,
        //                 LowState: true,
        //             };
        //         }
        //     });
        // }
    };

    // useEffect will run whenever PowerTransferUnit changes
    useEffect(() => {
        toggleGreenHydraulicPressure();
    }, [PowerTransferUnit, YellowHydraulicPressure]); // Dependencies ensure it runs after PowerTransferUnit changes

    const handlePTUPumpToggle = () => {
        setPowerTransferUnit((prevState) => !prevState); // Toggles PTU state
        // alert(PowerTransferUnit)
    };

    return (
        <div className="extpwrbtn greenpmp" onClick={handlePTUPumpToggle}>
            <button>
                <div className="btnName">PTU</div>
                <div className="btnAction" dangerouslySetInnerHTML={{ __html: PowerTransferUnit ? "" : "<p>off</p>" }}></div>
            </button>
        </div>
    );
}

export default PTU;
