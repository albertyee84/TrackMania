import React from 'react';
import { AuthRoute } from '../../../util/route_util';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {

    const display = currentUser ? (
        <div className="User-Info">
            <h3>{currentUser.username}</h3>
            <button className="btn" onClick={logout}>Log Out</button>
        </div>
    ) : "";

    return (

        <header className="loggedinnav-bar">
            <div className="loggedinlogo-header">
                <Link to='/projects' className="loggedinProject-Name"><div className="projectname-beg">Track</div><div className="projectname-end">Mania</div></Link>
            </div>
            <div className="loggedinheader-name">
                {display}
            </div>
        </header>
    );
};