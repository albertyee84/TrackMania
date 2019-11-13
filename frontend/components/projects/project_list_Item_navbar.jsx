import React from 'react';
import { Link } from 'react-router-dom';

class ProjectListItemnavbar extends React.Component{

    render() {
        return(
            <Link className="projectlistitemlink" to={`/projects/${this.props.project.id}/stories`}> <li key={this.props.project.id} className="navbarlistitem" >{this.props.projectName}</li> </Link>
                
        );
    }
}
export default ProjectListItemnavbar;