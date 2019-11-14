import React from 'react';
import { connect } from 'react-redux';
import StoryIndex from './story_index';
import { requestAllStories, createStory, updateStory, deleteStory } from '../../actions/story_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return({
        stories: Object.values(state.entities.story),
        projectId: parseInt(ownProps.match.params.project_id),
        requestorId: state.session.id,
        errors: state.errors.session.errors,
        // projectName: state.entities.projects[ownProps.match.params.project_id].project_name
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestAllStories: ()=> dispatch(requestAllStories()),
    createStory: (story)=> dispatch(createStory(story)),
    updateStory: (story)=> dispatch(updateStory(story)),
    deleteStory: (story)=> dispatch(deleteStory(story)),
    clearErrors: ()=> dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryIndex);