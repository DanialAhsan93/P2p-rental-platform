import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      About
      <Link to="/about-us/mission">
        <div>
          <h1>Our Mission</h1>
        </div>
      </Link>

      <Link to="/about-us/contact">
        <div>
          <h1>Contact Us</h1>
        </div>
      </Link>

    </div>
  )
}

export default About