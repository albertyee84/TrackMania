import React from 'react';

class ProjectForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            project_name: "",
            user_id: props.userId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            project_name: e.currentTarget.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        debugger;
        this.props.createAProject(this.state);
                this.setState({
                    project_name: "",
                });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Project Name
                    <input type="text" onChange={this.handleChange}value={this.state.project_name}/>
                    <input type="submit" value="Create Project"/>
                </label>
            </form>
        );
    }
}

export default ProjectForm;