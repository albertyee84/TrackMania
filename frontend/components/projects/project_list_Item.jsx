import React from 'react';
import { ProtectedRoute } from '../../util/protected_util';
import StoryIndex  from '../story/story_index_container';
import { Link } from 'react-router-dom';

class ProjectListItem extends React.Component{

    render() {
        return(
            <div>
                <Link to={`/projects/${this.props.project.id}/stories`} className="projectlistitemlink"> <li key={this.props.project.id} >{this.props.projectName}</li> </Link>
            </div>
        );
    }
}
export default ProjectListItem;