import React, { createContext, useState } from "react";
import ECAMDisplay from "./Components/Display";
import Action from "./Components/Actions";
import Environement from "./Components/Environement";
import './App.css';

// Create the context
export const Context = createContext();

function App() {
    const [ACPower, setACPower] = useState(false);
    const [BluePump, setBluePump] = useState(true);
    const [YellowPump, setYellowPump] = useState(true);
    const [GreenPump, setGreenPump] = useState(true);
    const [ElecPump, setElecPump] = useState(true);
    const [PowerTransferUnit, setPowerTransferUnit] = useState(true);
    const [CargoDoor, setCargoDoor] = useState(false);
    const [UseAcc, setUseAcc] = useState(false);
    
    
    const [GreenHydraulicValues, setGreenHydraulicValues] = useState({
        FluidQte : 1.45,
        FluidminQTE : 0.25,
        Indication : 0,
        ShutOff : false,
        LowState : true,
    })
    const [BlueHydraulicValues, setBlueHydraulicValues] = useState({
        FluidQte : 1.45,
        FluidminQTE : 0.25,
        Indication : 0,
        ShutOff : false,
        LowState : true,
    })
    const [YellowHydraulicValues, setYellowHydraulicValues] = useState({
        FluidQte : 1.45,
        FluidminQTE : 0.25,
        Indication : 0,
        ShutOff : false,
        LowState : true,
    })


    const [Accumulator, setAccumulator] = useState(3000);

    return (
        <Context.Provider value={{
            ACPower,
            setACPower,

            BluePump,
            setBluePump,

            YellowPump,
            setYellowPump,

            GreenPump,
            setGreenPump,

            ElecPump,
            setElecPump,

            CargoDoor,
            setCargoDoor,

            PowerTransferUnit,
            setPowerTransferUnit,

            UseAcc,
            setUseAcc,

            Accumulator,
            setAccumulator,
            
            // Engine Values
            GreenHydraulicValues,
            setGreenHydraulicValues,

            BlueHydraulicValues,
            setBlueHydraulicValues,
            
            YellowHydraulicValues,
            setYellowHydraulicValues,
        }}>
            <div className="App">
                <ECAMDisplay />
                <Action />
                <Environement />
            </div>
        </Context.Provider>
    );
}

export default App;
