import React from 'react';

class ProjectListItem extends React.Component{

    render() {
        return(
            <li >{this.props.projectName}</li>
        );
    }
}
export default ProjectListItem;