import React from 'react';
import { Link } from 'react-router-dom';

const ProjectListItem = props => {
    return (
        <div>
            <Link to={`/projects/${props.project.id}/stories`} className="projectlistitemlink"> 
                <li key={props.project.id} >{props.projectName}</li> 
            </Link>
        </div>
    );
};

export default ProjectListItem;