import "./index.css"
import { useEffect } from "react";

function FireShutoffValve(props){


    return(
        <div class="circle">
            <div class="line LOW"
                style={{ 
                    // transform: props.Shut === true ? 'rotate(90deg)' : 'rotate(0deg)',
                    transform: props.Shut === true ? 'rotate(90deg) translate(-50%, -50%)' : 'rotate(0deg) translate(-50%, -50%)',
                    top: '50%', // Center vertically
                    left: '50%',
                }}
            ></div>
        </div>
    )
}

export default FireShutoffValve