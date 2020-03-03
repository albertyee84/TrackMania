import React from 'react';
import StoryIndexItem from './story_index_item';
import StoryForm from './story_index_form';

const StoryIcebox = props => {
    return (
        <div className="Icebox" onDrop={props.drop} onDragOver={props.allowDrop} id="div2">
            <div className="storycolheader">
                IceBox
                            <div>
                    <div className="AddStoryFormIcon" onClick={props.openForm1}><i className="fa fa-plus"></i> Add Story</div>
                </div>
            </div>
            <div>
                {
                    props.formIcebox ?
                        <div>
                            <StoryForm
                                createStory={props.createStory}
                                updateStory={props.updateStory}
                                deleteStory={props.deleteStory}
                                projectId={props.projectId}
                                requestorId={props.requestorId}
                                clearErrors={props.clearErrors}
                                status="Icebox"
                            />
                            <button onClick={props.closeForm1}>Cancel</button>
                        </div>
                        :
                        <div></div>

                }
                {
                    props.iceboxStories.map(
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
                                id="drag1"
                            />
                    )
                }
            </div>
        </div>
    );
}

export default StoryIcebox;