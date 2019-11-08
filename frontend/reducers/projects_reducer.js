import { RECEIVE_ALL_USERS_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';

export const projectReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_ALL_USERS_PROJECTS:
            return action.projects;
        case RECEIVE_PROJECT:
            return Object.assign({}, state, action.project);
        default:
            return state;
    }
};