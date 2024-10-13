
import './App.css';

import { useState, useEffect } from 'react';
import React from 'react';

import Action from './Components/Actions';
import Environement from './Components/Environement';
import ECAMDisplay from './Components/Display';


export const Context = React.createContext()

function App() {

  
  // localStorage.setItem('ACPower', false)
  // localStorage.setItem('ElecPump', false)
  // localStorage.setItem('CargoDoor', false)


  const [ACPower, setACPower] = useState(false);
  const [BlueElecPump, setBlueElecPump] = useState(false);
  const [CargoDoor, setCargoDoor] = useState(false);
  

  const renderContent = () => {
    return (
        <Context.Provider value={[ACPower, setACPower,BlueElecPump, setBlueElecPump]}>
            <div className="App">
                <ECAMDisplay />
                <Action />
                <Environement />
            </div>
        </Context.Provider>
        
    );
};

return renderContent(); // Call the render function
}

export default App;
