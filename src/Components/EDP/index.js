import "./index.css"

function EDP(props){
    
    return(
        <div class="square">
            <div class="line"
                style={{ 
                    // transform: props.Shut === true ? 'rotate(90deg)' : 'rotate(0deg)',
                    transform: props.Shut == true ? 'rotate(90deg) translate(-50%, -50%)' : 'rotate(0deg) translate(-50%, -50%)',
                    top: '50%', // Center vertically
                    left: '50%',
                    display: props.LowState == true ? 'none' : ' block'
                }}
            ></div>
            
            <p class="State"
                style={{ 
                    // transform: props.Shut === true ? 'rotate(90deg)' : 'rotate(0deg)',
                    transform: props.Shut == true ? 'rotate(90deg) translate(-50%, -50%)' : 'rotate(0deg) translate(-50%, -50%)',
                    top: '50%', // Center vertically
                    left: '50%',
                    display: props.LowState == true ? 'block' : ' none '
                }}
            >
                LO
            </p>
        </div>
    )
}

export default EDP