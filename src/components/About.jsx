import React from 'react';

const highlights = [
  'Full-Stack Web Applications',
  'RESTful APIs & Backend Architecture',
  'Real-Time WebSockets & Caching',
  'AI / LLM API Integrations',
  'Database Design (SQL & NoSQL)',
  'Docker & Cloud Deployment',
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__wrapper reveal">
          <div className="section__header about__header">
            <span className="section__subtitle">Get To Know Me</span>
            <h2 className="section__title">About Me</h2>
          </div>

          <div className="about__content">
            <p className="about__text">
              I'm a <strong>Full Stack Developer</strong> and B.Tech CSE graduate focused on building
              performant web applications, reliable backend systems, and clean user interfaces.
              I prioritize maintainable code, robust database architecture, and practical AI integrations.
            </p>

            <p className="about__text">
              My core toolkit is the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js),
              alongside technologies like Redis, Socket.IO, Docker, PostgreSQL, MySQL, and LLM APIs (Gemini & Groq).
            </p>

            <div className="about__highlights">
              {highlights.map((item) => (
                <div key={item} className="about__highlight-item">
                  <span className="about__highlight-dot"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
