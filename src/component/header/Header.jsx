import React from "react";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div>
                    <a href="/" className="navbar-brand">Task Manager</a>
                </div>
                <ul className="navbar-nav navbar-collapse">
                    <li><a className="nav-link" href="/tasks">Task</a></li>
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li><a className="nav-link" href="/login">Login</a></li>
                    <li><a className="nav-link" href="/logout">Logout</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
