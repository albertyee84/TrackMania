# TrackMania
[TrackMania Live](https://trackmania.herokuapp.com/)

TrackMania is a full stack application cloning an agile development app, PivotalTracker.  TrackMania provides you basic functionalities that PivotalTracker provides such as creating new projects, creating stories for each project, etc.

## Table of Contents
* Features
* Technologies
* Challenges

## Features

* User Authentication
* Project Creation
* Story Creation
* Story Update and Deletion
* Search by Project Name
* Favorite a Project
* Other features coming soon!

## Technologies

* Ruby on Rails 5.2.3
* Postgresql
* JavaScript
* React/Redux
* Heroku
* jQuery/Json/Jbuilder
* Webpack

## Challenges

* Implementing a search bar was a challenging task as it involved a custom backend route and implementing an active record query.  This involved figuring out how to send the correct information from the front end to the back end. Additionally, how to parse the front end information in order to create a valid query in order to send the payload back was especially challenging.

```javascript
  def search
        @projects = Project.where("user_id = ? and archived = ? and project_name like ?", params[:user_id], params[:project][:archived], "%" + params[:search] + "%")
        render :index
    end

```

* Another challenging task was how to favorite a project and make it a sticky on the top of the project index page. This involved updating the project's backend information which then updates the state. Lastly, to render the correct information, slicing the state was involed with conditionals on which project is favorited and which wasn't.

```javascript
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

* Refactored the components to align with React hooks formatting to improve readability and future proof the project with upcoming technological changes in React.

After
``` javascript
import React, { useState, useEffect} from 'react';
import StoryIndexFormUpdate from './story_index_form_update';

const StoryIndexItem = props => {
    let [story, setStory] = useState(props.story);

    useEffect(() => {
        $('.AddStoryFormUpdate').hide();
    }, []);

    const handleDoubleClick = e => {
        $(e.target).children().toggle();
    }

    const handleDelete = () => {
        props.deleteStory(story);
    }

    return (
        <div className="storyindexitem" onDragStart={props.drag} draggable={true} id={`${props.story.id}`} onDoubleClick={handleDoubleClick}>
            <div>
                <div className="storyitembox" id={props.story.id}>
                    <div className="storyitems">
                        <div>Story Name: {props.story.name}</div>
                        <div>Description: {props.story.description}</div>
                        <div>Label: {props.story.labels}</div>
                        <div>Status: {props.story.status}</div>
                    </div>
                    <button onClick={handleDelete} id="trash"><i className="fa fa-trash" aria-hidden="true"></i></button>
                    <StoryIndexFormUpdate
                        story={story}
                        updateStory={props.updateStory}
                    />
                </div>
            </div>
        </div>
    )
}
export default StoryIndexItem;
```

Before
``` javascript
import React from 'react';
import StoryIndexFormUpdate from './story_index_form_update';

export default class StoryIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state=this.props.story;
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
    }
    componentDidMount(){
        $(".AddStoryFormUpdate").hide();
    }
    handleDoubleClick(e){
        $(e.target).children().toggle();
    }
    handleDelete(){
        this.props.deleteStory(this.state);
    }
    render(){
        return(
            <div className="storyindexitem" onDragStart={this.props.drag} draggable={true} id={`${this.props.story.id}`} onDoubleClick={this.handleDoubleClick}>
                <div>
                    <div className="storyitembox" id={this.props.story.id}>
                        <div className="storyitems">
                            <div>Story Name: {this.props.story.name}</div>
                            <div>Description: {this.props.story.description}</div>
                            <div>Label: {this.props.story.labels}</div>
                            <div>Status: {this.props.story.status}</div>
                        </div>
                        <button onClick={this.handleDelete} id="trash"><i className="fa fa-trash"  aria-hidden="true"></i></button>
                        <StoryIndexFormUpdate 
                            story={this.state}
                            updateStory={this.props.updateStory}
                        />
                </div>
                </div>
            </div>
        );
    }
}
```

![Screen Shot 2019-11-15 at 12 20 27 PM](https://user-images.githubusercontent.com/52211990/68973356-eec1dc00-07a2-11ea-9c93-4297805c5a12.png)

## Projects Show Page
The Projects Show page allows users to create new stories for their particular project they are currently on.  This particular page was implemeneted with a drag and drop feature where users can drag a story from a bucket(Current/Icebox/Done) into another bucket with the user's experience in mind.  In addition, on the left side panel, the user can toggle each bucket to show or hide.

![Screen Shot 2019-11-15 at 12 31 45 PM](https://user-images.githubusercontent.com/52211990/68973759-f1710100-07a3-11ea-9b18-f6226aca9881.png)

