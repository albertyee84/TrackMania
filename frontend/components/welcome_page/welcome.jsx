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
            <div>
                <Link className="btn" to='/signup'>Sign Up</Link>
                <br />
                <Link className="btn" to='/login'>Log In</Link>
            </div>
        );
    console.log(typeof display);
    return (
        <header className="nav-bar">
            <div>
                {display}
            </div>
        </header>
    );
};