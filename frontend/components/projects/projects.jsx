import React from 'react';

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
                        Object.values(this.props.projects).map(project => <li>{project.project_name}</li>)
                        }
                </ul>
            </div>
        );
    }
}

export default ProjectForm;