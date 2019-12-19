import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectListItemnavbar from '../../projects/project_list_Item_navbar';

const loggedinNavbar = props => {
    let [user_id, setUserId] = useState(props.userId);
    let [search, setSearch] = useState('');
    let [archived, setArchived] = useState(false);
    let [all, setAll] = useState(false);
    let [id, setId] = useState(100000000000);
    let [projects, setProjects] = useState({});

    useEffect(() => {
        props.getProjects({
            user_id, search, archived, all, id, projects
        })
        .then( res => setProjects(res))
    }, [])

    const handleRefresh = () => {
        props.getProjects({
            user_id, search, archived, all, id, projects
        })
            .then(res => setProjects(res))
    }

    const { currentUser, logout, openModal, userId } = props;
    let projectlist = Object.values(projects).slice(0, 6);

    return (
        <header className="loggedinnav-bar">
            <div>
                <h3 className="dropdown1">
                    <div className="logo-logged-in" id="navbarname" onClick={() => props.history.push('/projects')}>
                        TrackMania<div className="arrow-down"></div>
                    </div>
                    <ul className="dropdown-content1" id="clickDropDown">
                        <div className="colorchange">
                            <div className="navbarlistheader" id="projectstitle">Projects</div>
                            <div className="navbarlistitem" id="createproject" onClick={() => openModal('createproject')}>Create Project <i className="fa fa-plus"></i></div>
                            <div className="navbarlistitem refreshlist" id="refresh" onClick={handleRefresh}>Refresh List <i className="fa fa-refresh" aria-hidden="true"></i></div>
                            {
                                projectlist.map((project, idx) => <ProjectListItemnavbar
                                    project={project}
                                    key={project.id + idx}
                                    projectName={project.project_name}
                                    userId={userId}
                                />)
                            }
                            <div className="navbarlistfooterwrapper">
                                <Link to='/projects' className="navbarlistfooter"><i className="fa fa-home"></i>Dashboard </Link>
                            </div>
                        </div>
                    </ul>
                </h3>
            </div>
            <h3 className="dropdown1">
                <div className="logo-logged-in">
                    {currentUser.username.toUpperCase()}<div className="arrow-down"></div>
                </div>
                <ul className="dropdown-content1" id="clickDropDown2">
                    <li className="profilelistitme">Profile</li>
                    <li className="profilelistitme">Accounts</li>
                    <li className="profilelistitme">Reports & Analytics</li>
                    <div className="dropdownlogout" onClick={logout}>Log Out</div>

                </ul>
            </h3>
        </header>
    );
}

export default loggedinNavbar;

// export default class loggedinNavbar extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             user_id: this.props.userId,
//             search: "",
//             archived: false,
//             all: false,
//             id: 100000000000,
//             projects: {},
//         };
//         this.handleRefresh = this.handleRefresh.bind(this);
//     }

//     componentDidMount(){
//         this.props.getProjects(this.state)
//         .then(response => this.setState({projects: response}));
//     }

//     handleRefresh(){
//         this.props.getProjects(this.state)
//         .then(response => this.setState({ projects: response }));
//     }

//     render(){
//         const { currentUser, logout, openModal, projects, userId } = this.props;
//         let projectlist = Object.values(this.state.projects).slice(0,6);
//         return(
//             <header className="loggedinnav-bar">
//                 <div>
//                     <h3 className="dropdown1">
//                         <div className="logo-logged-in" id="navbarname" onClick={()=>this.props.history.push('/projects')}>
//                             TrackMania<div className="arrow-down"></div>
//                         </div>
//                         <ul className="dropdown-content1" id="clickDropDown">
//                             <div className="colorchange">
//                                 <div className="navbarlistheader" id="projectstitle">Projects</div>
//                                 <div className="navbarlistitem" id="createproject" onClick={() => openModal('createproject')}>Create Project <i className="fa fa-plus"></i></div>
//                                 <div className="navbarlistitem refreshlist" id="refresh" onClick={this.handleRefresh}>Refresh List <i className="fa fa-refresh" aria-hidden="true"></i></div>
//                                 {
//                                     projectlist.map((project, idx) => <ProjectListItemnavbar
//                                         project={project}
//                                         key={project.id + idx}
//                                         projectName={project.project_name}
//                                         userId={userId}
//                                     />)
//                                 }
//                                 <div className="navbarlistfooterwrapper">
//                                     <Link to='/projects' className="navbarlistfooter"><i className="fa fa-home"></i>Dashboard </Link>
//                                 </div>
//                             </div>
//                         </ul>
//                     </h3>
//                 </div>
//                 <h3 className="dropdown1">
//                     <div className="logo-logged-in">
//                         {currentUser.username.toUpperCase()}<div className="arrow-down"></div>
//                     </div>
//                     <ul className="dropdown-content1" id="clickDropDown2">
//                         <li className="profilelistitme">Profile</li>
//                         <li className="profilelistitme">Accounts</li>
//                         <li className="profilelistitme">Reports & Analytics</li>
//                         <div className="dropdownlogout" onClick={logout}>Log Out</div>

//                     </ul>
//                 </h3>
//             </header>
//         );
//     }
// }