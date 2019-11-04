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
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({
            username: "",
            password: ""
        });
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    render() {

        const display = (this.props.formType === 'Log In') ? (
            <div>
                <Link className="btn" to='/signup'>Sign Up</Link>
            </div>
        ) :
            (
                <div>
                    <Link className="btn" to='/login'>Log In</Link>
                </div>
            );

        const errors = this.props.errors ? (
            <div>
                <ul>
                    {this.props.errors.map(error => {
                        return (<li>{error}</li>);
                    })}
                </ul>
            </div>
        ) : (<div></div>);

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
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