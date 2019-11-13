import React from 'react';
import StoryIndexItem from './story_index_item';
import StoryForm from './story_index_form';

export default class StoryIndex extends React.Component{
    constructor(props){
        super(props);
        this.drag = this.drag.bind(this);
        this.allowDrop = this.allowDrop.bind(this);
        this.drop = this.drop.bind(this);
        this.state={
            id: 100000000000,
            status: "current"
        };
        this.drop = this.drop.bind(this);
    }

    componentDidMount(){
        this.props.requestAllStories();
    }
    allowDrop(ev){
        ev.preventDefault();
    }

    drag(ev){
        ev.dataTransfer.setData("text", ev.target.id);
    }

    drop(ev){
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data)).then(

        
        this.setState({
            id: parseInt(data),
            status: ev.target.className,
        },
        ()=> this.props.updateStory(this.state))
        );
    }

    render(){
        const { createStory, updateStory, deleteStory} = this.props;
        let projectStories = this.props.stories.filter(story => story.project_id === this.props.projectId);
        let currentStories = projectStories.filter(story => story.status === "Current");
        let iceboxStories = projectStories.filter(story => story.status === "Icebox");

        return(
            <div className="ProjectShowPage">
                <div className="Current" onDrop={this.drop} onDragOver={this.allowDrop} id="div1">
                    <div className="storycolheader">
                        Current
                        <StoryForm
                            createStory={createStory}
                            updateStory={updateStory}
                            deleteStory={deleteStory}
                            projectId={this.props.projectId}
                            requestorId={this.props.requestorId} 
                        />
                    </div>
                    <div>
                        {this.props.errors}
                        <div>
                        {
                            projectStories.map(
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
                <div className="Icebox" onDrop={this.drop} onDragOver={this.allowDrop} id="div2">
                    <div className="storycolheader">
                        IceBox
                        <StoryForm
                            createStory={createStory}
                            updateStory={updateStory}
                            deleteStory={deleteStory}
                            projectId={this.props.projectId}
                            requestorId={this.props.requestorId}
                            status="Icebox"
                        />
                    </div>
                </div>
                <div className="Done" onDrop={this.drop} onDragOver={this.allowDrop} id="div2">
                    <div className="storycolheader">
                        Done
                    </div>
                </div>
            </div>
        );
    }
}