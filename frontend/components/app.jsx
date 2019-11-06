import React from 'react';

import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import {ProtectedRoute} from '../util/protected_util';

import Navbar from './welcome_page/navbar/navbar_container';
import SplashContainer from './welcome_page/splash_page/splash_container';
import LoginFormContainer from './Login/login_form_container';
import SignupFormContainer from './Login/sign_up_form_container';
import Projects from './projects/projects';
import Modal from './modal/modal';


const App = () => {
    return (
        <div>
            <Modal />
            <header className="nav-bar-header">
                <Link to='/' className="Project-Name">TrackMania</Link>
                <Route path="/" component={Navbar} />
            </header>
            <div>
                {/* <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} /> */}
                <AuthRoute exact path="/" component={SplashContainer} />
                <ProtectedRoute path='/projects' component={Projects} />
            </div>
        </div>
    );
};

export default App;