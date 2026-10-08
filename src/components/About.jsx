import React from 'react';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__wrapper reveal">
          <span className="section__subtitle">Get To Know Me</span>
          <h2 className="section__title about__title">About Me</h2>

          <h3 className="about__heading">
            Full Stack Developer <span className="hero__subtitle-separator">|</span> MERN Stack
          </h3>

          <p className="about__text">
           Full Stack Developer building scalable web applications, APIs, real-time systems, and AI-powered solutions using modern frontend, backend, database, and cloud technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
