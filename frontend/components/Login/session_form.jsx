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
        this.props.processForm(user);
        this.setState({
            username: "",
            password: "",
        });
        this.props.history.push('/projects');
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
                <Link className="btn" to='/signup'>Sign Up</Link>
                <br/>
                <a href="*" onClick={this.handleGuest}>Guest Sign In</a>
            </div>
        ) :
            (
                <div>
                    <Link className="btn" to='/login'>Sign In</Link>
                    
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
            <div className="SignIn-SignUp">
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    <label>Username:
                        <input
                            type="text"
                            placeholder="Enter Username"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button>{this.props.formType}</button>
                </form>
                <div>
                    {display}
                    {errors}
                </div>
            </div>
        );
    }

}

export default SessionForm;