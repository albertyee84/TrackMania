import React from 'react';
import { AuthRoute } from '../../../util/route_util';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {

    return (

        <header className="loggedinnav-bar">
            <Link to='/projects' className="loggedinProject-Name"><div className="projectname-beg">Track</div><div className="projectname-end">Mania</div></Link>
            <h3 className="dropdown">{currentUser.username}
                <ul className="dropdown-content">
                    <button className="dropDownItem" onClick={logout}>Log Out</button>

                </ul>
            </h3>
        </header>
    );
};