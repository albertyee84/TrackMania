import React from 'react';
import StoryIndexItem from './story_index_item';
import StoryForm from './story_index_form';

export default class StoryIcebox extends React.Component {

render(){
    return(
        <div className="Icebox" onDrop={this.props.drop} onDragOver={this.props.allowDrop} id="div2">
            <div className="storycolheader">
                IceBox
                            <div>
                    <div className="AddStoryFormIcon" onClick={this.props.openForm1}><i className="fa fa-plus"></i> Add Story</div>
                </div>
            </div>
            <div>
                {
                    this.props.formIcebox ?
                        <div>
                            <StoryForm
                                createStory={this.props.createStory}
                                updateStory={this.props.updateStory}
                                deleteStory={this.props.deleteStory}
                                projectId={this.props.projectId}
                                requestorId={this.props.requestorId}
                                clearErrors={this.props.clearErrors}
                                status="Icebox"
                            />
                            <button onClick={this.props.closeForm1}>Cancel</button>
                        </div>
                        :
                        <div></div>

                }
                {
                    this.props.iceboxStories.map(
                        story =>
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
        </div>
    );
    }
}