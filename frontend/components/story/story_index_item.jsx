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
        $(".AddStoryFormUpdate").toggle();
    }
    handleDelete(){
        this.props.deleteStory(this.state);
    }
    render(){
        return(
            <div className="storyindexitem" onDragStart={this.props.drag} draggable={true} id={`${this.props.story.id}`} onDoubleClick={this.handleDoubleClick}>
                <div>
                    <div className="storyitembox" id={this.props.story.id}>
                        <div>
                            <div>Story Name: {this.props.story.name}</div>
                            <div>Description: {this.props.story.description}</div>
                            <div>Label: {this.props.story.labels}</div>
                            <div>Status: {this.props.story.status}</div>
                        </div>
                        <button onClick={this.handleDelete}><i className="fa fa-trash" aria-hidden="true"></i></button>
                </div>
                    <StoryIndexFormUpdate 
                        story={this.state}
                        updateStory={this.props.updateStory}
                    />
                </div>
            </div>
        );
    }
}