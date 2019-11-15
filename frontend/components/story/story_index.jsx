import React from 'react';
import StoryIndexItem from './story_index_item';
import StoryForm from './story_index_form';
import StoryCurrent from './story_current';
import StoryIcebox from './story_icebox';
import StoryDone from './story_done';


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
            current: true,
            icebox: true,
            done: true,
            sidebartext: true,
        };
        this.drop = this.drop.bind(this);
        this.openForm = this.openForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.openForm1 = this.openForm1.bind(this);
        this.closeForm1 = this.closeForm1.bind(this);
        this.handleCurrent = this.handleCurrent.bind(this);
        this.handleIcebox = this.handleIcebox.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleHideText = this.handleHideText.bind(this);
    }

    handleHideText(){
        $(".sidebartext").toggle();
    }

    handleCurrent(){
        this.setState({
            current: !this.state.current
        });
    }

    handleIcebox(){
        this.setState({
            icebox: !this.state.icebox
        });
    }
    handleDone(){
        this.setState({
            done: !this.state.done
        });
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
        
        const current = this.state.current ? 
        ( <StoryCurrent 
            drop = {this.drop}
            allowDrop={this.allowDrop}
            openForm={this.openForm}
            errors={this.props.errors}
            formcurrent={this.state.formcurrent}
            createStory={createStory}
            updateStory={updateStory}
            deleteStory={deleteStory}
            projectId={this.props.projectId}
            requestorId={this.props.requestorId}
            clearErrors={clearErrors}
            closeForm={this.closeForm}
            currentStories={currentStories}
            drag={this.drag}
            />
        ): (<div />);

        const icebox = this.state.icebox ? (
            <StoryIcebox 
                drop={this.drop}
                allowDrop={this.allowDrop}
                openForm1={this.openForm1}
                errors={this.props.errors}
                formIcebox={this.state.formIcebox}
                createStory={createStory}
                updateStory={updateStory}
                deleteStory={deleteStory}
                projectId={this.props.projectId}
                requestorId={this.props.requestorId}
                clearErrors={clearErrors}
                closeForm1={this.closeForm1}
                iceboxStories={iceboxStories}
                drag={this.drag}
            />
            
        ) : (<div />);

        const done = this.state.done ? (
            <StoryDone 
                drop={this.drop}
                allowDrop={this.allowDrop}
                formIcebox={this.state.formIcebox}
                createStory={createStory}
                updateStory={updateStory}
                deleteStory={deleteStory}
                projectId={this.props.projectId}
                requestorId={this.props.requestorId}
                clearErrors={clearErrors}
                doneboxStories={doneboxStories}
                drag={this.drag}
            />
        ) : (<div />);
        const currentstyle = this.state.current ? { color: '#8ac7ff'} : {color: 'inherit'};
        const iceboxstyle = this.state.icebox ? { color: '#8ac7ff'} : {color: 'inherit'};
        const donestyle = this.state.done ? { color: '#8ac7ff'} : {color: 'inherit'};
        let banana = this.state.sidebartext ? { visibility: 'visibile' } : {visibility: 'hidden'};
        return(
            <div className="ProjectShowPage">
                <div className="ProjectShowPageContainer">
                    <div className="Sidepanel">

                        <i className="fa fa-bars" aria-hidden="true" onClick={this.handleHideText}/>
                        <div className="sidebarhideshow" onClick={this.handleCurrent} style={currentstyle}><i className="fa fa-list" aria-hidden="true"></i>
                           <div className="sidebartext">
                               Current
                               </div>
                            </div>
                        <div className="sidebarhideshow" onClick={this.handleIcebox} style={iceboxstyle}><i className="fa fa-snowflake-o" aria-hidden="true"></i>
                            <div className="sidebartext">
                                Icebox
                            </div>
                        </div>
                        <div className="sidebarhideshow" onClick={this.handleDone} style={donestyle}><i className="fa fa-check"></i>
                            <div className="sidebartext">
                                Done
                                </div>
                        </div>
                    </div>
                    {current}
                    {icebox}
                    {done}
                </div>
            </div>
        );
    }
}