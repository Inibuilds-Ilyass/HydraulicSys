import "./index.css"
import React, { useContext, useEffect, useState } from "react";

import { Context } from "../../../App";

function PTUIndication(){

    
    const { PowerTransferUnit } = useContext(Context);

    const [PowerTransferUnitIndicationColor, setPowerTransferUnitIndicationColor] = useState("white");


    useEffect(() => {
        
        setPowerTransferUnitIndicationColor(PowerTransferUnit ? "orange": "green" );
    }, [PowerTransferUnit]);

    return(
        <div className="PTUIndication">

            <div className="PTUIndicationContent">
                
                <div className="arrowline"
                    style={{ 
                        backgroundColor: `${PowerTransferUnitIndicationColor}`,
                        display: PowerTransferUnit ? "none":"block"
                    }}

                ></div>
                <div className="arrow-left"
                    style={{ 
                        borderRight: `10px solid ${PowerTransferUnitIndicationColor}`,
                    }}></div>
                <div className="arrowline"
                    
                    style={{ 
                        backgroundColor: `${PowerTransferUnitIndicationColor}`,
                    }}
                ></div>
                <div className="half-circle"
                
                    style={{ 
                        borderBottom: `2px ${PowerTransferUnitIndicationColor} solid`,
                        borderLeft: `2px ${PowerTransferUnitIndicationColor} solid`,
                    }}></div>
                <div className="arrowline"
                    
                    style={{ 
                        backgroundColor: `${PowerTransferUnitIndicationColor}`,
                    }}
                ></div>
                <div className="arrow-left"
                    style={{ 
                        borderRight: `10px solid ${PowerTransferUnitIndicationColor}`,
                    }}></div>

                <div className="PTUText"
                    style={{ 
                        color: `${PowerTransferUnitIndicationColor}`,
                    }}
                ><p>PTU</p></div>
                <div className="arrow-left"
                    
                    style={{ 
                        borderRight: `10px solid ${PowerTransferUnitIndicationColor}`,
                    }}
                ></div>
                <div className="arrowline"
                    
                    style={{ 
                        backgroundColor: `${PowerTransferUnitIndicationColor}`,
                        
                        display: PowerTransferUnit ? "none":"block"
                    }}
                ></div>
            </div>
        </div>
    )
}

export default PTUIndication