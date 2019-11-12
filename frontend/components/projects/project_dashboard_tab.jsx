import React from 'react';

export default class ProjectDashboardTab extends React.Component{

    render(){
        const openModal = this.props.openModal;
        return(
            <div className="buttonrow">
                <div className="buttoncontainer">
                    <div className='dashboardtabcontainer'>
                        <div className="dashboardtab">Projects</div>
                    </div>
                    <button className="Create-Project-btn" onClick={() => openModal('createproject')}>Create Project</button>
                </div>
            </div>
        );
    }
}