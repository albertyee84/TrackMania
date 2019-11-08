import * as APIUtilProjects from '../util/project_util';

export const RECEIVE_ALL_USERS_PROJECTS = 'RECEIVE_ALL_USERS_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveAllUsersProjects = projects => {
    return({type: RECEIVE_ALL_USERS_PROJECTS,
        projects
    });
};

export const receiveProject = project => {
    return({
        type: RECEIVE_PROJECT,
        project
    });
};

export const requestAllUsersProjects = userId => dispatch =>
 APIUtilProjects.getProjects(userId)
.then(payload => dispatch(receiveAllUsersProjects(payload)));

export const createAProject = (project) => dispatch => 
    APIUtilProjects.createProject(project)
    .then(payload => dispatch(payload));