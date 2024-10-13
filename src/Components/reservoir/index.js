import CustomLine from "../Lines"

import { useEffect, useState } from "react"

import "./index.css"

function Reservoir(props){
    
    const [HYDQTE, setHYDQTE] = useState(7)
    const [minHYDQTE, setminHYDQTE] = useState(7)

    function GreenQTEindicator(){
        const newQte = (props.FluidQte * 9) / 1.45;
        setHYDQTE(props.FluidQte > 1.45 ? 9 : newQte);
    }
    
    
    function OrangeminQTEindicator(){
        const newnminQte = (props.FluidminQTE * 9) / 1.45;
        setminHYDQTE(props.FluidQte > 1.45 ? 9 : newnminQte);
    }


    useEffect(()=>{
        GreenQTEindicator()
        OrangeminQTEindicator()
    }, [props.FluidQte,props.FluidminQTE]);
    



    return(
        <div>

            {/* <CustomLine
                color = "white"
                width = "1vw"
                height= "10vw"
                rotationDegrees="0"
            /> */}

            <div className="ResevoirLine">
                <div className="GreenLine"
                    style={{ 
                    height: `${HYDQTE}vw`,
                    border: HYDQTE <= minHYDQTE ? "2px solid orange" : "2px solid green" // Correctly setting the border based on condition
                }}
                 ></div>
                <div className="whiteLine"></div>
                <div className="QTEIndicators">
                    <div className="QTEIndicatorsTOP">
                        <div className="GreenQTELine"></div>
                    </div>
                    <div className="QTEIndicatorsBottom">
                        <div 
                            style={{ height: `${minHYDQTE}vw` }}
                            className="OrangeLine"></div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Reservoir