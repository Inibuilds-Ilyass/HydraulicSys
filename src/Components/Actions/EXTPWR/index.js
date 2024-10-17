import React, { useContext } from "react";
import { Context } from "../../../App";

import "./index.css";

function ExtPwr() {
    const { ACPower, setACPower } = useContext(Context);

    const handleACPowerToggle = () => {
        setACPower(prevState => !prevState);
    };

    return (
        <div className="btn extpwr" onClick={handleACPowerToggle}>
            <button>
                <div className="btnName">EXT PWR</div>
                <div className="btnAction" dangerouslySetInnerHTML={{ __html: ACPower ? "<p>on</p>" : "" }}></div>
            </button>
        </div>
    );
}

export default ExtPwr;
