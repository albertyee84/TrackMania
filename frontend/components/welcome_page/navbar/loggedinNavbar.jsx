import React from 'react';
import { AuthRoute } from '../../../util/route_util';
import { Link } from 'react-router-dom';
import clickDropDown  from '../../../util/dropdownclick_util';
import ProjectListItemnavbar from '../../projects/project_list_Item_navbar';


export default ({ currentUser, logout, openModal, projects, userId }) => {
    let projectlist = Object.values(projects).slice(0,6);
    return (
        <header className="loggedinnav-bar">
            <div>
                <h3 className="dropdown" onClick={() => clickDropDown("clickDropDown")}>
                    <div className="logo-logged-in">
                        TrackMania<div className="arrow-down"></div>
                    </div>
                    <ul className="dropdown-content-logged-in" id="clickDropDown">
                        <div className="colorchange">
                            <div className="navbarlistheader">Projects</div>
                            <div className="navbarlistitem" onClick={() => openModal('createproject')}>Create Project</div>
                            {
                                projectlist.map((project, idx) => <ProjectListItemnavbar
                                    project={project}
                                    key={project.id + idx}
                                    projectName={project.project_name}
                                    userId={userId}
                                />)
                            }
                            <div className="navbarlistfooterwrapper">
                                <Link to='/projects' className="navbarlistfooter">Dashboard </Link>
                            </div>
                        </div>
                    </ul>
                </h3>
            </div>
            <h3 className="dropdown" onClick={() => clickDropDown("clickDropDown2")}>
                <div className="logo-logged-in">
                    {currentUser.username.toUpperCase()}<div className="arrow-down"></div>
                </div>
                <ul className="dropdown-content1-logged-in" id="clickDropDown2">
                    <button className="dropDownItem1" onClick={logout}>Log Out</button>

                </ul>
            </h3>
        </header>
    );
};