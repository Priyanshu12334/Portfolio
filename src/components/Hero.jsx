import React from 'react';
import { Download, ArrowRight, Github, Linkedin, Code2 } from 'lucide-react';
import myPhoto from '../assets/my.png';

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">
            Hi, I'm <span className="nav__logo-accent">Priyanshu Suyal</span>
          </h1>
          <h2 className="hero__subtitle">
            Full Stack Developer <span className="hero__subtitle-separator">|</span> MERN Stack Developer
          </h2>
          <p className="hero__description">
            B.Tech CSE Graduate and Full Stack Developer passionate about building scalable, production-grade web applications using <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>. Focused on building clean architectures and RESTful APIs, with experience in JWT authentication, authorization, real-time features, AI integration, debugging, and user-friendly web applications.
          </p>

          <div className="hero__buttons">
            <a href="#projects" className="btn btn--primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1Q5iW9xkbe3qHwIKXX1kCIfH0_J5oH2cn?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="hero__social">
            <span className="hero__social-title">Connect with me:</span>
            <div className="hero__social-links">
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

        <div className="hero__image-wrapper">
          <div className="hero__image-container">
            <img src={myPhoto} alt="Priyanshu Suyal" className="hero__img" />
          </div>
        </div>
      </div>
    </section>
  );
}
