import "./index.css";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../App";

function YellowElecPump() {
    const { ElecPump } = useContext(Context);
    
    const [ElecPumpIndicationColor, setElecPumpIndicationColor] = useState("white");

    useEffect(() => {
        setElecPumpIndicationColor(ElecPump ? "white": "green" );
    }, [ElecPump]);

    return (
        <div className="ElectricPump">
            <div className="triangle"
                style={{ 
                    borderRight: `10px solid ${ElecPumpIndicationColor}`,
                }}
            ></div>
            <p
                style={{ 
                    color: ElecPumpIndicationColor,
                }}
            >
                ELEC
            </p>
        </div>
    );
}

export default YellowElecPump;
