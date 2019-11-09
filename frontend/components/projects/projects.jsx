import React from 'react';
import ProjectListItem from './project_list_Item';

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.props.requestAllUsersProjects(this.props.userId);
    }

    render() {
        const openModal = this.props.openModal;
        return (
            <div className="dashboardbody">
                <div className="buttonrow">
                    <div className="buttoncontainer">
                        <div className='dashboardtabcontainer'>
                            <div className="dashboardtab">Projects</div>
                        </div>
                        <button className="Create-Project-btn" onClick={() => openModal('createproject')}>Create Project</button>

                    </div>
                </div>
                <div className="dashboard">
                    <div className="searchbar">
                        Placeholder for search bar
                    </div>
                    <div className="projectpanelbody">
                        <div className="projectpanelheader"><i class="fa fa-bars"></i>My Projects <div className="projectpanelseparator">|</div> {Object.values(this.props.projects).length}</div>
                        <div>
                            <ul>
                                {
                                    Object.values(this.props.projects).map(project => <ProjectListItem 
                                        project={project}
                                        key={project.id}
                                        projectName={project.project_name}
                                        userId={this.props.userId}
                                        />)
                                    }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;