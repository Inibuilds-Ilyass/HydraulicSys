import React, { useContext, useEffect } from "react";
import "./index.css";
import { Context } from "../../../App";

function PTU() {
    const {
        PowerTransferUnit,
        setPowerTransferUnit,
        setGreenHydraulicValues,
        YellowHydraulicValues,
        YellowPump,
        ElecPump,



        GreenHydraulicValues,
        } = useContext(Context);

    function handlePTUToggle(){
        
        // console.log(PowerTransferUnit)
        // console.log("handlePTUToggle Executed")
        setGreenHydraulicValues(
            () =>{
                if(YellowHydraulicValues.Indication > 0 && PowerTransferUnit){
                    return {
                        FluidQte: 1.45,
                        FluidminQTE: 0.25,
                        Indication: Math.floor(Math.random() * (3000 - 2900 + 1)) + 2900,
                        ShutOff: false,
                        LowState : false,
                    };
                }else{ 
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
    useEffect(()=>{
        handlePTUToggle()
    },[PowerTransferUnit, YellowPump, ElecPump])

    return (
        <div className="extpwrbtn greenpmp" onClick={()=>{setPowerTransferUnit(prevState => !prevState)}}>
            <button>
                <div className="btnName">PTU</div>
                <div className="btnAction" dangerouslySetInnerHTML={{ __html: PowerTransferUnit ?"<p>off</p>" : ""  }}></div>
            </button>
        </div>
    );
}

export default PTU;
