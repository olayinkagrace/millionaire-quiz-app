import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Start({setUserName}) {
    const inputRef = React.useRef()
function handleClick(params) {
    inputRef.current.value && setUserName(inputRef.current.value) 
}

    return(
        <div className="start-game text-center">
            <input type="text" placeholder="Enter Your Name" className="form-control text-secondary fw-bold" ref={inputRef} />
            <br></br>
            <button type="submit" className="btn btn-light fw-bold px-3" onClick={handleClick}>Start</button>
        </div>
    )
}

export default Start