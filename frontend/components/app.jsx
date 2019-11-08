import React from 'react';

import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import {ProtectedRoute} from '../util/protected_util';

import Navbar from './welcome_page/navbar/navbar_container';
import SplashContainer from './welcome_page/splash_page/splash_container';
import ProjectsContainer from './projects/projects_container';
import Modal from './modal/modal';


const App = () => {
    return (
        <div>
            <Modal />
            <header className="nav-bar-header">
                <Link to='/' className="Project-Name"><div className="projectname-beg">Track</div><div className="projectname-end">Mania</div></Link>
                <Route exact path="/" component={Navbar} />
            </header>
            <div>
                <AuthRoute exact path="/" component={SplashContainer} />
                <ProtectedRoute path='/projects' component={ProjectsContainer} />
            </div>
        </div>
    );
};

export default App;