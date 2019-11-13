import React from 'react';

export default class StoryIndexItem extends React.Component{

    render(){
        return(
            <div className="storyindexitem" onDragStart={this.props.drag} draggable={true} id={`${this.props.story.name}`}>
                <div>{this.props.story.name}</div>
                <div>{this.props.story.description}</div>
                <div>{this.props.story.status}</div>
            </div>
        );
    }
}