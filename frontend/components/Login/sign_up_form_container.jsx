import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session.errors,
    formType: 'Sign Up',
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: formUser => dispatch(signup(formUser)),
    otherForm: (
        <div className="cont" onClick={() => dispatch(openModal('login'))}>
            Have an account? Sign In
      </div>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);