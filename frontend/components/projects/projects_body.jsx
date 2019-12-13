import React from 'react';
import ProjectTiles from './projects_nonfav';

const ProjectsBody = props => {
    let state = props.state;
    let archiveword;
    let projectslist = Object.values(props.projects);
    let projectlistnonfav = [];
    let projectlistfav = [];

    projectslist.forEach(project => {
        project.favorite ? projectlistfav.push(project) : projectlistnonfav.push(project);
    });
    state.archived ? archiveword = "UnArchive" : archiveword = "Archive";

    !props.all ? projectlistnonfav = projectlistnonfav.slice(0, 4) : projectlistnonfav;

    const displayfav = projectlistfav.length > 0 ? (<div>My Favorites
        <ProjectTiles
            projectrendernonfav={projectlistfav}
            state={state}
            updateProject={props.updateProject}
            requestAllUsersProjects={props.requestAllUsersProjects}
            archiveword={archiveword}
            userId={props.userId}
        />
    </div>) : "";

    return (
        <div className="projectpanelbody">
            {displayfav}
            <div className="projectpanelheader">
                <i className="fa fa-bars"></i>My Projects
                <div className="projectpanelseparator">
                 |
                </div>
                {Object.values(props.projects).length - projectlistfav.length}
            </div>
            <ProjectTiles
                projectrendernonfav={projectlistnonfav}
                state={state}
                updateProject={props.updateProject}
                requestAllUsersProjects={props.requestAllUsersProjects}
                archiveword={archiveword}
                userId={props.userId}
            />
        </div>
    );
};

export default ProjectsBody;