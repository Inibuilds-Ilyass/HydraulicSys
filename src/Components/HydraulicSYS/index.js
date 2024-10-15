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
                LowState = {(props.LowState == true) ? true : false}
            />
            <FireShutoffValve
                Shut = {props.ShutOff}
                Render = {props.ShutoffRender}
            />
            <Reservoir
                FluidQte={props.FluidQte} 
                FluidminQTE={props.FluidminQTE}
            />
        </div>
    )
}

export default HydraulicSYS