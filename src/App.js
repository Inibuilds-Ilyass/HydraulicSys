import React, { createContext, useState } from "react";
import ECAMDisplay from "./Components/Display";
import Action from "./Components/Actions";
import Environement from "./Components/Environement";
import './App.css';

// Create the context
export const Context = createContext();

function App() {
    const [ACPower, setACPower] = useState(false);
    const [BluePump, setBluePump] = useState(false);
    const [YellowPump, setYellowPump] = useState(false);
    const [GreenPump, setGreenPump] = useState(false);
    const [ElecPump, setElecPump] = useState(false);
    const [PowerTransferUnit, setPowerTransferUnit] = useState(false);
    const [CargoDoor, setCargoDoor] = useState(false);

    
    
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
