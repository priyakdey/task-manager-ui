import React, { useState } from "react";

import data from "../../data/users.json";
import LoginFailedMessage from "./LoginFailedMessage";

function Login(props) {

    // Define states of the component
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginFailed, setLoginFailed] = useState(false);


    const onUsernameChange = event => {
        const username = event.target.value;
        setUsername(username);
    }

    const onPasswordChange = event => {
        const password = event.target.value;
        setPassword(password);
    }

    const attemptLogin = () => {
        const users = data.users.filter(user => user.username === username && user.password === password);
        if (users.length !== 0) {
            setLoginFailed(false);
            console.log(props.history.push("/tasks"));
        }
        else {
            setLoginFailed(true);
        }
    }

    return (
        <div className="container-fluid">
            <div className="container">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={username} onChange={onUsernameChange} />
            </div>
            <div className="container">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={password} onChange={onPasswordChange} />
            </div>
            <div className="container">
                <button className="btn btn-primary" onClick={attemptLogin}>Login</button>
            </div>
            {
                isLoginFailed && (
                    <div className="container">
                        <LoginFailedMessage />
                    </div>
                )
            }
        </div>
    );
}

export default Login;
