import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// import Root from './components/root';

//test functions--TO DELETE!!
import { login, logout, signup } from './actions/session_actions';
// import * as APIUtil from './util/session_api_util';
let store = configureStore();
window.getState = store.getState;
window.dispatch = store.dispatch;

window.logout = logout;
window.login = login;
window.signup = signup;
//end of TO DELETE

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // let preloadedState = undefined;
    // if (window.currentUser) {
    //     preloadedState = {
    //         session: {
    //             currentUser: window.currentUser
    //         }
    //     };
    // }
    // const store = createStore(preloadedState);
    // const store = createStore();

    ReactDOM.render(<div>Hi</div>, root);
});