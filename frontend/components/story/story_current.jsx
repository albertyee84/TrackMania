import React from 'react';
import StoryIndexItem from './story_index_item';
import StoryForm from './story_index_form';

export default class StoryCurrent extends React.Component{

    render(){
        return(
            <div className="Current" onDrop={this.props.drop} onDragOver={this.props.allowDrop} id="div1">
                <div className="storycolheader">
                    Current
                            <div>
                        <div className="AddStoryFormIcon" onClick={this.props.openForm}><i className="fa fa-plus"></i> Add Story</div>
                    </div>
                </div>
                <div>
                    <div className="storyerrors">
                        {this.props.errors}
                    </div>
                    <div>
                        {
                            this.props.formcurrent ?
                                <div>
                                    <StoryForm
                                        createStory={this.props.createStory}
                                        updateStory={this.props.updateStory}
                                        deleteStory={this.props.deleteStory}
                                        projectId={this.props.projectId}
                                        requestorId={this.props.requestorId}
                                        clearErrors={this.props.clearErrors}
                                        status="Current"
                                    />
                                    <button onClick={this.props.closeForm}>Cancel</button>
                                </div>
                                :
                                <div></div>

                        }
                        {
                            this.props.currentStories.map(
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
            </div>
        );
    }
}