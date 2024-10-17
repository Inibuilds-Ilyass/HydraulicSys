import React, { useContext, useEffect } from "react";
import { Context } from "../../../App";
import "./index.css";

function YellowPumpComponent() {
    const { YellowPump, setYellowPump, setYellowHydraulicValues, ElecPump} = useContext(Context);

    function handleToggleYellowPump(){
        setYellowPump(prevState => !prevState)

        if (!ElecPump){return;}
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
        <div className="extpwrbtn yellowpmp" onClick={handleToggleYellowPump}>
            <button>
                <div className="btnName">YELLOW PUMP</div>
                <div className="btnAction" dangerouslySetInnerHTML={{ __html: YellowPump ? "" : "<p>on</p>"  }}></div>
            </button>
        </div>
    );
}

export default YellowPumpComponent;
