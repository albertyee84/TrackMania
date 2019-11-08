import React from 'react';
import { connect } from 'react-redux';
import ProjectForm  from './project_form';
import { requestAllUsersProjects, createAProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        userId: state.session.id,

    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    createAProject: project => dispatch(createAProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);