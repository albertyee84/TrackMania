import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './Login/login_form_container';
import SignupFormContainer from './Login/sign_up_form_container';
import { AuthRoute } from '../util/route_util';
import Welcome from './welcome_page/welcome_container';


const App = () => {
    return (
        <div>
            <header className="nav-bar-header">
                TrackMania
                <Route path="/" component={Welcome} />
            </header>
            <div>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />

            </div>
        </div>
    );
};

export default App;