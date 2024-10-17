import "./index.css"
import React, { useContext, useEffect } from "react";
import { Context } from "../../../App"

function UseAcc(){
    

    const {
        UseAcc,
        setUseAcc,
        } = useContext(Context);

        
    return(
        <div className="btn greenpmp" onClick={()=>{setUseAcc(prevState => !prevState)}}>
            <button>
                <div className="btnName">USE ACC</div>
                <div className="btnAction" dangerouslySetInnerHTML={{ __html: UseAcc ?"<p>use</p>" : ""  }}></div>
            </button>
        </div>
    )
}

export default UseAcc