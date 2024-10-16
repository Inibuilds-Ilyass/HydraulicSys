import "./index.css"

import { Context } from "../../App";

import React, { useEffect, useState , useContext} from "react";

function PressureIndication(props){

    const [pressure, setPressure] = useState(0);

    // const { GreenHydraulicPressure, BlueHydraulicPressure, YellowHydraulicPressure} = useContext(Context);



    function presurizeAnimation(){
        let start = 0; // Starting value
        const end = props.Indication; // Ending value (from props)
        const duration = 10; // Duration of the animation in milliseconds
        const stepTime = Math.abs(Math.floor(duration / (end - start))); // Time per step
        const timer = setInterval(() => {
        if (start < end) {
            start += 15; // Increment the value
            setPressure(start); // Update state
        }
        
        else {
            clearInterval(timer);
            // Update state // Clear the timer when finished
        }
        }, stepTime);

        return () => clearInterval(timer); // Cleanup on unmount
    }

    const depresurizeAnimation = () => {
        let start = pressure; // Starting value (current pressure)
        const end = 0; // Ending value (0)
        const duration = 10; // Duration of the animation in milliseconds
        const stepTime = Math.abs(Math.floor(duration / (start - end))); // Time per step
    
        const timer = setInterval(() => {
          if (start > end) {
            start -= 15; // Decrement the value
            setPressure(start); // Update state
          } else {
            clearInterval(timer); // Clear the timer when finished
            setPressure(0); // Ensure the pressure is set to 0 at the end
          }
        }, stepTime);
    
        return () => clearInterval(timer); // Cleanup on unmount
      };

    useEffect(() => {
        if(props.Indication > 0){presurizeAnimation()}
        else if(props.Indication == 0){depresurizeAnimation()}
    }, [props.Indication]);

    return(
        <div className="PressIndicationContainer">
            <div className="HydraulicSYSName">
              <span
                style={{ 
                  color: (props.Indication === 0) ? `orange` : `green`,
                }}
              >{props.HydraulicSYSName}</span>
              </div>
            <div className="Arrow"
              style={{ 
                borderBottom: (props.Indication === 0) ? `20px solid orange` : `20px solid green`,
              }}
            ></div>
            <div className="PressIndication">
              <p
                style={{ 
                  color: (props.Indication === 0) ? `orange` : `green`,
                }}
              >{pressure}</p>
            </div>
            <div className="Line"
              style={{ 
                backgroundColor: (props.Indication === 0) ? `orange` : `green`,
              }}
            ></div>
        </div>
    )
}

export default PressureIndication