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
            status: "Current",
            formcurrent: false,
            formIcebox: false,
        };
        this.drop = this.drop.bind(this);
        this.openForm = this.openForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.openForm1 = this.openForm1.bind(this);
        this.closeForm1 = this.closeForm1.bind(this);
    }

    openForm() {
        this.setState({
            formcurrent: true
        });
        this.props.clearErrors();
    }

    closeForm() {
        this.setState({
            formcurrent: false
        });
    }
    openForm1() {
        this.setState({
            formIcebox: true
        });
        this.props.clearErrors();
    }

    closeForm1() {
        this.setState({
            formIcebox: false
        });
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
        let data = ev.dataTransfer.getData("text");
        // ev.target.appendChild(document.getElementById(data));

        this.setState({
            id: parseInt(data),
            status: ev.target.className,
        },
        ()=> this.props.updateStory(this.state))
        ;
    }

    render(){
        const { createStory, updateStory, deleteStory, clearErrors } = this.props;
        let projectStories = this.props.stories.filter(story => story.project_id === this.props.projectId);
        let currentStories = projectStories.filter(story => story.status === "Current");
        let iceboxStories = projectStories.filter(story => story.status === "Icebox");
        let doneboxStories = projectStories.filter(story => story.status === "Done");
        return(
            <div className="ProjectShowPage">
                <div className="ProjectShowPageContainer">
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
                                this.state.formcurrent?
                                <div>
                                    <StoryForm
                                        createStory={createStory}
                                        updateStory={updateStory}
                                        deleteStory={deleteStory}
                                        projectId={this.props.projectId}
                                        requestorId={this.props.requestorId}
                                        clearErrors={clearErrors}
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
                    <div className="Icebox" onDrop={this.drop} onDragOver={this.allowDrop} id="div2">
                        <div className="storycolheader">
                            IceBox
                            <div>
                                <div className="AddStoryFormIcon" onClick={this.openForm1}><i className="fa fa-plus"></i> Add Story</div>
                            </div>
                        </div>
                        <div>
                            {
                                this.state.formIcebox ?
                                    <div>
                                        <StoryForm
                                            createStory={createStory}
                                            updateStory={updateStory}
                                            deleteStory={deleteStory}
                                            projectId={this.props.projectId}
                                            requestorId={this.props.requestorId}
                                            clearErrors={clearErrors}
                                        />
                                        <button onClick={this.closeForm1}>Cancel</button>
                                    </div>
                                    :
                                    <div></div>

                            }
                            {
                                iceboxStories.map(
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
                    <div className="Done" onDrop={this.drop} onDragOver={this.allowDrop} id="div2">
                        <div className="storycolheader">
                            Done
                        </div>
                        {
                            doneboxStories.map(story =>
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
        );
    }
}