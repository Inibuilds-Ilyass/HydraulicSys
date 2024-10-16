import React, { useContext, useEffect } from "react";
import { Context } from "../../../App";
import "./index.css";

function YellowPumpComponent() {
    const { YellowPump, setYellowPump, YellowHydraulicValues, setYellowHydraulicValues, ElecPump} = useContext(Context);

    const toggleYellowHydraulicPressure = () => {
        setYellowHydraulicValues(prevState => {
            if (!prevState) {
                console.error("YellowHydraulicPressure is undefined");
                return {
                    FluidQte: 1.45,
                    FluidminQTE: 0.25,
                    Indication: 0,
                    ShutOff: false,
                    LowState: true,
                }; // Return a default state if prevState is undefined
            }
    
            if (YellowPump || ElecPump) {
                if (prevState.Indication === 0) {
                    // Pressurize the system
                    return {
                        FluidQte: 1.45,
                        FluidminQTE: 0.25,
                        Indication: Math.floor(Math.random() * (3000 - 2900 + 1)) + 2900,
                        ShutOff: false,
                        LowState: false,
                    };
                }
            }
    
            // Depressurize the system or handle the default return
            return {
                FluidQte: 1.45,
                FluidminQTE: 0.25,
                Indication: 0,
                ShutOff: false,
                LowState: true,
            };
        });
    };
    
    

    useEffect(() => {
        // console.log("YellowHydraulicPressure before toggle:", YellowHydraulicPressure);
        toggleYellowHydraulicPressure();
    }, [ElecPump, YellowPump]); // Monitor both states
    

    const handleYellowElecPumpToggle = () => {
        setYellowPump(prevState => !prevState);
    };

    return (
        <div className="extpwrbtn yellowpmp" onClick={handleYellowElecPumpToggle}>
            <button>
                <div className="btnName">YELLOW PUMP</div>
                <div className="btnAction" dangerouslySetInnerHTML={{ __html: YellowPump ? "<p>on</p>"  : "" }}></div>
            </button>
        </div>
    );
}

export default YellowPumpComponent;
