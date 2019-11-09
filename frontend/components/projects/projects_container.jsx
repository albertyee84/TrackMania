import React from 'react';
import { connect } from 'react-redux';
import Projects from './projects';
import { requestAllUsersProjects, createAProject, searchProject } from '../../actions/project_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        projects: state.entities.projects,
        userId: state.session.id,
});
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestAllUsersProjects: userid => dispatch(requestAllUsersProjects(userid)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    createAProject: project => dispatch(createAProject(project)),
    searchProject: params => dispatch(searchProject(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);