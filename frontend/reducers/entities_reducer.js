import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import { projectReducer } from './projects_reducer';
import { storyReducer } from './story_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    projects: projectReducer,
    story: storyReducer,
});

export default entitiesReducer;