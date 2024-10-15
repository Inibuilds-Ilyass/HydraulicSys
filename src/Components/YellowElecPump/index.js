import "./index.css";
import React, { useContext, useEffect, useState } from "react"; // Ensure React is imported
import { Context } from "../../App";

function YellowElecPump() {
    const { ElecPump } = useContext(Context);
    
    const [ElecPumpIndicationColor, setElecPumpIndicationColor] = useState("white");

    useEffect(() => {
        // Set the color based on ElecPump state
        setElecPumpIndicationColor(ElecPump ? "green" : "white");
    }, [ElecPump]); // Run this effect whenever ElecPump changes

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
