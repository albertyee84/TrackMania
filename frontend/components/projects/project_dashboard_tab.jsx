import React, { useContext } from 'react';

let ProjectDashboardTab = props => {
    const openModal = props.openModal;
    return (
        <div className="buttonrow">
            <div className="buttoncontainer">
                <div className='dashboardtabcontainer'>
                    <div className="dashboardtab">Projects</div>
                </div>
                <button className="Create-Project-btn" onClick={() => openModal('createproject')}>Create Project</button>
            </div>
        </div>
    );
};

export default ProjectDashboardTab;