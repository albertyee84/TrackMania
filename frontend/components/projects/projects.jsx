import React from 'react';
import ProjectListItem from './project_list_Item';

class ProjectForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.props.requestAllUsersProjects(this.props.userId);
    }

    render() {
        debugger;
        return (
            <div className="dashboard">
                <p>This is your dashboard</p>
                <ul>
                    {
                        Object.values(this.props.projects).map(project => <ProjectListItem 
                            project={project}
                            key={project.id}
                            projectName={project.project_name}/>)
                        }
                </ul>
            </div>
        );
    }
}

export default ProjectForm;