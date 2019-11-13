import * as APIUtilStories from '../util/story_util';

export const RECEIVE_ALL_STORIES = "RECEIVE_ALL_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const REMOVE_STORY = "REMOVE_STORY";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveAllStories = stories => {
    return({
        type: RECEIVE_ALL_STORIES,
        stories
    });
};

const receiveStory = story => {
    return({
        type: RECEIVE_STORY,
        story
    });
};

const removeStory = story => {
    return({
        type: REMOVE_STORY,
        story
    });
};

const receiveErrors = errors => {
    return ({
        type: RECEIVE_ERRORS,
        errors: errors.responseJSON
    });
};

export const requestAllStories = () => dispatch => 
    APIUtilStories.getStories( )
        .then(stories => dispatch(receiveAllStories(stories)),
        errors => dispatch(receiveErrors(errors))
);

export const createStory = story => dispatch => 
    APIUtilStories.createStory(story)
        .then(story => dispatch(receiveStory(story)),
        errors => dispatch(receiveErrors(errors))
);


export const updateStory = story => dispatch =>
    APIUtilStories.updateStory(story)
        .then(story => dispatch(receiveStory(story)),
        errors => dispatch(receiveErrors(errors))
);

export const deleteStory = story => dispatch =>
    APIUtilStories.deleteStory(story)
        .then(story => dispatch(removeStory(story)),
            errors => dispatch(receiveErrors(errors))
);