import React from 'react';
import SplashContents from './splash_contents';

class Splash extends React.Component{

    render(){
        const display = !this.props.currentUser ? ( <SplashContents /> ) : "";

        return(
            display
        );
    }
}

export default Splash;