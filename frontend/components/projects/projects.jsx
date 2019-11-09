import React from 'react';
import ProjectListItem from './project_list_Item';
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: this.props.userId,
            search: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.props.requestAllUsersProjects(this.props.userId);
    }

    componentDidUpdate(){
        
    }

    handleChange(e){
        this.setState({
            search: e.currentTarget.value
        },
        ()=>{
            this.props.searchProject(this.state);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.searchProject(this.state);
        this.setState({
            search: ""
        });
    }

    render() {
        const openModal = this.props.openModal;
        return (
            <div className="dashboardbody">
                <div className="buttonrow">
                    <div className="buttoncontainer">
                        <div className='dashboardtabcontainer'>
                            <div className="dashboardtab">Projects</div>
                        </div>
                        <button className="Create-Project-btn" onClick={() => openModal('createproject')}>Create Project</button>

                    </div>
                </div>
                <div className="dashboard">
                    <div className="searchbar">
                        
                        <form className="searchbarform"
                            onSubmit={this.handleSubmit}>
                                <i className="fa fa-search" />  
                                <input
                                    className="inputbox" 
                                    type="text"
                                    value={this.state.search}
                                    placeholder="Search Projects"
                                    onChange={this.handleChange}
                                    onSubmit={this.handleSubmit}
                                    id=""
                                    />
                        </form>
                    </div>
                    <div className="projectpanelbody">
                        <div className="projectpanelheader"><i className="fa fa-bars"></i>My Projects <div className="projectpanelseparator">|</div> {Object.values(this.props.projects).length}</div>
                            <ul className="projecttiles">
                                {
                                    Object.values(this.props.projects).map(project => 
                                    <div key={project.id} className="projecttilebox">
                                        <div className="projecttileheader">
                                        <ProjectListItem 
                                            project={project}
                                            key={project.id}
                                            projectName={project.project_name}
                                            userId={this.props.userId}
                                            />

                                        </div>
                                        <div className="projecttilebody"></div>
                                    </div>
                                    
                                        
                                        )
                                    }
                            </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;