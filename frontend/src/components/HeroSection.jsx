import React from 'react';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/herosection.jpg" alt="restaurant" />
      <div className="item">
        <h3 align="center">Events Organizer</h3>
        <div>
          <h1>Professional and Personal Events!</h1>
          <p>
            Wanna Conduct Event?Book here👇🏻
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;