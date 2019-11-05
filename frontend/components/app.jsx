import React from 'react';

import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import {ProtectedRoute} from '../util/protected_util';

import Welcome from './welcome_page/navbar/navbar_container';
import SplashContainer from './welcome_page/splash_page/splash_container';
import LoginFormContainer from './Login/login_form_container';
import SignupFormContainer from './Login/sign_up_form_container';
import Dashboard from './dashboard/dashboard';


const App = () => {
    return (
        <div>
            <header className="nav-bar-header">
                <Link to='/'>TrackMania</Link>
                <Route path="/" component={Welcome} />
            </header>
            <div>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute exact path="/" component={SplashContainer} />
                <ProtectedRoute path='/dashboard' component={Dashboard} />
            </div>
        </div>
    );
};

export default App;