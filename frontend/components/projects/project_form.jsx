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
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    handleChange(e){
        this.setState({
            project_name: e.currentTarget.value
        });
    }

    handleCloseModal(){
        this.props.closeModal(),
        this.props.clearErrors();
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
                            <select name="users" id="users" placeholder="Select the account holder">
                                <option value="Select Account Holder">Select Account Holder</option>
                                <option value={this.props.currentUser}>{this.props.currentUser}</option>
                            </select>
                        </div>
                        <div className="formerrors">
                            {this.props.errors}
                        </div>
                    </div>
                    <div className="newprojectformfooter">
                        <button className="cancelbutton" onClick={this.handleCloseModal}>Cancel</button>
                        <input className="createformbtn" type="submit" value="Create"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default ProjectForm;