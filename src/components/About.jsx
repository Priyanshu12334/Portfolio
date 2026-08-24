import React from 'react';
import { Code2, Linkedin, Github } from 'lucide-react';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__wrapper">
          <span className="section__subtitle">Get To Know Me</span>
          <h2 className="section__title about__title">About Me</h2>

          <h3 className="about__heading">
            Full Stack Developer <span className="hero__subtitle-separator">|</span> MERN Stack Developer
          </h3>

          <p className="about__text">
            I am a Full Stack Developer specializing in building modern and scalable web applications using MongoDB, Express.js, React, and Node.js. I enjoy building clean, maintainable code, designing robust REST APIs, and developing responsive web applications.
          </p>
          <p className="about__text">
            My experience includes real-time applications with Socket.IO, AI API integration, JWT/RBAC-based authentication, and containerized deployments using Docker. I also enjoy debugging and solving complex issues to build reliable and efficient applications.
          </p>

          <div className="about__social">
            <a
              href="https://www.linkedin.com/in/priyanshu-suyal-5732b224a/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Priyanshu12334"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://leetcode.com/u/Priyanshu_suyal_/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LeetCode Profile"
            >
              <Code2 size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
