import React, { useState, useEffect } from 'react';

class ProjectSearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.userId,
            search: "",
            archived: false,
            all: false,
            id: 100000000000,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleArchive = this.handleArchive.bind(this);
        this.handleActive = this.handleActive.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.searchProject(this.state);
        this.setState({
            search: ""
        });
    }

    handleChange(e) {
        this.setState({
            search: e.currentTarget.value
        },
            () => {
                this.props.searchProject(this.state);
        });
    }

    handleClear(e) {
        this.setState({
            search: ""
        },
            () => {
                this.props.searchProject(this.state);
            });
    }

    handleArchive(e) {
        this.setState({
            archived: true
        },
            () => {
                this.props.requestAllUsersProjects(this.state);
            }
        );
    }

    handleActive(e) {
        this.setState({
            archived: false
        },
            () => {
                this.props.requestAllUsersProjects(this.state);
            }
        );
    }

    render(){
        let status;

        let clear;

        this.state.archived ? status = "Archived" : status = "Active";

        this.state.search.length > 0 ? clear = (<div className="clear" onClick={this.handleClear}>clear</div>) : "";
        return(
            <div className="searchbar">
                <form className="searchbarform"
                    onSubmit={this.handleSubmit}>
                    <div className="searchbarinput">
                        <i className="fa fa-search" />
                        <input
                            className="inputbox"
                            type="text"
                            value={this.state.search}
                            placeholder={`Search ${status} Projects`}
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            id=""
                        />
                    </div>
                    {clear}
                </form>
                <button className="activearchivebuttons" onClick={this.handleActive}>Active</button>
                <button className="activearchivebuttons" onClick={this.handleArchive}>Archived</button>
            </div>
        );
    }
}

// let ProjectSearchBar = props => {
//     let [userId, setUserId] = useState(props.userId);
//     let [search, setSearch] = useState("");
//     let [archived, setArchived] = useState(false);
//     let [all, setAll] = useState(false);
//     let [id, setId] = 10000000000;

//     const handleSubmit = e => {
//         e.preventDefault();
//         props.searchProject({ user_id: userId, search: search, archived: archived, all: all, id: id});
//         setSearch("");
//     };

//     const handleChange = e => {
//         setSearch(e.currentTarget.value);
//         props.searchProject({ user_id: userId, search: search, archived: archived, all: all, id: id });
//     };

//     const handleClear = e => {
//         setSearch("");
//         props.searchProject({ user_id: userId, search: search, archived: archived, all: all, id: id });
//     };

//     const handleArchive = e => {
//         setArchived(true);
//         props.requestAllUsersProjects({ user_id: userId, search: search, archived: archived, all: all, id: id });
//     };

//     const handleActive = e => {
//         setArchived(false);
//         props.requestAllUsersProjects({ user_id: userId, search: search, archived: archived, all: all, id: id });
//     };

//     let status;

//     let clear;

//     archived ? status = "Archived" : status = "Active";

//     search.length > 0 ? clear = (<div className="clear" onClick={handleClear}>clear</div>) : "";

//     return(
//         <div className="searchbar">
//             <form className="searchbarform"
//                 onSubmit={handleSubmit}>
//                 <div className="searchbarinput">
//                     <i className="fa fa-search" />
//                     <input
//                         className="inputbox"
//                         type="text"
//                         value={search}
//                         placeholder={`Search ${status} Projects`}
//                         onChange={handleChange}
//                         onSubmit={handleSubmit}
//                         id=""
//                     />
//                 </div>
//                 {clear}
//             </form>
//             <button className="activearchivebuttons" onClick={handleActive}>Active</button>
//             <button className="activearchivebuttons" onClick={handleArchive}>Archived</button>
//         </div>
//     );
// }

export default ProjectSearchBar;