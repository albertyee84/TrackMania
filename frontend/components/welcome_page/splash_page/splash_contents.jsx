import React from 'react';

class SplashContents extends React.Component{

    render(){
        return(
            <div>
                    <div className="head-element">
                        <div>
                            <h1 className="title">TrackMania is changing how teams build software-one story at a time</h1>
                        </div>
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
                        <h1 className='splash-img1'></h1>
                    </div>
                    <div className='img1'>
                        <h1 className='splash-img2'></h1>
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
                        <h1 className='splash-img3'></h1>
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
                            <a href="/signup" className="Get-Started">Get Started!</a>
                            <br/>
                            <br/>
                        </div>               
                    </div>
 
                    <div className="img-bot"></div>
                </div>
            </div>
        );
    }
}

export default SplashContents;