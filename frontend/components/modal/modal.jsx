import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../Login/login_form_container';
import SignupFormContainer from '../Login/sign_up_form_container';
import ProjectFormContainer from '../../components/projects/project_form_container';
import { clearErrors } from '../../actions/session_actions';

function Modal({ modal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'createproject':
            component = <ProjectFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal(), dispatch(clearErrors()))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);