import React from 'react';

export default class StoryIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state=this.props.story;
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(){
        this.props.deleteStory(this.state);
    }
    render(){
        return(
            <div className="storyindexitem" onDragStart={this.props.drag} draggable={true} id={`${this.props.story.id}`}>
                <div className="storyitembox">
                    <div>
                        <div>Story Name: {this.props.story.name}</div>
                        <div>Description: {this.props.story.description}</div>
                        <div>Status: {this.props.story.status}</div>
                    </div>
                    <button onClick={this.handleDelete}><i className="fa fa-trash" aria-hidden="true"></i></button>
                </div>
            </div>
        );
    }
}