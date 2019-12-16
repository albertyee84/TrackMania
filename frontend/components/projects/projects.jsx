import React, {useState, useEffect } from 'react';
import ProjectDashboardTab from './project_dashboard_tab';
import ProjectSearchBar from './project_search_bar';
import ProjectsBody from './projects_body';
import ProjectFooter from './projects_footer';


// class Projects extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             user_id: this.props.userId,
//             search: "",
//             archived: false,
//             all: false,
//             id: 100000000000,
//         };
//         this.handlehideProjects = this.handlehideProjects.bind(this);
//         this.handleShowAllProjects = this.handleShowAllProjects.bind(this);
//     }

//     componentDidMount(){
//         this.props.requestAllUsersProjects(this.state);
//     }

//     handleArchiveProject(projectId, archived){
//         let newStatus;
//         archived ? newStatus = false : newStatus = true;
//         this.setState({
//             id: projectId,
//             archived: newStatus,
//         },
//         ()=>{
//             this.props.updateProject(this.state)
//             .then(()=>{
//                 this.setState({archived: archived},
//                     ()=>{
//                         this.props.requestAllUsersProjects(this.state);
//                     });
//             });
//         });
//     }

//     handleShowAllProjects(){
//         this.setState({
//             all: true
//         });
//     }
//     handlehideProjects() {
//         this.setState({
//             all: false
//         });
//     }

//     render() {
//         const openModal = this.props.openModal;
//         let showAll;
//         let projectslist = Object.values(this.props.projects);
//         let projectlistnonfav = [];
//         let projectlistfav = [];
//         projectslist.forEach(project => {
//             project.favorite ? projectlistfav.push(project) : projectlistnonfav.push(project);
//         });

//         !this.state.all && projectlistnonfav.length > 4 ?
//             showAll = <button className="showallbtn" onClick={this.handleShowAllProjects}>
//                 Show {projectlistnonfav.length-4} more project
//                     </button> 
//             : 
//             this.state.all && projectlistnonfav.length > 4 ?
//             showAll = <button className="showallbtn" onClick={this.handlehideProjects}>
//                 Hide {projectlistnonfav.length - 4} projects
//                 </button> : "" ;

//         return (
//             <div>
//                 <div className="dashboardbody">
//                     <ProjectDashboardTab openModal={openModal}/>
//                     <div className="dashboard">
//                         <ProjectSearchBar 
//                             searchProject={this.props.searchProject}
//                             requestAllUsersProjects={this.props.requestAllUsersProjects}
//                             userId={this.props.userId} 
//                         />
//                         <ProjectsBody 
//                             projects={this.props.projects}
//                             updateProject={this.props.updateProject}
//                             requestAllUsersProjects={this.props.requestAllUsersProjects}
//                             userId={this.props.userId}
//                             state={this.state}
//                             all={this.state.all}
//                         />
//                         <div>
//                             {showAll}
//                         </div>
//                     </div>
//                 </div>
//                 <ProjectFooter />
//             </div>
//         );
//     }
// }

const Projects = props => {
    let [userId, setUserId] = useState(props.userId)
    let [search, setSearch] = useState("")
    let [archived, setArchived] = useState(false);
    let [all, setAll] = useState(false);
    let [id, setId] = useState(10000000000000)

    let state = {user_id: userId, search: search, archived: archived, all: all, id: id}

    useEffect(() => {
        props.requestAllUsersProjects(state)
    }, [])

    const handleArchiveProject = (projectId, archived) => {
        let newStatus;
        archived ? newStatus = false : newStatus = true;
        setId(projectId)
        setArchived(newStatus)
        .then(()=>{
            props.updateProject(state)
            .then(() => {
                props.requestAllUsersProjects(state)
            })
        })
    }

    const handleShowAllProjects = () => {
        setAll(true)
    }

    const handlehideProjects = () => {
        setAll(false)
    }

    const openModal = props.openModal;
    let showAll;
    let projectslist = Object.values(props.projects);
    let projectlistnonfav = [];
    let projectlistfav = [];
    projectslist.forEach(project => {
        project.favorite ? projectlistfav.push(project) : projectlistnonfav.push(project);
    });

    !all && projectlistnonfav.length > 4 ?
        showAll = <button className="showallbtn" onClick={handleShowAllProjects}>
            Show {projectlistnonfav.length - 4} more project
                </button>
        :
        all && projectlistnonfav.length > 4 ?
            showAll = <button className="showallbtn" onClick={handlehideProjects}>
                Hide {projectlistnonfav.length - 4} projects
            </button> : "";

    return (
        <div>
            <div className="dashboardbody">
                <ProjectDashboardTab openModal={openModal} />
                <div className="dashboard">
                    <ProjectSearchBar
                        searchProject={props.searchProject}
                        requestAllUsersProjects={props.requestAllUsersProjects}
                        userId={props.userId}
                    />
                    <ProjectsBody
                        projects={props.projects}
                        updateProject={props.updateProject}
                        requestAllUsersProjects={props.requestAllUsersProjects}
                        userId={props.userId}
                        state={state}
                        all={state.all}
                    />
                    <div>
                        {showAll}
                    </div>
                </div>
            </div>
            <ProjectFooter />
        </div>
    );

}

export default Projects;