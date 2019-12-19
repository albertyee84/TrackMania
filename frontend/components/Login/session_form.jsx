import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import SocialMedia from '../social_media/social_media';


const SessionForm = props => {
    let i = 0;
    let j = 0;
    let usernametext = "";
    let passwordtext ="";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=> {
        props.clearErrors();
    }, []);

    const handleInput = (type) => {
        return e => {
            if (type === 'username'){
                setUsername(event.target.value);
            } else {
                setPassword(event.target.value);
            }
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.processForm({ username: username, password: password })
        .then(()=> {
            if(!props.errors){
                props.closeModal();
            }
        })
        .then(() => {
            props.history.push('./projects');
        });
        setUsername("");
        setPassword("");
    };

    const handleGuest = e => {
        e.preventDefault();
        typeWriter(username, password);
    };

    const typeWriter = (user1, pw) => {
        let username1 = "guest";
        let password1 = "password";
        let speed = 150;

        if (i < username1.length) {
            usernametext = usernametext + username1.charAt(i);
            setUsername(usernametext);
            i++;
            setTimeout(typeWriter, speed);
        } else if (j < password1.length) {
            passwordtext = passwordtext + password1.charAt(j);
            setPassword(passwordtext);
            j++;
            setTimeout(typeWriter, speed);
        } else {
            const user = Object.assign({}, {username: username1, password: password1});
            props.processForm(user)
                .then(props.closeModal);
            setUsername("");
            setPassword("");
            usernametext = "";
            passwordtext = "";
            i = 0;
            j = 0;
        }
    };

    const display = (props.formType === 'Sign In') ? (
        <div className="Signupbox">
            <a href="*" className="btn" id="guest-btn" onClick={handleGuest}>Guest Sign In</a>
            <label className="cond"> {props.otherForm} </label>

        </div>
    ) :
        (
            <div className="Signupbox">
                <label className="cond">{props.otherForm}</label>

            </div>
        );

    const errors = !props.errors || Object.values(props.errors) === 0 ? (
        ""
    ) : <div>
            <ul>
                {props.errors.map((error, i) => {
                    return (<li key={i}>{error}</li>);
                })}
            </ul>
        </div>;

    return (
        <div className="modalcontents">
            <div className="modalbg"></div>
            <div className="formspacing">
                <div onClick={props.closeModal} className="close-x"></div>
                <form onSubmit={handleSubmit} className="formsss">
                    <h2 className="Form-Title">{props.formType} to continue to TrackMania</h2>
                    <br />
                    <label>Enter Username
                            <input
                            className="user-pw"
                            type="text"
                            value={username}
                            onChange={handleInput('username')}
                        />
                    </label>
                    <label>Enter Password
                            <input
                            className="user-pw"
                            type="password"
                            value={password}
                            onChange={handleInput('password')}
                        />
                    </label>
                    <button className="btn" id="sign-btn">{props.formType}</button>
                    <div>
                        {display}
                        {errors}
                    </div>
                    <SocialMedia />
                </form>
            </div>
        </div>
    );
};

export default withRouter(SessionForm);

// class SessionForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: "",
//             password: "",
//         };
//         this.handleInput = this.handleInput.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleGuest = this.handleGuest.bind(this);
//         this.typeWriter = this.typeWriter.bind(this);

//     }

//     componentDidMount(){
//         this.props.clearErrors();
//     }

//     handleInput(type) {
//         return (e) => {
//             this.setState({ [type]: e.target.value });
//         };
//     }

//     handleSubmit(e) { 
//         e.preventDefault();
//         const user = Object.assign({}, this.state);
//         this.props.processForm(user)
//         .then(this.props.closeModal)
//         .then(() => {
//             this.props.history.push('/projects');
//         });
//         this.setState({
//             username: "",
//             password: "",
//         });
//     }

//     handleGuest(e){
//         e.preventDefault();
//         this.typeWriter();
//     }

//     typeWriter() {
//         let username = "guest";
//         let password = "password";
//         let speed = 150;

//         if (i < username.length) {
//             usernametext = usernametext + username.charAt(i);
//             this.setState({ username: usernametext});
//             i++;
//             setTimeout(this.typeWriter, speed);
//         } else if ( j < password.length) {
//             passwordtext = passwordtext + password.charAt(j);
//             this.setState({ password: passwordtext});
//             j++;
//             setTimeout(this.typeWriter, speed);
//         } else {
//             const user = Object.assign({}, this.state);
//             this.props.processForm(user)
//             .then(this.props.closeModal);
//             this.setState({
//                 username: "",
//                 password: "",
//             });
//             usernametext = "";
//             passwordtext = "";
//             i = 0;
//             j = 0;
//         }
//     }

//     render() {
//         const display = (this.props.formType === 'Sign In') ? (
//             <div className="Signupbox">
//                 <a href="*" className="btn" id="guest-btn" onClick={this.handleGuest}>Guest Sign In</a>
//                 <label className="cond"> {this.props.otherForm} </label>

//             </div>
//         ) :
//             (
//                 <div className="Signupbox">
//                     <label className="cond">{this.props.otherForm}</label>

//                 </div>
//         );

//         const errors = !this.props.errors || Object.values(this.props.errors) === 0 ? (
//             ""
//         ) : <div>
//                 <ul>
//                     {this.props.errors.map((error, i) => {
//                         return (<li key={i}>{error}</li>);
//                     })}
//                 </ul>
//         </div>;

//         return (
//             <div className="modalcontents">
//                 <div className="modalbg"></div>
//                 <div className="formspacing">
//                     <div onClick={this.props.closeModal} className="close-x"></div>
//                         <form onSubmit={this.handleSubmit} className="formsss">
//                             <h2 className="Form-Title">{this.props.formType} to continue to TrackMania</h2>
//                             <br/>
//                             <label>Enter Username
//                                 <input
//                                     className="user-pw"
//                                     type="text"
//                                     value={this.state.username}
//                                     onChange={this.handleInput('username')}
//                                 />
//                             </label>
//                             <label>Enter Password
//                                 <input
//                                     className="user-pw"
//                                     type="password"
//                                     value={this.state.password}
//                                     onChange={this.handleInput('password')}
//                                 />
//                             </label>
//                             <button className="btn" id="sign-btn">{this.props.formType}</button>
//                             <div>
//                                 {display}
//                                 {errors}
//                             </div>
//                             <SocialMedia />
//                         </form>
//                     </div>
//             </div>
//         );
//     }
// }