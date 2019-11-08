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
            <div className="dashboard">
                <button className="Create-Project-btn" onClick={() => openModal('createproject')}>Create Project</button>
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
        );
    }
}

export default Projects;