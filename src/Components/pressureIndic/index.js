import "./index.css"

function PressureIndication(props){
    return(
        <div className="PressIndicationContainer">
            <div className="Arrow"></div>
            <div className="PressIndication"><p>{props.Indication}</p></div>
            <div className="Line"></div>
        </div>
    )
}

export default PressureIndication