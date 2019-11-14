import React from 'react';

export default class StoryCurrent extends React.Component{

    render(){
        return(
            <div className="Current" onDrop={this.drop} onDragOver={this.allowDrop} id="div1">
                <div className="storycolheader">
                    Current
                            <div>
                        <div className="AddStoryFormIcon" onClick={this.openForm}><i className="fa fa-plus"></i> Add Story</div>
                    </div>
                </div>
                <div>
                    <div className="storyerrors">
                        {this.props.errors}
                    </div>
                    <div>
                        {
                            this.state.formcurrent ?
                                <div>
                                    <StoryForm
                                        createStory={createStory}
                                        updateStory={updateStory}
                                        deleteStory={deleteStory}
                                        projectId={this.props.projectId}
                                        requestorId={this.props.requestorId}
                                        clearErrors={clearErrors}
                                        status="Current"
                                    />
                                    <button onClick={this.closeForm}>Cancel</button>
                                </div>
                                :
                                <div></div>

                        }
                        {
                            currentStories.map(
                                story =>
                                    <StoryIndexItem
                                        story={story}
                                        key={story.id}
                                        createStory={createStory}
                                        updateStory={updateStory}
                                        deleteStory={deleteStory}
                                        projectId={this.props.projectId}
                                        requestorId={this.props.requestorId}
                                        draggable={true}
                                        drag={this.drag}
                                        drop={this.drop}
                                        allowDrop={this.allowDrop}
                                        id="drag1"
                                    />
                            )
                        }
                    </div>
                </div>
            </div>
        ) 
        );
    }
}