import React, { useContext } from "react";
import { Context } from "../../../App";


import "./index.css"

function GreenElectricPump() {
    const { GreenPump, setGreenPump, setGreenHydraulicPressure} = useContext(Context);
    
    const toggleGreenHydraulicPressure = () => {
        setGreenHydraulicPressure(prevState => {
            if (prevState.Indication === 0) {
                // Set to the first state
                return {
                    FluidQte: 1.45,
                    FluidminQTE: 0.25,
                    Indication: Math.floor(Math.random() * (3000 - 2900 + 1)) + 2900,
                    ShutOff: false,
                    LowState : false,
                };
            } else {
                // Set to the second state
                return {
                    FluidQte: 1.45,
                    FluidminQTE: 0.25,
                    Indication: 0,
                    ShutOff: false,
                    LowState : true,
                };
            }
        });
    };

    
    const handleGreenElecPumpToggle = () => {
        setGreenPump(prevState => !prevState);
        toggleGreenHydraulicPressure()
    };

    return (
        <div className="extpwrbtn greenpmp" onClick={handleGreenElecPumpToggle}>
            <button>
                <div className="btnName">GREEN PUMP</div>
                <div className="btnAction" dangerouslySetInnerHTML={{ __html: GreenPump ? "<p>on</p>" : "" }}></div>
            </button>
        </div>
    );
}

export default GreenElectricPump;
