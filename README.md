# TrackMania
TrackMania ([Live](https://trackmania.herokuapp.com/)) is a full stack web application that keeps teams coordinated. It's highly inspired after [Pivotal Tracker](https://www.pivotaltracker.com/). The backend framework uses Ruby on Rails and PostgreSQL. The front end framework uses React / Redux.

![full-screen](https://user-images.githubusercontent.com/52211990/76136323-01c41a80-5fe5-11ea-90fa-afbdec2eda71.png)

## Technologies

* Ruby on Rails 5.2.3
* Postgresql
* JavaScript
* React / Redux
* Heroku
* jQuery / Json / Jbuilder
* Webpack

## Frameworks
### Front-end
TrackMania uses JavaScript, React, and Redux for it's main framework.

#### Components and State
 During development, the React components are structured in a manner that is easily read and with the Single Responsibility Principle in mind.
 
 ``` javascript
 class StoryIndex extends React.Component {
  render() {
    return this.props.connectDropTarget(
      <div className='index'>
        {this.renderItems(this.props.stories)}
      </div>
    );
  }

  renderItems(stories) {
    return stories && stories.map(story => (
      <StoryItem
        key={story.id}
        story={story}
        handleEdit={this.props.handleEdit}
        canDrag={this.props.canDrag}
        />
    ));
  }
}
 ```

### Back-end
TrackMania's back end is written in Ruby with Rails'framework. The data is stored in PostgreSQL, a relational database management system. The Rails controllers implement a RESTful API with many of the controllers implemented with CRUD (Create, Read, Update, and Delete) actions.

#### ActiveRecord Models
Each table of the Schema has associations to other tables within the database. We use ActiveRecord to facilitate the creation and use of data in our database.

``` ruby
  class Task < ApplicationRecord
  validates :story, :author, :title, presence: true
  validates :done, inclusion: { in: [true, false] }

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

  belongs_to :story

  has_one :project,
    through: :story
end
```

* users: stores user profiles and passwor digests
* stories: the ```projet_id``` column is the foreign key that ActiveRecord uses to assciate with the projects table.
* tasks: contains a similar foreign key ```story_id``` column linking tasks to stories.


## Features
### Projects, Stories, and Tasks
TrackMania consists of three major features, Projects, Stories, and Tasks. A story is a project deliverable. It can range from a new feature implementation, bug fix, or realse milestone. A project is a collection of stories that are worked on collaboratively by the project's members. Stories can have tasks that represents steps to complete towards the story's goal.

The application interface consists of a real-time project dashboard, where you create new projects.  Within each project is the project story dashboard where uses can create, edit, and track stories through the pipeline. The story has four buckets:

* Icebox, where new stories starts off with tasks.
* When work on a story commences, it is moved to Current/Backlog
* Done is when a story is finished and accepted
* My Work lists the current user's deliverables.

![simultanenous-edits](https://user-images.githubusercontent.com/52211990/76136349-58315900-5fe5-11ea-8fa1-d5799b59d666.gif)

## Features Summary

* User Authentication
* Project Creation
* Search by Project Name
* Story Creation
* Story Workflow
* Tasks
