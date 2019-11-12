import React from 'react';
import ProjectListItem from './project_list_Item';
import SocialMedia from '../social_media/social_media';
import ProjectDashboardTab from './project_dashboard_tab';

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
        this.handleClear = this.handleClear.bind(this);
        this.handlehideProjects = this.handlehideProjects.bind(this);
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

    handleClear(e){
        this.setState({
            search: ""
        },
            () => {
                this.props.searchProject(this.state);
            });
    }

    handleShowAllProjects(){
        this.setState({
            all: true
        });
    }
    handlehideProjects() {
        this.setState({
            all: false
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
        let clear;

        this.state.archived ? status = "Archived" : status = "Active";
        this.state.archived ? archiveword = "UnArchive" : archiveword = "Archive";
        
        !this.state.all ? projectrender = projectslist.slice(0,4) : projectrender = projectslist;

        !this.state.all && projectslist.length > 4? 
            showAll = <button className="showallbtn" onClick={this.handleShowAllProjects}>Show {projectslist.length-4} more project</button> 
            : this.state.all && projectslist.length > 4 ?
            showAll = <button className="showallbtn" onClick={this.handlehideProjects}>Hide {projectslist.length - 4} projects</button> : "" ;

        this.state.search.length > 0 ? clear = (<div className="clear" onClick={this.handleClear}>clear</div>) : "";
        return (
            <div>
                <div className="dashboardbody">
                    <ProjectDashboardTab openModal={openModal}/>
                    <div className="dashboard">
                        <div className="searchbar">
                            <form className="searchbarform"
                                onSubmit={this.handleSubmit}>
                                    <div className="searchbarinput">
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
                                    </div>
                                {clear}
                            </form>
                            <button className="activearchivebuttons" onClick={this.handleActive}>Active</button>
                            <button className="activearchivebuttons" onClick={this.handleArchive}>Archived</button>
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
                    <div className="dashboardfootercontents">
                        About TrackMania Labs | Help & Support | Status | Blog | Privacy & Cookie Policy | Tracker Agreement | Contact Us
                    </div>
                    <SocialMedia />
                </div>
            </div>
        );
    }
}

export default Projects;