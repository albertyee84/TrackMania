import React from 'react';
import StoryIndexItem from './story_index_item';
import StoryForm from './story_index_form';

export default class StoryDone extends React.Component {

    render(){
        return(
            <div className="Done" onDrop={this.props.drop} onDragOver={this.props.allowDrop} id="div2">
                <div className="storycolheader">
                    Done
                        </div>
                {
                    this.props.doneboxStories.map(story =>
                        <StoryIndexItem
                            story={story}
                            key={story.id}
                            createStory={this.props.createStory}
                            updateStory={this.props.updateStory}
                            deleteStory={this.props.deleteStory}
                            projectId={this.props.projectId}
                            requestorId={this.props.requestorId}
                            draggable={true}
                            drag={this.props.drag}
                            drop={this.props.drop}
                            allowDrop={this.props.allowDrop}
                            id="drag1"
                        />
                    )
                }
            </div>
        )
    }
}