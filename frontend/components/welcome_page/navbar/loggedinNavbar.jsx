import React from 'react';
import { AuthRoute } from '../../../util/route_util';
import { Link } from 'react-router-dom';
import clickDropDown  from '../../../util/dropdownclick_util';
import ProjectListItem from '../../projects/project_list_Item';


export default ({ currentUser, logout, openModal, projects, userId }) => {
    return (

        <header className="loggedinnav-bar">
            <h3 className="dropdown" onClick={() => clickDropDown("clickDropDown")}>
                <div className="logo-logged-in">
                    TrackMania<div className="arrow-down"></div>
                </div>
                <ul className="dropdown-content-logged-in" id="clickDropDown">
                    <div className="colorchange">
                        <button className="Create-Project-btn" onClick={() => openModal('createproject')}>Create Project</button>
                        {
                            Object.values(projects).map(project => <ProjectListItem
                                project={project}
                                key={project.id}
                                projectName={project.project_name}
                                userId={userId}
                            />)
                        }

                    </div>
                </ul>
            </h3>
            <h3 className="dropdown" onClick={() => clickDropDown("clickDropDown2")}>
                <div className="logo-logged-in">
                    {currentUser.username.toUpperCase()}<div className="arrow-down"></div>
                </div>
                <ul className="dropdown-content1-logged-in" id="clickDropDown2">
                    <button className="dropDownItem" onClick={logout}>Log Out</button>

                </ul>
            </h3>
        </header>
    );
};