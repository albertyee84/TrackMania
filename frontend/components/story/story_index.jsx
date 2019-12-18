import React, { useState, useEffect } from 'react';
import StoryCurrent from './story_current';
import StoryIcebox from './story_icebox';
import StoryDone from './story_done';

const StoryIndex = props => {
    let [id, setId] = useState(1000000000000)
    let [status, setStatus] = useState("Current")
    let [formcurrent, setFormcurrent] = useState(false)
    let [formIcebox, setFormIcebox] = useState(false)
    let [current, setCurrent] = useState(true)
    let [icebox, setIcebox] = useState(true)
    let [done, setDone] = useState(true)
    let [sidebartext, setSidebartext] = useState(true)

    useEffect(() => {
        props.requestAllStories();
    }, [])

    const handleHideText = () => {
        $(".sidebartext").toggle();
    }

    const handleCurrent = () => {
        setCurrent(!current)
    }

    const handleIcebox = () => {
        setIcebox(!icebox)
    }

    const handleDone = () => {
        setDone(!done)
    }

    const openForm = () => {
        setFormcurrent(true);
        props.clearErrors();
    }

    const closeForm = () => {
        setFormcurrent(false);
    }

    const openForm1 = () => {
        setFormIcebox(true);
        props.clearErrors();
    }

    const closeForm1 = () => {
        setFormIcebox(false);
    }

    const allowDrop = ev => {
        ev.preventDefault();
    }

    const drag = ev => {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    
    const drop = ev => {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        setId(parseInt(data));
        setStatus(ev.target.className)
        
    };
    useEffect(()=>{
        props.updateStory({id: id, status: status, formcurrent: formcurrent, current: current, icebox: icebox, done: done, sidebartext: sidebartext});
    });

    const { createStory, updateStory, deleteStory, clearErrors } = props;
    let projectStories = props.stories.filter(story => story.project_id === props.projectId);
    let currentStories = projectStories.filter(story => story.status === "Current");
    let iceboxStories = projectStories.filter(story => story.status === "Icebox");
    let doneboxStories = projectStories.filter(story => story.status === "Done");

    const current1 = current ?
        (<StoryCurrent
            drop={drop}
            allowDrop={allowDrop}
            openForm={openForm}
            errors={props.errors}
            formcurrent={formcurrent}
            createStory={createStory}
            updateStory={updateStory}
            deleteStory={deleteStory}
            projectId={props.projectId}
            requestorId={props.requestorId}
            clearErrors={clearErrors}
            closeForm={closeForm}
            currentStories={currentStories}
            drag={drag}
        />
        ) : (<div />);

    const icebox1 = icebox ? (
        <StoryIcebox
            drop={drop}
            allowDrop={allowDrop}
            openForm1={openForm1}
            errors={props.errors}
            formIcebox={formIcebox}
            createStory={createStory}
            updateStory={updateStory}
            deleteStory={deleteStory}
            projectId={props.projectId}
            requestorId={props.requestorId}
            clearErrors={clearErrors}
            closeForm1={closeForm1}
            iceboxStories={iceboxStories}
            drag={drag}
        />

    ) : (<div />);

    const done1 = done ? (
        <StoryDone
            drop={drop}
            allowDrop={allowDrop}
            formIcebox={formIcebox}
            createStory={createStory}
            updateStory={updateStory}
            deleteStory={deleteStory}
            projectId={props.projectId}
            requestorId={props.requestorId}
            clearErrors={clearErrors}
            doneboxStories={doneboxStories}
            drag={drag}
        />
    ) : (<div />);
    const currentstyle = current ? { color: '#8ac7ff' } : { color: 'inherit' };
    const iceboxstyle = icebox ? { color: '#8ac7ff' } : { color: 'inherit' };
    const donestyle = done ? { color: '#8ac7ff' } : { color: 'inherit' };

    return (
        <div className="ProjectShowPage">
            <div className="ProjectShowPageContainer">
                <div className="Sidepanel">

                    <i className="fa fa-bars" aria-hidden="true" onClick={handleHideText} />
                    <div className="sidebarhideshow" onClick={handleCurrent} style={currentstyle}><i className="fa fa-list" aria-hidden="true"></i>
                        <div className="sidebartext">
                            Current
                               </div>
                    </div>
                    <div className="sidebarhideshow" onClick={handleIcebox} style={iceboxstyle}><i className="fa fa-snowflake-o" aria-hidden="true"></i>
                        <div className="sidebartext">
                            Icebox
                            </div>
                    </div>
                    <div className="sidebarhideshow" onClick={handleDone} style={donestyle}><i className="fa fa-check"></i>
                        <div className="sidebartext">
                            Done
                                </div>
                    </div>
                </div>
                <div className="buckets">
                    {current1}
                    {icebox1}
                    {done1}
                </div>
            </div>
        </div>
    );

}

export default StoryIndex;


// export default class StoryIndex extends React.Component{
//     constructor(props){
//         super(props);
//         this.drag = this.drag.bind(this);
//         this.allowDrop = this.allowDrop.bind(this);
//         this.drop = this.drop.bind(this);
//         this.state={
//             id: 100000000000,
//             status: "Current",
//             formcurrent: false,
//             formIcebox: false,
//             current: true,
//             icebox: true,
//             done: true,
//             sidebartext: true,
//         };
//         this.drop = this.drop.bind(this);
//         this.openForm = this.openForm.bind(this);
//         this.closeForm = this.closeForm.bind(this);
//         this.openForm1 = this.openForm1.bind(this);
//         this.closeForm1 = this.closeForm1.bind(this);
//         this.handleCurrent = this.handleCurrent.bind(this);
//         this.handleIcebox = this.handleIcebox.bind(this);
//         this.handleDone = this.handleDone.bind(this);
//         this.handleHideText = this.handleHideText.bind(this);
//     }

//     handleHideText(){
//         $(".sidebartext").toggle();
//     }

//     handleCurrent(){
//         this.setState({
//             current: !this.state.current
//         });
//     }

//     handleIcebox(){
//         this.setState({
//             icebox: !this.state.icebox
//         });
//     }
//     handleDone(){
//         this.setState({
//             done: !this.state.done
//         });
//     }

//     openForm() {
//         this.setState({
//             formcurrent: true
//         });
//         this.props.clearErrors();
//     }

//     closeForm() {
//         this.setState({
//             formcurrent: false
//         });
//     }
//     openForm1() {
//         this.setState({
//             formIcebox: true
//         });
//         this.props.clearErrors();
//     }

//     closeForm1() {
//         this.setState({
//             formIcebox: false
//         });
//     }

//     componentDidMount(){
//         this.props.requestAllStories();
//     }
//     allowDrop(ev){
//         ev.preventDefault();
//     }

//     drag(ev){
//         ev.dataTransfer.setData("text", ev.target.id);
//     }

//     drop(ev){
//         ev.preventDefault();
//         let data = ev.dataTransfer.getData("text");

//         this.setState({
//             id: parseInt(data),
//             status: ev.target.className,
//         },
//         ()=> this.props.updateStory(this.state))
//         ;
//     }

//     render(){
//         const { createStory, updateStory, deleteStory, clearErrors } = this.props;
//         let projectStories = this.props.stories.filter(story => story.project_id === this.props.projectId);
//         let currentStories = projectStories.filter(story => story.status === "Current");
//         let iceboxStories = projectStories.filter(story => story.status === "Icebox");
//         let doneboxStories = projectStories.filter(story => story.status === "Done");

//         const current = this.state.current ? 
//         ( <StoryCurrent 
//             drop = {this.drop}
//             allowDrop={this.allowDrop}
//             openForm={this.openForm}
//             errors={this.props.errors}
//             formcurrent={this.state.formcurrent}
//             createStory={createStory}
//             updateStory={updateStory}
//             deleteStory={deleteStory}
//             projectId={this.props.projectId}
//             requestorId={this.props.requestorId}
//             clearErrors={clearErrors}
//             closeForm={this.closeForm}
//             currentStories={currentStories}
//             drag={this.drag}
//             />
//         ): (<div />);

//         const icebox = this.state.icebox ? (
//             <StoryIcebox 
//                 drop={this.drop}
//                 allowDrop={this.allowDrop}
//                 openForm1={this.openForm1}
//                 errors={this.props.errors}
//                 formIcebox={this.state.formIcebox}
//                 createStory={createStory}
//                 updateStory={updateStory}
//                 deleteStory={deleteStory}
//                 projectId={this.props.projectId}
//                 requestorId={this.props.requestorId}
//                 clearErrors={clearErrors}
//                 closeForm1={this.closeForm1}
//                 iceboxStories={iceboxStories}
//                 drag={this.drag}
//             />

//         ) : (<div />);

//         const done = this.state.done ? (
//             <StoryDone 
//                 drop={this.drop}
//                 allowDrop={this.allowDrop}
//                 formIcebox={this.state.formIcebox}
//                 createStory={createStory}
//                 updateStory={updateStory}
//                 deleteStory={deleteStory}
//                 projectId={this.props.projectId}
//                 requestorId={this.props.requestorId}
//                 clearErrors={clearErrors}
//                 doneboxStories={doneboxStories}
//                 drag={this.drag}
//             />
//         ) : (<div />);
//         const currentstyle = this.state.current ? { color: '#8ac7ff'} : {color: 'inherit'};
//         const iceboxstyle = this.state.icebox ? { color: '#8ac7ff'} : {color: 'inherit'};
//         const donestyle = this.state.done ? { color: '#8ac7ff'} : {color: 'inherit'};
//         return(
//             <div className="ProjectShowPage">
//                 <div className="ProjectShowPageContainer">
//                     <div className="Sidepanel">

//                         <i className="fa fa-bars" aria-hidden="true" onClick={this.handleHideText}/>
//                         <div className="sidebarhideshow" onClick={this.handleCurrent} style={currentstyle}><i className="fa fa-list" aria-hidden="true"></i>
//                            <div className="sidebartext">
//                                Current
//                                </div>
//                             </div>
//                         <div className="sidebarhideshow" onClick={this.handleIcebox} style={iceboxstyle}><i className="fa fa-snowflake-o" aria-hidden="true"></i>
//                             <div className="sidebartext">
//                                 Icebox
//                             </div>
//                         </div>
//                         <div className="sidebarhideshow" onClick={this.handleDone} style={donestyle}><i className="fa fa-check"></i>
//                             <div className="sidebartext">
//                                 Done
//                                 </div>
//                         </div>
//                     </div>
//                     <div className="buckets">
//                         {current}
//                         {icebox}
//                         {done}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }