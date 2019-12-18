import React, { useState } from 'react';

const StoryIndexFormUpdate = props => {
    let story = props.story;
    let [id, setId] = useState(story.id);
    let [project_id, setProjectId] = useState(story.project_id);
    let [name, setName] = useState(story.name);
    let [status, setStatus] = useState(story.status);
    let [description, setDescription] = useState(story.description);
    let [labels, setLabels] = useState(story.labels);
    let [requestor_id, setRequestorId] = useState(story.requestor_id);

    const handleChangeName = event => {
        setName(event.target.value);
    };

    const handleChangeDescription = event => {
        setDescription(event.target.value);
    };

    const handleChangeLabel = event => {
        setLabels(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        debugger;
        props.updateStory({
            id: id,
            name: name,
            description: description,
            labels: labels,
            status: status,
            requestor_id: requestor_id,
            project_id: project_id
        });
        $(".storyitems").show();
        $(".AddStoryFormUpdate").hide();
        $("#trash").toggle();
    };

    return (
        <form id={id} onSubmit={handleSubmit} className="AddStoryFormUpdate">
            <label>Name
                        <input
                    type="text"
                    className="storyinput"
                    onChange={handleChangeName}
                    value={name} />
            </label>
            <label>Description
                        <input
                    type="text"
                    className="storyinput"
                    onChange={handleChangeDescription}
                    value={description} />
            </label>
            <label>Label
                        <input
                    type="text"
                    className="storyinput"
                    onChange={handleChangeLabel}
                    value={labels} />
            </label>
            <input type="submit" value="Update Story/Close" />
        </form>
    );
};

export default StoryIndexFormUpdate;

// export default class StoryIndexFormUpdate extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = this.props.story;
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(type) {
//         return (e) => {
//             this.setState({
//                 [type]: e.currentTarget.value
//             });
//         };
//     }
//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.updateStory(this.state).then(()=>{
//             $(".storyitems").show();
//             $(".AddStoryFormUpdate").hide();
//             $("#trash").toggle();
//         });
//     }
//     render() {
//         return (
//             <form id={this.state.id} onSubmit={this.handleSubmit} className="AddStoryFormUpdate">
//                 <label>Name
//                         <input
//                         type="text"
//                         className="storyinput"
//                         onChange={this.handleChange('name')}
//                         value={this.state.name} />
//                 </label>
//                 <label>Description
//                         <input
//                         type="text"
//                         className="storyinput"
//                         onChange={this.handleChange('description')}
//                         value={this.state.description} />
//                 </label>
//                 <label>Label
//                         <input
//                         type="text"
//                         className="storyinput"
//                         onChange={this.handleChange('labels')}
//                         value={this.state.labels} />
//                 </label>
//                 <input type="submit" value="Update Story/Close"/>
//             </form>
//         );
//     }
// }