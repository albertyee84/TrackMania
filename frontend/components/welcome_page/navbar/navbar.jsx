import React from 'react';
import Navbardrowndown from './navbar_dropdown';
import { AuthRoute } from '../../../util/route_util';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {

    const display = currentUser ? (
        <div className="User-Info">
            <h3> Welcome {currentUser.username}</h3>
            <button className="btn" onClick={logout}>Log Out</button>
        </div>
    ) : "";

    const display2 = !currentUser ? (
        <div className="SignIn-LogIn">
            <div className='SignIn'>
                <button className="btn1" onClick={() => openModal('signup')}>Signup</button>
            </div>
            <div className='LogIn'>
                <button className="btn" onClick={() => openModal('login')}>Sign In</button>
            </div>
        </div>
    ) : "";

    return (
        
        <header className="nav-bar">
            <div className="logo-header">
                <Link to='/' className="Project-Name"><div className="projectname-beg">Track</div><div className="projectname-end">Mania</div></Link>
            </div>
            <div className="header-name">
                {display}
                <AuthRoute exact path ='/' component={Navbardrowndown} />
                {display2}
            </div>
        </header>
    );
};