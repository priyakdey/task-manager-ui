import React from "react";

function LoginFailedMessage() {
    return (
        <div className="container" style={{"margin": "10px"}}>
            <p className="alert-danger">Login  Failed. Please check the username and passsword..</p>
        </div>
    );
}

export default LoginFailedMessage;
