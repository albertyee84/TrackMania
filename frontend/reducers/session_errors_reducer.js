import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ERRORS:
            return Object.assign({}, state, {errors: action.errors});
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_ERRORS:
            let priorState = Object.assign({}, state);
            delete priorState.errors;
            return {};
        default:
            return state;
    }
};