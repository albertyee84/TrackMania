import React, { useState } from 'react';

export default class StoryIndexForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            description: "",
            labels: "",
            status: this.props.status,
            requestor_id: this.props.requestorId,
            project_id: this.props.projectId,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(type){
        return(e) =>{
            this.setState({
                [type]: e.currentTarget.value
            });
        };
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createStory(this.state);
        this.setState({
            name: "",
            description: "",
            labels: "",
            status: "Current",
            requestor_id: this.props.requestorId,
            project_id: this.props.projectId,
        });
    }
    render(){
        return(
                <form onSubmit={this.handleSubmit} className="AddStoryForm">
                    <label>Name
                        <input 
                            type="text" 
                            className="storyinput"
                            onChange={this.handleChange('name')}
                            value={this.state.name}/>
                    </label>
                    <label>Description
                        <input 
                            type="text" 
                            className="storyinput"
                            onChange={this.handleChange('description')}
                            value={this.state.description}/>
                    </label>
                    <label>Label
                        <input 
                            type="text" 
                            className="storyinput"
                            onChange={this.handleChange('labels')}
                            value={this.state.labels}/>
                    </label>
                    <input type="submit" value="Add Story"/>
                </form>
        );
    }
}

// const StoryIndexForm = props => {
//     let [name, setName] = useState("")
//     let [description, setDescription] = useState("")
//     let [labels, setLabels] = useState("")
//     let [status, setStatus] = useState(props.status)
//     let [requestor_id, setRequestorId] = useState(props.requestorId)
//     let [project_id, setProjectId] = useState(props.projectId)

//     const handleChange = type => {
//         switch(type) {
//             case "name":
//                 setName(event.currentTarget.value)
//             case "description":
//                 setDescription(event.currentTarget.value)
//             case "labels":
//                 setLabels(event.currentTarget.value)
//             default:
//                 null;
//         }
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         props.createStory({
//             name: name,
//             description: description,
//             labels: labels,
//             status: status,
//             requestor_id: requestor_id,
//             project_id: project_id
//         })
//             setName("")
//             setDescription("")
//             setLabels("")
//     };

//     return (
//         <form onSubmit={handleSubmit} className="AddStoryForm">
//             <label>Name
//                     <input
//                     type="text"
//                     className="storyinput"
//                     onChange={handleChange('name')}
//                     value={name} />
//             </label>
//             <label>Description
//                     <input
//                     type="text"
//                     className="storyinput"
//                     onChange={handleChange('description')}
//                     value={description} />
//             </label>
//             <label>Label
//                     <input
//                     type="text"
//                     className="storyinput"
//                     onChange={handleChange('labels')}
//                     value={labels} />
//             </label>
//             <input type="submit" value="Add Story" />
//         </form>
//     );
// };

// export default StoryIndexForm;