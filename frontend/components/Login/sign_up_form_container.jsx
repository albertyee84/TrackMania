import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session.errors,
    formType: 'Sign Up',
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: formUser => dispatch(signup(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);