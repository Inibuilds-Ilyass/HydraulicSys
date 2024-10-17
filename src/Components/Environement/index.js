import "./index.css";

import AccumulatorIndicator from "./Accumulator";
import ECAMStatus from "./ECAMStatus";

import React, { useState, useEffect, useContext} from "react";

import { Context } from "../../App";

function Environement(){

    return (
        <div className="Environement">
            <div>
                <AccumulatorIndicator/>
            </div>
            <div>
                <ECAMStatus/>
            </div>
        </div>
    );
}

export default Environement;
