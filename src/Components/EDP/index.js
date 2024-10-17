import "./index.css"

function EDP(props){

    // alert(props.Shut)
    return(
        <div className="square"
            style={{
                border: props.LowState ? '2px solid orange' : '2px solid green',
                position: 'relative', // Ensure inner elements are positioned relative to this container
            }}

        >

            <div className="line"
                style={{ 
                    // transform: props.Shut == true ? 'rotate(90deg) translate(-50%, -50%)' : 'rotate(0deg) translate(-50%, -50%)',
                    // top: '50%',
                    // left: '50%',
                    display: props.LowState == true ? 'none' : ' block'
                }}
            ></div>
            
            <p className="State"
                style={{ 
                    transform: props.Shut == true ? 'rotate(90deg) translate(-50%, -50%)' : 'rotate(0deg) translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    display: props.LowState == true ? 'block' : ' none '
                }}
            >
                {/* {props.Shut ? '2px solid green' : '2px solid orange'} */}
                LO
            </p>
        </div>
    )
}

export default EDP