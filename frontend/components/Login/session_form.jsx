import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SocialMedia from '../social_media/social_media';

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
        this.setState({
            username: "guest",
            password: "password"
        });
        
    }

    render() {
        const display = (this.props.formType === 'Sign In') ? (
            <div className="Signupbox">
                <a href="*" className="btn" id="guest-btn" onClick={this.handleGuest}>Guest Sign In</a>
                <label>Don't have an account?  
                    {this.props.otherForm}
                </label>
            </div>
        ) :
            (
                <div className="Signupbox">
                    <label>Have an account?
                            {this.props.otherForm}
                    </label>
                    
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
                <img src="/assets/banner6.png" className="modalbg" alt="" />
                <div className="formspacing">
                    <div onClick={this.props.closeModal} className="close-x"></div>
                    <Link to='/' className="logo">TrackMania</Link>
                    <div className="SignIn-SignUp">
                        <form onSubmit={this.handleSubmit}>
                                <div className="formtype">
                                    <h2 className="Form-Title">{this.props.formType}</h2>
                                </div>
                            <label>
                                <input
                                    className="user-pw"
                                    type="text"
                                    placeholder="Enter Username"
                                    value={this.state.username}
                                    onChange={this.handleInput('username')}
                                />
                            </label>
                            <br/>
                            <label> 
                                <input
                                    className="user-pw"
                                    type="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.handleInput('password')}
                                />
                            </label>
                            <br/>
                            <button className="btn" id="sign-btn">{this.props.formType}</button>
                        <div>
                            {display}
                            {errors}
                        </div>
                        </form>
                    </div>
                    <SocialMedia />
                </div>
            </div>
        );
    }

}

export default withRouter(SessionForm);