import React from 'react';

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