import React from 'react';
import { Mail, Phone, Linkedin, Github, Code2, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="section__header">
            <span className="section__subtitle">Get In Touch</span>
            <h2 className="section__title">Contact Me</h2>
          </div>

          <div className="contact__card">
            <h3 className="contact__heading">Let's Connect</h3>
            <p className="contact__subtext">
              I am open to full-time roles, software engineering internships, and project collaborations. Feel free to reach out directly via email, phone, or social profiles!
            </p>

            <div className="contact__grid">
              <a href="mailto:suyalpriyanshu2@gmail.com" className="contact__item-card">
                <div className="contact__icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact__label">Email</span>
                  <span className="contact__value">suyalpriyanshu2@gmail.com</span>
                </div>
              </a>

              <a href="tel:+918006084643" className="contact__item-card">
                <div className="contact__icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact__label">Phone</span>
                  <span className="contact__value">+91 8006084643</span>
                </div>
              </a>
            </div>

            <div className="contact__socials-row">
              <a
                href="https://www.linkedin.com/in/priyanshu-suyal-5732b224a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Priyanshu12334"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://leetcode.com/u/Priyanshu_suyal_/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LeetCode"
              >
                <Code2 size={20} />
              </a>
            </div>

            <div className="contact__cta">
              <a href="mailto:suyalpriyanshu2@gmail.com" className="btn btn--primary">
                <span>Let's Connect</span>
                <Send size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
