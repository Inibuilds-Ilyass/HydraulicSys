import "./index.css"

import React, { useEffect, useState , useContext} from "react";

function PressureIndication(props){

    const [pressure, setPressure] = useState(0);



    function presurizeAnimation(){
        let start = 0;
        const end = props.Indication;
        const duration = 10;
        const stepTime = Math.abs(Math.floor(duration / (end - start)));
        const timer = setInterval(() => {
        if (start < end) {
            start += 15;
            setPressure(start)
        }
        
        else {
            clearInterval(timer);
        }
        }, stepTime);

        return () => clearInterval(timer);
    }

    const depresurizeAnimation = () => {
        let start = pressure;
        const end = 0;
        const duration = 10;
        const stepTime = Math.abs(Math.floor(duration / (start - end)));
    
        const timer = setInterval(() => {
          if (start > end) {
            start -= 15;
            setPressure(start);
          } else {
            clearInterval(timer);
            setPressure(0);
          }
        }, stepTime);
    
        return () => clearInterval(timer);
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