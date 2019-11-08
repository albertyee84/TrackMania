import React from 'react';

class ProjectForm extends React.Component {
    constructor(props){
        super(props);
        debugger;
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
        this.props.createAProject(this.state)
        .then(()=>this.props.closeModal());
        this.setState({
            project_name: "",
        });
    }

    render() {
        return (
            <div className="createformbox">
                <div className='newprojectformheader'>
                    Create a new project
                </div>
                <form className="newprojectform" onSubmit={this.handleSubmit}>
                    <div className="newprojectformbody">
                        <div className="projectnameinput">
                            <label className="projectnamelabel">Project Name</label>
                            <input 
                                className="newprojectforminput" type="text" 
                                onChange={this.handleChange}
                                value={this.state.project_name}
                                placeholder="Enter a neame for your project"
                            />
                        </div>
                        <div className="accountchooser">
                            <label className="projectnamelabel">Account</label>
                            <input 
                                className="newprojectforminput" 
                                list="users" 
                                placeholder="Select an account"
                            />
                            <datalist id="users">
                                <option value={this.props.currentUser} />
                            </datalist>
                        </div>
                    </div>
                    <div className="newprojectformfooter">
                        <button className="cancelbutton" onClick={()=> this.props.closeModal()}>Cancel</button>
                        <input className="createformbtn" type="submit" value="Create"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default ProjectForm;