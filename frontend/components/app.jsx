import React from 'react';
import { Link, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import {ProtectedRoute} from '../util/protected_util';
import Navbar from './welcome_page/navbar/navbar_container';
import SplashContainer from './welcome_page/splash_page/splash_container';
import ProjectsContainer from './projects/projects_container';
import Modal from './modal/modal';
import loggedinNavbarContainer from './welcome_page/navbar/loggedinNavbar_container';
import StoryIndex from './story/story_index_container';



const App = () => {
    return (
        <div>
            <Modal />
            <div>
                    <AuthRoute exact path="/" component={Navbar} />
                    <AuthRoute exact path="/" component={SplashContainer} />
                    <ProtectedRoute path="/" component={loggedinNavbarContainer} />
                <Switch>
                    <ProtectedRoute path='/projects/:project_id/stories' component={StoryIndex} />
                    <ProtectedRoute exact path='/projects' component={ProjectsContainer} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </div>
    );
};

export default App;