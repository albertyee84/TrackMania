import React from 'react';
import ProjectListItem from './project_list_Item';
import ProjectTiles from './projects_nonfav';

export default class ProjectsBody extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.state;
    }

    // handleArchiveProject(projectId, archived) {
    //     let newStatus;
    //     archived ? newStatus = false : newStatus = true;
    //     this.setState({
    //         id: projectId,
    //         archived: newStatus,
    //         favorite: false
    //     },
    //         () => {
    //             this.props.updateProject(this.state)
    //                 .then(() => {
    //                     this.setState({ archived: archived },
    //                         () => {
    //                             this.props.requestAllUsersProjects(this.state);
    //                         });
    //                 });
    //         });
    // }

    render(){
        let archiveword;
        let projectslist = Object.values(this.props.projects);
        let projectlistnonfav = [];
        let projectlistfav = [];
        projectslist.forEach(project => {
            project.favorite ? projectlistfav.push(project) : projectlistnonfav.push(project);
        });
        this.state.archived ? archiveword = "UnArchive" : archiveword = "Archive";

        !this.props.all ? projectlistnonfav = projectlistnonfav.slice(0, 4) : projectlistnonfav;

        const displayfav = projectlistfav.length > 0 ? (<div>My Favorites
            <ProjectTiles
                projectrendernonfav={projectlistfav}
                state={this.state}
                updateProject={this.props.updateProject}
                requestAllUsersProjects={this.props.requestAllUsersProjects}
                archiveword={archiveword}
                userId={this.props.userId}
            />
        </div> ) : "";

        return(
            <div className="projectpanelbody">
                {displayfav}
                <div className="projectpanelheader"><i className="fa fa-bars"></i>My Projects
                                <div className="projectpanelseparator">|</div>
                    {Object.values(this.props.projects).length - projectlistfav.length}
                </div>
                <ProjectTiles 
                    projectrendernonfav={projectlistnonfav}
                    state={this.state}
                    updateProject={this.props.updateProject}
                    requestAllUsersProjects={this.props.requestAllUsersProjects}
                    archiveword={archiveword}
                    userId={this.props.userId}
                />
            </div>
        );
    }
}