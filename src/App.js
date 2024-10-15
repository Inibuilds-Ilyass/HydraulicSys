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
    const [YellowPumpBTN, setYellowPumpBTN] = useState(false);
    const [GreenPump, setGreenPump] = useState(false);
    const [ElecPump, setElecPump] = useState(false);
    const [CargoDoor, setCargoDoor] = useState(false);

    // Engine Values States
    
    const [GreenHydraulicPressure, setGreenHydraulicPressure] = useState({
        FluidQte : 1.45,
        FluidminQTE : 0.25,
        Indication : 0,
        ShutOff : false,
        LowState : true,
    })
    const [BlueHydraulicPressure, setBlueHydraulicPressure] = useState({
        FluidQte : 1.45,
        FluidminQTE : 0.25,
        Indication : 0,
        ShutOff : false,
        LowState : true,
    })
    const [YellowHydraulicPressure, setYellowHydraulicPressure] = useState({
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
            YellowPumpBTN,
            setYellowPumpBTN,

            GreenPump,
            setGreenPump,

            ElecPump,
            setElecPump,

            CargoDoor,
            setCargoDoor,

            // Engine Values
            GreenHydraulicPressure,
            setGreenHydraulicPressure,

            BlueHydraulicPressure,
            setBlueHydraulicPressure,
            
            YellowHydraulicPressure,
            setYellowHydraulicPressure,
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
