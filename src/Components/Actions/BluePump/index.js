import React, { useContext } from "react";
import { Context } from "../../../App";

import "./index.css"

function BluePumpComponent() {
    const { BluePump, setBluePump, setBlueHydraulicValues} = useContext(Context);


    const toggleBlueHydraulicPressure = () => {
        setBlueHydraulicValues(prevState => {
            if (prevState.Indication === 0) {
                // Set to the first state
                return {
                    FluidQte: 1.45,
                    FluidminQTE: 0.25,
                    Indication:  Math.floor(Math.random() * (3000 - 2900 + 1)) + 2900,
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

    
    const handleBluePumpToggle = () => {
        setBluePump(prevState => !prevState);
        toggleBlueHydraulicPressure()
    };

    return (
        <div className="extpwrbtn bluepmp" onClick={handleBluePumpToggle}>
            <button>
                <div className="btnName">BLUE PUMP</div>
                <div className="btnAction" dangerouslySetInnerHTML={{ __html: BluePump ? "<p>on</p>" : "" }}></div>
            </button>
        </div>
    );
}

export default BluePumpComponent;
