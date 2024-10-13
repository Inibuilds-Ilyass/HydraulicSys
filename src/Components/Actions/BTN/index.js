import React from "react";
import "./index.css";

function BTN({ name, onClick, isACPowerOn }) {
    return (
        <div className="extpwrbtn" onClick={onClick}>
            <button>
                <div className="btnName">{name}</div>
                <div className="btnAction" dangerouslySetInnerHTML={{ __html: isACPowerOn ? "<p>on</p>" : "" }}></div>
            </button>
        </div>
    );
}

export default BTN;
