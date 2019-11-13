import { RECEIVE_ALL_STORIES, RECEIVE_STORY, REMOVE_STORY} from '../actions/story_actions';

export const storyReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_STORIES:
            return action.stories;
        case RECEIVE_STORY:
            return Object.assign({}, state, action.story);
        case REMOVE_STORY:
            let nextState = Object.assign({}, state);
            delete nextState[action.story.id];
            return nextState;
        default:
            return state;
    }
};