import ExtPwr from "./ExtPwr"
import BluePumpComponent from "./BluePump";
import YellowPumpComponent from "./YellowPump";
import GreenPumpComponent from "./GreenPump";
import ElectricPump from "./ElectricPump";
import PTU from "./PTU";
import UseAcc from "./UseAcc";


import "./index.css"

function Action(props){


    return(
        <div className="Action">
            <div className="Electricity">
                <ExtPwr
                />
            </div>
            
            <div className="Pumps">
                <GreenPumpComponent/>
                <BluePumpComponent/>
                <YellowPumpComponent/>
                <ElectricPump/>
                <PTU/>
            </div>

            
            <div className="Do">
                <UseAcc/>
            </div>
        </div>
    )
}

export default Action