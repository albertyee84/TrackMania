import React from 'react';
import { Link } from 'react-router-dom';

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

    handleSubmit(e) { 
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => {
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

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    render() {
        const display = (this.props.formType === 'Sign In') ? (
            <div>
                <label>Don't have an account?  
                    <Link className="btn" to='/signup'>Sign Up</Link>
                </label>
                <br/>
                <a href="*" onClick={this.handleGuest}>Guest Sign In</a>
            </div>
        ) :
            (
                <div>
                    <label>Have an account?
                        <Link className="btn" to='/login'>Sign In</Link>
                    </label>
                    
                </div>
            );
        const errors = !this.props.errors || Object.values(this.props.errors) === 0 ? (
            ""
        ) : <div>
                <ul>
                    {this.props.errors.map(error => {
                        return (<li>{error}</li>);
                    })}
                </ul>
            </div>;

        return (
            <div className="formspacing">
                <Link to='/' className="logo">TrackMania</Link>
                <div className="SignIn-SignUp">
                    <form onSubmit={this.handleSubmit}>
                        <div className="formspacing">
                        </div>
                            <h2>{this.props.formType}</h2>
                            <br />
                            <div>Sign in to continue to TrackerMania</div>
                            <br />

                        <label>Username:
                            <input
                                type="text"
                                placeholder="Enter Username"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                            />
                        </label>
                        <br/>
                        <label>Password:
                            <input
                                type="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                        </label>
                        <button className="btn">{this.props.formType}</button>
                    <div className="Signupbox">
                        {display}
                        {errors}
                    </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default SessionForm;