
import './App.css';

import HydraulicSYS from './Components/HydraulicSYS';
import Action from './Components/Actions';

function App() {
  return (
    <>
      <div className="App">
        <HydraulicSYS
          HydraulicSYSName = {"Green"}
          FluidQte={1.45} 
          FluidminQTE={0.25}
          Indication = {3000}
          ShutOff = {false}
        />
        
        <HydraulicSYS
          HydraulicSYSName = {"Blue"}
          FluidQte={1.45} 
          FluidminQTE={0.45}
          Indication = {3000}
          ShutOff = {false}
        />
        
        
        <HydraulicSYS
          HydraulicSYSName = {"Yellow"}
          FluidQte={1.45} 
          FluidminQTE={0.25}
          Indication = {3000}
          ShutOff = {false}
        />
      </div>
      
      <Action/>
    </>
  );
}

export default App;
