import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { login, logout, signup } from './actions/session_actions';

// import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [Object.values(window.currentUser)[0].id]: Object.values(window.currentUser)[0] }
            },
            session: { id: Object.values(window.currentUser)[0].id }
        };
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<div>hi</div>, root);



    //test functions--TO DELETE!!
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.logout = logout;
    window.login = login;
    window.signup = signup;
//end of TO DELETE
});