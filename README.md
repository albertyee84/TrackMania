# TrackMania
[TrackMania Live](https://trackmania.herokuapp.com/)

TrackMania is a full stack application highly inspiried by the agile development app, PivotalTracker.  TrackMania provides you basic functionalities that PivotalTracker provides such as creating new projects, creating stories for each project, etc.

![ezgif com-optimize](https://user-images.githubusercontent.com/52211990/71867142-c2994c00-30bd-11ea-856c-eefee00a400d.gif)

## Technologies

* Ruby on Rails 5.2.3
* Postgresql
* JavaScript
* React/Redux
* Heroku
* jQuery/Json/Jbuilder
* Webpack

## Challenges

* Implementing a search bar was a challenging task as it involved a custom backend route and implementing an active record query.  This involved figuring out how to query the correct information from the front end to the back end. Additionally, how to parse the front end information in order to create a valid query in order to send the payload back was especially challenging.

``` javascript
  def search
        @projects = Project.where("user_id = ? and archived = ? and project_name like ?", params[:user_id], params[:project][:archived], "%" + params[:search] + "%")
        render :index
    end

```

* Another challenging task was how to favorite a project and make it a sticky on the top of the project index page. This involved updating the project's backend information which then updates the state. Lastly, to render the correct information, slicing the state was involed with conditionals on which project is favorited and which wasn't.

``` javascript
     !this.state.all && projectlistnonfav.length > 4 ?
            showAll = <button className="showallbtn" onClick={this.handleShowAllProjects}>
                Show {projectlistnonfav.length-4} more project
                    </button> 
            : 
            this.state.all && projectlistnonfav.length > 4 ?
            showAll = <button className="showallbtn" onClick={this.handlehideProjects}>
                Hide {projectlistnonfav.length - 4} projects
                </button> : "" ;
```

* Lastly, in the beginning the code was written using react class components but after learning about React Hooks, I took on the challenge of refactoring the code for the use of hooks and functiontional components, including, useState and useEffect.

``` javascript
import React, {useState, useEffect } from 'react';
import ProjectDashboardTab from './project_dashboard_tab';
import ProjectSearchBar from './project_search_bar';
import ProjectsBody from './projects_body';
import ProjectFooter from './projects_footer';

const Projects = props => {
    let [userId, setUserId] = useState(props.userId);
    let [search, setSearch] = useState("");
    let [archived, setArchived] = useState(false);
    let [all, setAll] = useState(false);
    let [id, setId] = useState(10000000000000);

    let state = {user_id: userId, search: search, archived: archived, all: all, id: id};

    useEffect(() => {
        props.requestAllUsersProjects(state);
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
```

![Screen Shot 2019-11-15 at 12 20 27 PM](https://user-images.githubusercontent.com/52211990/68973356-eec1dc00-07a2-11ea-9c93-4297805c5a12.png)

## Projects Show Page
The Projects Show page allows users to create new stories for their particular project they are currently on.  This particular page was implemeneted with a drag and drop feature where users can drag a story from a bucket(Current/Icebox/Done) into another bucket with the user's experience in mind.  In addition, on the left side panel, the user can toggle each bucket to show or hide.

![Screen Shot 2019-11-15 at 12 31 45 PM](https://user-images.githubusercontent.com/52211990/68973759-f1710100-07a3-11ea-9b18-f6226aca9881.png)

## Features

* User Authentication
* Project Creation
* Story Creation
* Story Update and Deletion
* Search by Project Name
* Favorite a Project
* Other features coming soon!
