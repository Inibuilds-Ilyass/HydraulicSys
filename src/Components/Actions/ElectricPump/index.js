import React, { useContext, useEffect } from "react";
import { Context } from "../../../App";
import "./index.css";

function ElectricPump() {
    const { ElecPump, setElecPump, YellowPump, setYellowHydraulicValues } = useContext(Context);


    function handleToggleYellowPump(){
        setElecPump(prevState => !prevState)
        
        if (!YellowPump){return;}
        else{
            setYellowHydraulicValues((prevState)=>{

                if (prevState.Indication === 0 && ElecPump) {
                    return {
                        FluidQte: 1.45,
                        FluidminQTE: 0.25,
                        Indication: Math.floor(Math.random() * (3000 - 2900 + 1)) + 2900,
                        ShutOff: false,
                        LowState : false,
                    };
                } else {
                    return {
                        FluidQte: 1.45,
                        FluidminQTE: 0.25,
                        Indication: 0,
                        ShutOff: false,
                        LowState : true,
                    };
                }
                }  
            )
        }
        
        
        
    }

    return (
        <>
            <div className="extpwrbtn elecpmp" onClick={handleToggleYellowPump}>
                <button>
                    <div className="btnName">ELEC PUMP</div>
                    <div className="btnAction" dangerouslySetInnerHTML={{ __html: ElecPump ? "" : "<p>on</p>" }}></div>
                </button>
            </div>
        </>
    );
}

export default ElectricPump;
