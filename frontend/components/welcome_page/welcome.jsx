import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    // debugger;


    const display = currentUser ? (
        <div>
            <h3> Welcome {currentUser.username}
            </h3>
            <button onClick={logout}>Log Out</button>
        </div>
    ) :
        (
            <div className="SignIn-LogIn">
                <div className='SignIn'>
                    <Link className="btn" to='/signup'>Sign Up</Link>
                    </div>
                <div className='LogIn'>
                    <Link className="btn" to='/login'>Sign In</Link>
                </div>
            </div>
        );
    console.log(typeof display);
    return (
        <header className="nav-bar">
            <div className="header-name">
                {display}
            </div>
        </header>
    );
};