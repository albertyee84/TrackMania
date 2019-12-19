import React from 'react';
import { connect } from 'react-redux';
import Projects from './projects';
import { requestAllUsersProjects, createAProject, searchProject, updateProject } from '../../actions/project_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return ({
        projects: state.entities.projects,
        userId: state.session.id,
});
};

const mapDispatchToProps = (dispatch) => ({
    requestAllUsersProjects: project => dispatch(requestAllUsersProjects(project)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    createAProject: project => dispatch(createAProject(project)),
    searchProject: params => dispatch(searchProject(params)),
    updateProject: project => dispatch(updateProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);