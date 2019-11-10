import React from 'react';
import ProjectListItem from './project_list_Item';
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: this.props.userId,
            search: "",
            all: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleShowAllProjects = this.handleShowAllProjects.bind(this);
    }

    componentDidMount(){
        this.props.requestAllUsersProjects(this.props.userId);
    }

    handleChange(e){
        this.setState({
            search: e.currentTarget.value
        },
        ()=>{
            this.props.searchProject(this.state);
        });
    }

    handleShowAllProjects(){
        this.setState({
            all: true
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
        let showAll;
        let projectslist = Object.values(this.props.projects);
        let projectrender;
        
        !this.state.all ? projectrender = projectslist.slice(0,4) : projectrender = projectslist;

        if (!this.state.all && projectslist.length > 4) {
            showAll = <button onClick={this.handleShowAllProjects}>Show All</button>
        } else{
            showAll = "";
        }


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
                        <div className="projectpanelheader"><i className="fa fa-bars"></i>My Projects 
                            <div className="projectpanelseparator">|</div> 
                            {Object.values(this.props.projects).length}
                        </div>
                        <ul className="projecttiles">
                            {
                                projectrender.map(project => 
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
                    {showAll}
                </div>
            </div>
        );
    }
}

export default Projects;