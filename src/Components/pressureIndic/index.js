import "./index.css"

import React, { useEffect, useState } from "react";

function PressureIndication(props){

    const [pressure, setPressure] = useState(0); // State to hold the pressure value


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
        
        
    }, [props.Indication]); // Dependency array to rerun effect on change

    return(
        <div className="PressIndicationContainer">
            <div className="Arrow"></div>
            <div className="PressIndication"><p>{pressure}</p></div>
            <div className="Line"></div>
        </div>
    )
}

export default PressureIndication