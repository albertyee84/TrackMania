import React from 'react';
import { Link } from 'react-router-dom';

const ProjectListItemnavbar = props => {
    return (
        <Link className="projectlistitemlink" to={`/projects/${props.project.id}/stories`}> 
            <li key={props.project.id} className="navbarlistitem" >{props.projectName}</li> 
        </Link>

    );
};

export default ProjectListItemnavbar;