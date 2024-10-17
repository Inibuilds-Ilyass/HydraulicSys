import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../../../App";


import "./index.css"

function GreenElectricPump() {


    const { GreenPump, setGreenPump, setGreenHydraulicValues} = useContext(Context);
    
    function handleToggleGreenPump(){
        setGreenPump(prevState => !prevState)
        setGreenHydraulicValues((prevState)=>{

            if (prevState.Indication === 0) {
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

    return (
        <div className="extpwrbtn greenpmp" onClick={handleToggleGreenPump}>
            <button>
                <div className="btnName">GREEN PUMP</div>
                <div className="btnAction" dangerouslySetInnerHTML={{ __html: GreenPump ?   ""  : "<p>on</p>" }}></div>
            </button>
        </div>
    );
}

export default GreenElectricPump;
