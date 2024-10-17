import "./index.css"
import { useEffect } from "react";

function FireShutoffValve(props){

    if(props.Render === true){
        return(
            <div className="circle">
                <div className="line LOW"
                    style={{ 
                        transform: props.Shut === true ? 'rotate(90deg) translate(-50%, -0%)' : 'rotate(0deg) translate(-50%, -0%)',
                        top: '50%',
                        left: '50%',
                    }}
                ></div>
            </div>
        )
    }
    if(props.Render === false){
        return(
            <>
                <div
                    style={{ 
                        width: "2px",
                        height: "5vh",
                        backgroundColor: "green",
                        margin: "0 auto",
                    }}
                ></div>
            </>
        )
    }
}

export default FireShutoffValve