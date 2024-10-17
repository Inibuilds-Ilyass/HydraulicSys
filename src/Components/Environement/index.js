import "./index.css";

import AccumulatorIndicator from "./Accumulator";

import React, { useState, useEffect, useContext} from "react";

import { Context } from "../../App";

function Environement(props) {
    
  

    return (
        <div className="Environement">
            <div>
                <AccumulatorIndicator/>
            </div>
        </div>
    );
}

export default Environement;
