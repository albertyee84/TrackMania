import React from 'react';

class ProjectListItemnavbar extends React.Component{

    render() {
        return(
                <div className="navbarlistitem">{this.props.projectName}</div>
        );
    }
}
export default ProjectListItemnavbar;