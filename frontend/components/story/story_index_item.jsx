import React, { useState, useEffect} from 'react';
import StoryIndexFormUpdate from './story_index_form_update';

const StoryIndexItem = props => {
    let [story, setStory] = useState(props.story);

    useEffect(() => {
        $('.AddStoryFormUpdate').hide();
    }, []);

    const handleDoubleClick = e => {
        $(e.currentTarget).children().children().children().toggle();
    }

    const handleDelete = () => {
        props.deleteStory(story);
    }

    const handleUpdate = (e) => {
        $(e.target).parent().parent().parent().children().toggle();
    }

    return (
        <div className="storyindexitem" onDragStart={props.drag} draggable={true} id={`${props.story.id}`} onDoubleClick={handleDoubleClick}>
            <div>
                <div className="storyitembox" id={props.story.id}>
                    <div className="storyitems" >
                        <div>Story Name: {props.story.name}</div>
                        <div>Description: {props.story.description}</div>
                        <div>Label: {props.story.labels}</div>
                        <div>Status: {props.story.status}</div>
                    </div>
                    <div className="story-item-buttons">
                        <button onClick={handleUpdate} id="edit" title="Update Story"><i className="fa fa-edit"></i></button>
                        <button onClick={handleDelete} id="trash" title="Delete Story"><i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                    <StoryIndexFormUpdate
                        story={story}
                        updateStory={props.updateStory}
                        closeForm={props.closeForm}
                        closeForm1={props.closeForm1}
                    />
                </div>
            </div>
        </div>
    )
}
export default StoryIndexItem;


// export default class StoryIndexItem extends React.Component{
//     constructor(props){
//         super(props);
//         this.state=this.props.story;
//         this.handleDelete = this.handleDelete.bind(this);
//         this.handleDoubleClick = this.handleDoubleClick.bind(this);
//     }
//     componentDidMount(){
//         $(".AddStoryFormUpdate").hide();
//     }
//     handleDoubleClick(e){
//         $(e.target).children().toggle();
//     }
//     handleDelete(){
//         this.props.deleteStory(this.state);
//     }
//     render(){
//         return(
//             <div className="storyindexitem" onDragStart={this.props.drag} draggable={true} id={`${this.props.story.id}`} onDoubleClick={this.handleDoubleClick}>
//                 <div>
//                     <div className="storyitembox" id={this.props.story.id}>
//                         <div className="storyitems">
//                             <div>Story Name: {this.props.story.name}</div>
//                             <div>Description: {this.props.story.description}</div>
//                             <div>Label: {this.props.story.labels}</div>
//                             <div>Status: {this.props.story.status}</div>
//                         </div>
//                         <button onClick={this.handleDelete} id="trash"><i className="fa fa-trash"  aria-hidden="true"></i></button>
//                         <StoryIndexFormUpdate 
//                             story={this.state}
//                             updateStory={this.props.updateStory}
//                         />
//                 </div>
//                 </div>
//             </div>
//         );
//     }
// }

