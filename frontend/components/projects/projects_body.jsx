import React from 'react';
import ProjectListItem from './project_list_Item';

export default class ProjectsBody extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.userId,
            search: "",
            archived: false,
            all: false,
            id: 100000000000,
        };
        
    }

    handleArchiveProject(projectId, archived) {
        let newStatus;
        archived ? newStatus = false : newStatus = true;
        this.setState({
            id: projectId,
            archived: newStatus,
        },
            () => {
                this.props.updateProject(this.state)
                    .then(() => {
                        this.setState({ archived: archived },
                            () => {
                                this.props.requestAllUsersProjects(this.state);
                            });
                    });
            });
    }

    render(){
        let archiveword;
        let projectrender;
        let projectslist = Object.values(this.props.projects);
        this.state.archived ? archiveword = "UnArchive" : archiveword = "Archive";
        !this.state.all ? projectrender = projectslist.slice(0, 4) : projectrender = projectslist;

        return(
            <div className="projectpanelbody">
                <div className="projectpanelheader"><i className="fa fa-bars"></i>My Projects
                                <div className="projectpanelseparator">|</div>
                    {Object.values(this.props.projects).length}
                </div>
                <ul className="projecttiles">
                    {
                        projectrender.map(project =>
                            <div key={project.id} className="projecttilebox">
                                <div className="projecttileheader">
                                    <div onClick={() => this.handleArchiveProject(project.id, project.archived)}><i className="fa fa-archive dropdown">
                                        <div className="arrow-down"></div>
                                        <ul className="dropdown-contentarchive">
                                            {archiveword}
                                        </ul>
                                    </i></div>
                                    <ProjectListItem
                                        project={project}
                                        key={project.id}
                                        projectName={project.project_name}
                                        userId={this.props.userId}
                                    />
                                </div>
                                <div className="projecttilebody"></div>
                            </div>
                        )
                    }
                </ul>
            </div>
        );
    }
}