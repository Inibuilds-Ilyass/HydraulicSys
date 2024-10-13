import "./index.css";

import React, { useState, useEffect, useContext} from "react";

import { Context } from "../../App";

function Environement(props) {
    // Initialize states from localStorage
    
  const [ACPower, setACPower] = useContext(Context);
//   const [ElecPump, setElecPump] = useContext(false);
//   const [CargoDoor, setCargoDoor] = useContext(false);
  

    return (
        <div className="Environement">
            <h1>Environement</h1>
            <p>AC Power: <span>{ACPower ? "On" : "Off"}</span></p>
            {/* <p>Electric Pump: <span>{ElecPump ? "On" : "Off"}</span></p>
            <p>Cargo Door: <span>{CargoDoor ? "Open" : "Closed"}</span></p> */}
        </div>
    );
}

export default Environement;
