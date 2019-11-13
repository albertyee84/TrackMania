import React from 'react';
import ProjectListItem from './project_list_Item';

export default class Projectsnonfav extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.state;
    }

    handleArchiveProject(projectId, archived) {
        let newStatus;
        archived ? newStatus = false : newStatus = true;
        this.setState({
            id: projectId,
            archived: newStatus,
            favorite: false,
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
    handleFavorite(projectId, favorite) {
        let newStatus;
        favorite ? newStatus = false : newStatus = true;
        this.setState({
            id: projectId,
            favorite: newStatus,
        },
            () => {
                this.props.updateProject(this.state)
                    .then(() => { this.props.requestAllUsersProjects(this.state);
                    });
            });
    }

    render(){
        return(
            <ul className="projecttiles">
                {
                    this.props.projectrendernonfav.map(project =>
                        <div key={project.id} className="projecttilebox">
                            <div className="projecttileheader">
                                <div className="archive-title">
                                    <div onClick={() => this.handleArchiveProject(project.id, project.archived)}><i className="fa fa-archive dropdown">
                                        <ul className="dropdown-contentarchive">
                                            {this.props.archiveword}
                                        </ul>
                                    </i>
                                    </div>
                                    <ProjectListItem
                                        project={project}
                                        key={project.id}
                                        projectName={project.project_name}
                                        userId={this.props.userId}
                                    />
                                </div>
                                <div className="projects-icons">
                                    {
                                        !Object.values(this.props.projectrendernonfav)[0].archived ? <div onClick={() => this.handleFavorite(project.id, project.favorite)}>
                                            <i className="fa fa-heart dropdown">
                                                <ul className="dropdown-contentarchive">
                                                    <div className="favoritedropdown">
                                                        { !project.favorite ? "Add to Favorites" : "Remove from Favorites" }
                                                    </div>
                                                </ul>
                                            </i>
                                        </div> : ""
                                    }
                                    <i className="fa fa-cog" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="projecttilebody"></div>
                        </div>
                    )
                }
            </ul>
        );
    }
}