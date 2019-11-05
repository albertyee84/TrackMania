import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session.errors,
    formType: 'Sign In',
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: formUser => dispatch(login(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);