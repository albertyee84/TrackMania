import React from 'react';

export default class StoryIndexFormUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.story;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(type) {
        return (e) => {
            this.setState({
                [type]: e.currentTarget.value
            });
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.updateStory(this.state).then(()=>
            // $(".AddStoryFormUpdate").hide(),
            $(".AddStoryFormUpdate").parent().show());
            // $(".storyitembox").show());
    }
    render() {
        return (
            <form id={this.state.id} onSubmit={this.handleSubmit} className="AddStoryFormUpdate">
                <label>Name
                        <input
                        type="text"
                        className="storyinput"
                        onChange={this.handleChange('name')}
                        value={this.state.name} />
                </label>
                <label>Description
                        <input
                        type="text"
                        className="storyinput"
                        onChange={this.handleChange('description')}
                        value={this.state.description} />
                </label>
                <label>Label
                        <input
                        type="text"
                        className="storyinput"
                        onChange={this.handleChange('labels')}
                        value={this.state.labels} />
                </label>
                <input type="submit" value="Update Story/Close"/>
            </form>
        );
    }
}