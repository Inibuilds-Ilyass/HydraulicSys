
import React, { useContext } from "react";
import { Context } from "../../../App";


import "./index.css"


function ElectricPump(){

    const {ElecPump, setElecPump, YellowPump, setYellowPump, setYellowHydraulicPressure} = useContext(Context);
    
    const toggleYellowHydraulicPressure = () => {
        setYellowHydraulicPressure(prevState => {
            if (prevState.Indication === 0) {
                // Set to the first state
                return {
                    FluidQte: 1.45,
                    FluidminQTE: 0.25,
                    Indication: Math.floor(Math.random() * (3000 - 2900 + 1)) + 2900,
                    ShutOff: false,
                    LowState : true,
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

    const handleElecPumpToggle = () => {
        setYellowPump(prevState => !prevState);
        setElecPump(prevState => !prevState);
        toggleYellowHydraulicPressure()
    };

    
    return(
        <>
            <div className="extpwrbtn elecpmp" onClick={handleElecPumpToggle}>
            <button>
                <div className="btnName">ELEC PUMP</div>
                <div className="btnAction" dangerouslySetInnerHTML={{ __html: ElecPump ? "<p>on</p>" : "" }}></div>
            </button>
        </div>
        </>
    )
}

export default ElectricPump