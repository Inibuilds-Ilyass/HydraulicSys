import "./index.css"

import Reservoir from '../reservoir';
import FireShutoffValve from '../fireShutoffValve';
import EDP from "../EDP";
import PressureIndication from "../pressureIndic";


function HydraulicSYS(props){
    return(
        <div className="HydraulicSYS">
            <div className="HydraulicSYSName"><span>{props.HydraulicSYSName}</span></div>
            <PressureIndication
                Indication = {props.Indication}
            />
            <EDP
                LowState = {(props.ShutOff == true) ? true : false}
            />
            <FireShutoffValve
                Shut = {props.ShutOff}
            />
            <Reservoir
                FluidQte={props.FluidQte} 
                FluidminQTE={props.FluidminQTE}
            />
        </div>
    )
}

export default HydraulicSYS