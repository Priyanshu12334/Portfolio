import React from 'react';
import { Linkedin, Github, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span>Priyanshu </span>
            <span className="nav__logo-accent">Suyal</span>
          </a>
          <p className="footer__desc">
            MERN Stack Developer committed to building performant, modern, and scalable web solutions.
          </p>
        </div>

        <div className="footer__nav">
          <h4 className="footer__title">Navigation</h4>
          <ul className="footer__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__social-section">
          <h4 className="footer__title">Connect</h4>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/priyanshu-suyal-5732b224a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Priyanshu12334"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://leetcode.com/u/Priyanshu_suyal_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <Code2 size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Priyanshu Suyal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
