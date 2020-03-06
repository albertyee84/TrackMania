import React from 'react';
import { Link } from 'react-router-dom';
import Header from './util/header';

const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <div className="hero-headline">
        <p>Collaborate with Confidence</p>
        <div className="hero-tagline">
          TrackMania, a better way to develop
          <div className="hero-action">
            <Link className="button" to="/signup">
              Sign up for free
            </Link>
            <p>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
      {/* <div className='hero-footer'>
      </div> */}
    </div>
  );
}

export default Hero;
