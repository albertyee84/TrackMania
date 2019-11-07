import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../../social_media/social_media';


class SplashContents extends React.Component{
    
    render(){
        const openModal = this.props.openModal;
        return(
            <div>
                    <div className="head-element">
                        <h1 className="title">TrackMania is changing how teams build software one story at a time</h1>
                        <img className="banner" src="/assets/splash.png" alt="" />
                    </div>
                <div className="splash">
                    <div className="statement">
                        <h2>Proven project management for successful teams</h2>
                        <br/>
                        <p className="special-statement">With a shared view of team priorities, a process that fosters collaboration, and dynamic tools to analyze progress, your team will deliver more frequently and consistently.</p>

                    </div>

                    <div className='img1'>
                        <div className="img-statements">
                            <h2>Better organization to get focused</h2>
                            <br/>
                            <p className="regular-statement"><b>Keep your team on the rails.</b> Tracker's shared backlog makes priorities clear so the team can stay organized. Easily visualize scope, focus your teamwork, and stay nimble when circumstances change.</p>
                        </div>
                        <img src="/assets/img2.svg" alt=""/>
                        <h1 className='splash-img1'></h1>
                    </div>
                    <div className='img1'>
                        <img src="/assets/img4.svg" alt="" />
                        <div className="img-statements">
                            <h2>Tools to help you adapt and evolve</h2>
                            <br/>
                            <p className="regular-statement"><b>Get more work done, more often.</b> Tracker's guided iteration planning helps you break down and prioritize projects into manageable chunks so the team can keep the momentum toward delivering.</p>
                        </div>
                    </div>

                    <div className='img1'>
                        <div className="img-statements">
                            <h2>Team transparency at a glance</h2>
                            <br/>
                            <p className="regular-statement"><b>No more surprises.</b> With a shared, clear view of your team's work, everyone has a real-time, single source of truth. A quick scan explains your team's status, who's responsible for what, and what's coming next.</p>
                        </div>
                        <img src="/assets/img3.svg" alt="" />
                    </div>
                    <div className="img2">
                        <div className="splash-text">
                            <h1>A better way to develop</h1>
                            <br/>
                            <p className="lala">Succeeding in an evolving tech landscape requires a time-tested process and a tool your team can rely on. Tracker's modern workflow helps your team keep the pace and adapt when needs change.</p>
                            <br/>
                            <br/>
                            <h1>
                                Ready to get your team on track? Try us free for 30 days.
                            </h1>
                            <br/>
                            <br/>
                            {/* <Link to="/signup" className="Get-Started">Get Started!</Link> */}
                            <button className="Get-Started" onClick={() => openModal('signup')}>Get Started!</button>
                            <br/>
                            <br/>
                        </div>               
                    </div>
 
                    <div className="img-bot"></div>
                    <SocialMedia />
                </div>
            </div>
        );
    }
}

export default SplashContents;