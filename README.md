# TrackMania
[TrackMania Live](https://trackmania.herokuapp.com/)

This is TrackMania, a PivotalTracker clone that provides you basic functionalities that PivotalTracker provides such as creating new projects, creating stories for each project, etc.

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
  Primary Backend for CRUD routes
* Postgresql
  Database server for localtesting and rendering
* JavaScript
  Primary frontend language
* React/Redux

## Challenges

* Implementing a search bar was a challenging task as it involved a custom backend route and implementing an active record query.  This involved figuring out how to send the correct information from the front end to the back end. Additionally, how to parse the front end information in order to create a valid query in order to send the payload back was especially challenging.
* Another challenging task was how to favorite a project and make it a sticky on the top of the project index page. This involved updating the project's backend information which then updates the state. Lastly, to render the correct information, slicing the state was involed with conditionals on which project is favorited and which wasn't.
