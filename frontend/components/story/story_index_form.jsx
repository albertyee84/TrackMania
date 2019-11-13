import React from 'react';

export default class StoryIndexForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            description: "",
            labels: "",
            status: "current",
            requestor_id: this.props.requestorId,
            project_id: this.props.projectId,
            form: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openForm = this.openForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
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
            status: "current",
            requestor_id: this.props.requestorId,
            project_id: this.props.projectId,
            form: false
        });
    }

    openForm() {
        this.setState({
            form: true
        });
    }
    closeForm() {
        this.setState({
            form: false
        });
    }
    render(){
        return(
            this.state.form ? (
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                        <input 
                            type="text" 
                            onChange={this.handleChange('name')}
                            value={this.state.name}/>
                    </label>
                    <label>Description
                        <input 
                            type="text" 
                            onChange={this.handleChange('description')}
                            value={this.state.description}/>
                    </label>
                    <label>Label
                        <input 
                            type="text" 
                            onChange={this.handleChange('labels')}
                            value={this.state.labels}/>
                    </label>
                    <input type="submit" value="Add Story"/>
                    <button onClick={this.closeForm}>Cancel</button>
                </form>
            ) : (
                <div>
                    <button onClick={this.openForm}>Add Story</button>
                </div>
            )
        );
    }
}