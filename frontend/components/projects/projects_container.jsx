import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './projects';
import { requestAllUsersProjects, createAProject} from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        projects: state.entities.projects,
        userId: state.session.id,
        
});
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestAllUsersProjects: userid => dispatch(requestAllUsersProjects(userid)),
    createAProject: project => dispatch(createAProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);