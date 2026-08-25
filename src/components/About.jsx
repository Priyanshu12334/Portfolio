import React from 'react';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__wrapper reveal">
          <span className="section__subtitle">Get To Know Me</span>
          <h2 className="section__title about__title">About Me</h2>

          <h3 className="about__heading">
            Full Stack Developer <span className="hero__subtitle-separator">|</span> MERN Stack Developer
          </h3>

          <p className="about__text">
            I’m a Full Stack Developer experienced in building web applications using React, Node.js, Express.js, and MongoDB. I enjoy developing REST APIs, authentication and authorization systems, real-time features, AI integrations, debugging issues, and solving practical problems through clean and maintainable code.
          </p>
        </div>
      </div>
    </section>
  );
}
