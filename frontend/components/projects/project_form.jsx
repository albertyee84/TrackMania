import React, { useState, useEffect } from 'react';


const ProjectForm = props => {
    let [projectName, setProjectName] = useState("");
    let [userId, setUserId] = useState(props.userId);

    const handleChange = e => {
        setProjectName(e.currentTarget.value);
    };

    const handleCloseModal = () => {
        props.closeModal();
        props.clearErrors();
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.createAProject({project_name: projectName, user_id: userId})
        .then(() => props.closeModal());
        setProjectName("");
    };

    return (
        <div className="createformbox">
            <div className='newprojectformheader'>
                Create a new project
                </div>
            <form className="newprojectform" onSubmit={handleSubmit}>
                <div className="newprojectformbody">
                    <div className="projectnameinput">
                        <label className="projectnamelabel">Project Name</label>
                        <input
                            className="newprojectforminput" type="text"
                            onChange={handleChange}
                            value={projectName}
                            placeholder="Enter a neame for your project"
                        />
                    </div>
                    <div className="accountchooser">
                        <label className="projectnamelabel">Account</label>
                        <select name="users" id="users" placeholder="Select the account holder">
                            <option value="Select Account Holder">Select Account Holder</option>
                            <option value={props.currentUser}>{props.currentUser}</option>
                        </select>
                    </div>
                    <div className="formerrors">
                        {props.errors}
                    </div>
                </div>
                <div className="newprojectformfooter">
                    <button className="cancelbutton" onClick={handleCloseModal}>Cancel</button>
                    <input className="createformbtn" type="submit" value="Create" />
                </div>
            </form>
        </div>
    );
}

export default ProjectForm;