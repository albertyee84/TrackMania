import React from 'react';
import { AuthRoute } from '../../../util/route_util';
import { Link } from 'react-router-dom';
import clickDropDown  from '../../../util/dropdownclick_util';

export default ({ currentUser, logout }) => {

    return (

        <header className="loggedinnav-bar">
            <h3 className="dropdown" onClick={() => clickDropDown("clickDropDown")}>
                <div className="logo-logged-in">
                    TrackMania<div class="arrow-down"></div>
                </div>
                <ul className="dropdown-content-logged-in" id="clickDropDown">
                    <p className="dd-list-item">list one</p>
                    <p className="dd-list-item">list two</p>
                    <p className="dd-list-item">list three</p>
                </ul>
            </h3>
            <h3 className="dropdown" onClick={() => clickDropDown("clickDropDown2")}>
                <div className="logo-logged-in">
                    {currentUser.username.toUpperCase()}<div class="arrow-down"></div>
                </div>
                <ul className="dropdown-content-logged-in" id="clickDropDown2">
                    <button className="dropDownItem" onClick={logout}>Log Out</button>

                </ul>
            </h3>
        </header>
    );
};