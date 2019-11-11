import React from 'react';
import ProjectListItem from './project_list_Item';
import SocialMedia from '../social_media/social_media';

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: this.props.userId,
            search: "",
            archived: false,
            all: false,
            id: 100000000000,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleShowAllProjects = this.handleShowAllProjects.bind(this);
        this.handleArchive = this.handleArchive.bind(this);
        this.handleActive = this.handleActive.bind(this);
    }

    componentDidMount(){
        this.props.requestAllUsersProjects(this.state);
    }

    handleArchiveProject(projectId, archived){
        let newStatus;
        archived ? newStatus = false : newStatus = true;
        this.setState({
            id: projectId,
            archived: newStatus,
        },
        ()=>{
            this.props.updateProject(this.state)
            .then(()=>{
                this.setState({archived: archived},
                    ()=>{
                        this.props.requestAllUsersProjects(this.state);
                    });
            });
        });
    }
    

    handleArchive(e){
        this.setState({
            archived: true
        },
        ()=>{
            this.props.requestAllUsersProjects(this.state);
        }
        );
    }

    handleActive(e){
        this.setState({
            archived: false
        },
            () => {
                this.props.requestAllUsersProjects(this.state);
            }
        );
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
        let status;
        let archiveword;

        this.state.archived ? status = "Archived" : status = "Active";
        this.state.archived ? archiveword = "UnArchive" : archiveword = "Archive";
        
        !this.state.all ? projectrender = projectslist.slice(0,4) : projectrender = projectslist;

        !this.state.all && projectslist.length > 4 ? 
            showAll = <button className="showallbtn" onClick={this.handleShowAllProjects}>Show {projectslist.length-4} more project</button> 
            : showAll = ""


        return (
            <div>
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
                                        placeholder={`Search ${status} Projects`}
                                        onChange={this.handleChange}
                                        onSubmit={this.handleSubmit}
                                        id=""
                                    />
                            </form>
                            <button onClick={this.handleActive}>Active</button>
                            <button onClick={this.handleArchive}>Archived</button>
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
                                                <div onClick={() => this.handleArchiveProject(project.id, project.archived)}><i className="fa fa-archive dropdown">
                                                    <div className="arrow-down"></div>
                                                    <ul className="dropdown-contentarchive">
                                                        {archiveword}
                                                    </ul>
                                                    </i></div>
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
                        <div>
                            {showAll}
                        </div>
                    </div>
                </div>
                <div className="dashboardfooter">
                    About TrackMania Labs | Help & Support | Status | Blog | Privacy & Cookie Policy | Tracker Agreement | Contact Us
                    <SocialMedia />
                </div>
            </div>
        );
    }
}

export default Projects;