import React from 'react';
import { connect } from 'react-redux';
import StoryIndex from './story_index';
import { requestAllStories, createStory, updateStory, deleteStory } from '../../actions/story_actions';

const mapStateToProps = (state, ownProps) => {
    return({
        stories: Object.values(state.entities.story),
        projectId: parseInt(ownProps.match.params.project_id),
        requestorId: state.session.id,
        errors: state.errors.session.errors,
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestAllStories: ()=> dispatch(requestAllStories()),
    createStory: (story)=> dispatch(createStory(story)),
    updateStory: (story)=> dispatch(updateStory(story)),
    deleteStory: (story)=> dispatch(deleteStory(story)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryIndex);