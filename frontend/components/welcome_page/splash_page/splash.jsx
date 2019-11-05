import React from 'react';
import SplashContents from './splash_contents';
import { Redirect } from 'react-router-dom';

class Splash extends React.Component{

    render(){
        const display = !this.props.currentUser ? ( <SplashContents /> ) : (<Redirect to='/projects'/>);

        return(
            display
        );
    }
}

export default Splash;