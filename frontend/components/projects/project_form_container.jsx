import React from 'react';
import { connect } from 'react-redux';
import ProjectForm  from './project_form';
import { requestAllUsersProjects, createAProject } from '../../actions/project_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        userId: state.session.id,
        currentUser: state.entities.users[state.session.id].username,
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    createAProject: project => dispatch(createAProject(project)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);