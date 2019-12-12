import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SocialMedia from '../social_media/social_media';

let i = 0;
let j = 0;
let usernametext = "";
let passwordtext ="";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
        this.typeWriter = this.typeWriter.bind(this);

    }

    componentDidMount(){
        this.props.clearErrors();
    }
    
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) { 
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        .then(this.props.closeModal)
        .then(() => {
            this.props.history.push('/projects');
        });
        this.setState({
            username: "",
            password: "",
        });
    }
    
    handleGuest(e){
        e.preventDefault();
        this.typeWriter();
    }
  
    typeWriter() {
        let username = "guest";
        let password = "password";
        let speed = 150;

        if (i < username.length) {
            usernametext = usernametext + username.charAt(i);
            this.setState({ username: usernametext});
            i++;
            setTimeout(this.typeWriter, speed);
        } else if ( j < password.length) {
            passwordtext = passwordtext + password.charAt(j);
            this.setState({ password: passwordtext});
            j++;
            setTimeout(this.typeWriter, speed);
        } else {
            const user = Object.assign({}, this.state);
            this.props.processForm(user)
            .then(this.props.closeModal);
            this.setState({
                username: "",
                password: "",
            });
            usernametext = "";
            passwordtext = "";
            i = 0;
            j = 0;
        }
    }

    render() {
        const display = (this.props.formType === 'Sign In') ? (
            <div className="Signupbox">
                <a href="*" className="btn" id="guest-btn" onClick={this.handleGuest}>Guest Sign In</a>
                <label className="cond"> {this.props.otherForm} </label>
                
            </div>
        ) :
            (
                <div className="Signupbox">
                    <label className="cond">{this.props.otherForm}</label>
                    
                </div>
        );

        const errors = !this.props.errors || Object.values(this.props.errors) === 0 ? (
            ""
        ) : <div>
                <ul>
                    {this.props.errors.map((error, i) => {
                        return (<li key={i}>{error}</li>);
                    })}
                </ul>
        </div>;

        return (
            <div className="modalcontents">
                <div className="modalbg"></div>
                <div className="formspacing">
                    <div onClick={this.props.closeModal} className="close-x"></div>
                        <form onSubmit={this.handleSubmit} className="formsss">
                            <h2 className="Form-Title">{this.props.formType} to continue to TrackMania</h2>
                            <br/>
                            <label>Enter Username
                                <input
                                    className="user-pw"
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInput('username')}
                                />
                            </label>
                            <label>Enter Password
                                <input
                                    className="user-pw"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInput('password')}
                                />
                            </label>
                            <button className="btn" id="sign-btn">{this.props.formType}</button>
                            <div>
                                {display}
                                {errors}
                            </div>
                            <SocialMedia />
                        </form>
                    </div>
            </div>
        );
    }
}

export default withRouter(SessionForm);