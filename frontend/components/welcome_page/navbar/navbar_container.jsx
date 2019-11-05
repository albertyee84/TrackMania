import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import navbar from './navbar';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(navbar);