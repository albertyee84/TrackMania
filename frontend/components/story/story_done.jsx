import React from 'react';
import StoryIndexItem from './story_index_item';

const StoryDone = props => {
    return (
        <div className="Done" onDrop={props.drop} onDragOver={props.allowDrop} id="div2">
            <div className="storycolheader">
                Done
                        </div>
            {
                props.doneboxStories.map(story =>
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
    );
}

export default StoryDone;