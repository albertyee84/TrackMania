import React from 'react';
import SocialMedia from '../social_media/social_media';

export default class ProjectFooter extends React.Component{

    render(){
        return(
            <div className="dashboardfooter">
                <div className="dashboardfootercontents">
                    About TrackMania Labs | Help & Support | Status | Blog | Privacy & Cookie Policy | Tracker Agreement | Contact Us
                    </div>
                <SocialMedia />
            </div>
        );
    }
}