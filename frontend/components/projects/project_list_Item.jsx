import React from 'react';

class ProjectListItem extends React.Component{

    render() {
        return(
            <li key={this.props.project.id} >{this.props.projectName}</li>
        );
    }
}
export default ProjectListItem;