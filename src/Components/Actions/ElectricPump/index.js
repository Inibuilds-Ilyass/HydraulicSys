import React, { useContext, useEffect } from "react";
import { Context } from "../../../App";
import "./index.css";

function ElectricPump() {
    const { ElecPump, setElecPump, YellowPump, setYellowHydraulicValues } = useContext(Context);

    // Function to toggle Yellow Hydraulic Pressure based on pump states
    const toggleYellowHydraulicPressure = () => {
        setYellowHydraulicValues(prevState => {
            if (YellowPump || ElecPump) {
                // If either YellowPump or ElecPump is on, pressurize the system
                if (prevState.Indication === 0) {
                    return {
                        FluidQte: 1.45,
                        FluidminQTE: 0.25,
                        Indication: Math.floor(Math.random() * (3000 - 2900 + 1)) + 2900,
                        ShutOff: false,
                        LowState: false,
                    };
                }
            } else {
                // If both are off, depressurize the system
                return {
                    FluidQte: 1.45,
                    FluidminQTE: 0.25,
                    Indication: 0,
                    ShutOff: false,
                    LowState: true,
                };
            }
        });
    };

    // Effect to toggle pressure when ElecPump or YellowPump state changes
    useEffect(() => {
        toggleYellowHydraulicPressure();
    }, [ElecPump, YellowPump]); // Watch both pumps

    // Handle Electric Pump Toggle
    const handleElecPumpToggle = () => {
        setElecPump(prevState => !prevState);
    };

    return (
        <>
            <div className="extpwrbtn elecpmp" onClick={handleElecPumpToggle}>
                <button>
                    <div className="btnName">ELEC PUMP</div>
                    <div className="btnAction" dangerouslySetInnerHTML={{ __html: ElecPump ? "<p>on</p>" : "" }}></div>
                </button>
            </div>
        </>
    );
}

export default ElectricPump;
