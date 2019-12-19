import React from 'react';
import SplashContents from './splash_contents';
import { Redirect } from 'react-router-dom';

const Splash = props => {
    const display = !props.currentUser ? (<SplashContents openModal={props.openModal} />) : (<Redirect to='/projects' />);
    return (
        display
    );
};

// class Splash extends React.Component{

//     render(){
//         const display = !this.props.currentUser ? ( <SplashContents openModal={this.props.openModal}/> ) : (<Redirect to='/projects'/>);

//         return(
//             display
//         );
//     }
// }

export default Splash;