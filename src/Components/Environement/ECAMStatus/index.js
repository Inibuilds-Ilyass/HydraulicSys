import "./index.css";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../App";

function ECAMStatus() {
  const [statusContent, setstatusContent] = useState(<></>);
  
  const {
    YellowHydraulicValues,
    BlueHydraulicValues,
    GreenHydraulicValues,
    BluePump,
    YellowPump,
    GreenPump,
    ACPower
  } = useContext(Context);

  useEffect(() => {
    if (ACPower === true) {
      let messages = [];
  
      if (YellowPump) {
        messages.push(<p className="ECAMStatusMessageWarning">HYD G ENG 1 PUMP LO PR</p>);
      }
      if (YellowHydraulicValues.Indication === 0) {
        messages.push(<p className="ECAMStatusMessageWarning">HYD G SYS LO PR</p>);
      }
  
      if (BluePump) {
        messages.push(<p className="ECAMStatusMessageWarning" >HYD B ELEC PUMP LO PR</p>);
      }
      if (BlueHydraulicValues.Indication === 0) {
        messages.push(<p className="ECAMStatusMessageWarning">HYD B SYS LO PR</p>);
      }
  
      if (GreenPump) {
        messages.push(<p className="ECAMStatusMessageWarning">HYD Y ENG 2 PUMP LO PR</p>);
      }
      
      if (GreenHydraulicValues.Indication === 0) {
        messages.push(<p className="ECAMStatusMessageWarning">HYD Y SYS LO PR</p>);
      }

      
      if (GreenHydraulicValues.Indication === 0 && BlueHydraulicValues.Indication === 0 && YellowHydraulicValues.Indication === 0) {
        messages= []
        messages.push(<p className="ECAMStatusMessageFailure">F/CTL L + R ELEV FAULT</p>);
        messages.push(<p className="ECAMStatusMessageFailureInstructions">MAX SPEED ....... 320/.77</p>);
        messages.push(<p className="ECAMStatusMessageFailureInstructions">- TRIM FOR NEUTRAL ELEV</p>);
        messages.push(<p className="ECAMStatusMessageFailureInstructions">SPD BRK ....... DO NOT USE</p>);
        messages.push(<p className="ECAMStatusMessageFailure">HYD B + Y SYS LO PR</p>);
        messages.push(<p className="ECAMStatusMessageFailureInstructions">- YELLOW ELEC PUMP .... ON</p>);
        messages.push(<p className="ECAMStatusMessageFailureInstructions">- RAT ............. MAN ON</p>);
      }
  
      if (messages.length > 0) {
        setstatusContent(<div>{messages}</div>);
      } else {
        setstatusContent(<p></p>);
      }
    } else {
      setstatusContent(<p>AC Power is Off</p>);
    }
  }, [ACPower, YellowHydraulicValues, BlueHydraulicValues, GreenHydraulicValues]);
  

  return (
    <div className="ECAMStatus">
      {statusContent}
    </div>
  );
}

export default ECAMStatus;
