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
      if (YellowHydraulicValues.Indication === 0) {
        setstatusContent(<p>Yellow Hydraulic Failure</p>);
      }

      if (BlueHydraulicValues.Indication === 0) {
        const message = <p>Blue Hydraulic Failure</p>;

        // Concatenating the new message with previous content
        setstatusContent(prevState => (
          <div>
            {prevState}
            {message}
          </div>
        ));
      } else {
        setstatusContent(<p></p>);
      }
    } else {
      setstatusContent(<p></p>);
    }
  }, [ACPower, YellowHydraulicValues, BlueHydraulicValues]);

  return (
    <div className="ECAMStatus">
      {/* {statusContent} */}
    </div>
  );
}

export default ECAMStatus;
