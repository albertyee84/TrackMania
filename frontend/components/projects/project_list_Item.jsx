import React from 'react';

class ProjectListItem extends React.Component{

    render() {
        return(
            <li key={this.props.key}>{this.props.projectName}</li>
        );
    }
}

export default ProjectListItem;