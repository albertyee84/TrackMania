import React from 'react';
import ProjectListItem from './project_list_Item';
import ProjectFormCreation from './project_form';

class ProjectForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.props.requestAllUsersProjects(this.props.userId);
    }

    render() {
        return (
            <div className="dashboard">
                <p>This is your dashboard</p>
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
                <ProjectFormCreation 
                    userId={this.props.userId}
                    createAProject={this.props.createAProject}/>
            </div>
        );
    }
}

export default ProjectForm;