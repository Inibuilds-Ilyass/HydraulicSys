import "./index.css"

import Reservoir from '../reservoir';
import FireShutoffValve from '../fireShutoffValve';
import EDP from "../EDP";
import PressureIndication from "../pressureIndic";


function HydraulicSYS(props){
    return(
        <div className="HydraulicSYS">
            
            <PressureIndication
                Indication = {props.Indication}
                HydraulicSYSName = {props.HydraulicSYSName}
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