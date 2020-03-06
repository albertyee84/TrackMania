import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <a
        href="https://github.com/albertyee84/TrackMania"
        target="_blank"
        alt="GitHub Repository"
      >
        <i className="fa fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/albert-yee"
        target="_blank"
        alt="LinkedIn Profile"
      >
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="mailto:albertyee84@gmail.com" alt="Send Mail">
        <i className="fa fa-envelope-o"></i>
      </a>
    </div>
  );
}

export default Contact;
