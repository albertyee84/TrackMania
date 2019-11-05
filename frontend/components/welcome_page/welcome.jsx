import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {

    const display = currentUser ? (
        <div>
            <h3> Welcome {currentUser.username}
            </h3>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : "";

    const display2 = !currentUser ? (
        <div className="SignIn-LogIn">
            <div className='SignIn'>
                <Link className="btn" to='/signup'>Sign Up</Link>
            </div>
            <div className='LogIn'>
                <Link className="btn" to='/login'>Sign In</Link>
            </div>
        </div>
    ) : "";

    return (
        <header className="nav-bar">
            <div className="header-name">
                {display}
                {display2}
            </div>
        </header>
    );
};