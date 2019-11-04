import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

export default (state={}, action) => {

    switch (action.type){
        case RECEIVE_CURRENT_USER:
            console.log(action.currentUser);
            return action.currentUser;
        default:
            return state;
    }
};