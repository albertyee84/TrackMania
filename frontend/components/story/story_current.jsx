import React from 'react';
import StoryIndexItem from './story_index_item';
import StoryForm from './story_index_form';

const StoryCurrent = props => {
    return (
        <div className="Current" onDrop={props.drop} onDragOver={props.allowDrop} id="div1">
            <div className="storycolheader">
                Current
                            <div>
                    <div className="AddStoryFormIcon" onClick={props.openForm}><i className="fa fa-plus"></i> Add Story</div>
                </div>
            </div>
            <div>
                <div className="storyerrors">
                    {props.errors}
                </div>
                <div>
                    {
                        props.formcurrent ?
                            <div>
                                <StoryForm
                                    createStory={props.createStory}
                                    updateStory={props.updateStory}
                                    deleteStory={props.deleteStory}
                                    projectId={props.projectId}
                                    requestorId={props.requestorId}
                                    clearErrors={props.clearErrors}
                                    closeForm={props.closeForm}
                                    status="Current"
                                />
                                <button onClick={props.closeForm}>Cancel</button>
                            </div>
                            :
                            <div></div>

                    }
                    {
                        props.currentStories.map(
                            story =>
                                <StoryIndexItem
                                    story={story}
                                    key={story.id}
                                    createStory={props.createStory}
                                    updateStory={props.updateStory}
                                    deleteStory={props.deleteStory}
                                    projectId={props.projectId}
                                    requestorId={props.requestorId}
                                    draggable={true}
                                    drag={props.drag}
                                    drop={props.drop}
                                    allowDrop={props.allowDrop}
                                    closeForm={props.closeForm}
                                    id="drag1"
                                />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default StoryCurrent;