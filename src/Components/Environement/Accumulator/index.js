import "./index.css"
import React, { useContext, useEffect } from "react";

import { Context } from "../../../App";


function AccumulatorIndicator(){

    const {

        YellowHydraulicValues,
        BlueHydraulicValues,
        GreenHydraulicValues,
        
        Accumulator,
        setAccumulator,

        UseAcc,

        } = useContext(Context);

    useEffect(()=> {
        setAccumulator(3000)
    }, [GreenHydraulicValues, YellowHydraulicValues, BlueHydraulicValues])

    
    useEffect(()=> {
        setAccumulator(prevState => {
            
            if(YellowHydraulicValues.Indication === 0 && BlueHydraulicValues.Indication === 0 && GreenHydraulicValues.Indication === 0 ){
                const randValue = Math.floor(Math.random() * (500 - 300 + 1)) + 300;

                if( prevState - randValue > 0){
                    return prevState - randValue
                }
                else{
                    return 0
                }
            
            }
            

        })
    }, [UseAcc])

    return(
        <div className="AccumulatorIndicator">
            <div className="AccumPress">
                <div className="AccumPressIndicator"
                    style={{
                        rotate: `${-((Accumulator * 90) / 3000) + 0}deg`

                    }}
                ></div>
                <div className="AccumPressValue"></div>
            </div>
            
        </div>
    )
}

export default AccumulatorIndicator