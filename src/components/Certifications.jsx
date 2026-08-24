import React from 'react';
import { Award, FolderOpen, Code2, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        <div className="section__header">
          <span className="section__subtitle">Credentials & Achievements</span>
          <h2 className="section__title">Certifications & Problem Solving</h2>
        </div>

        <div className="certifications__grid-two">
          {/* Card 1: Certifications */}
          <div className="cert-card-two">
            <div className="cert-card-two__header">
              <div className="cert-card-two__icon">
                <Award size={24} />
              </div>
              <h3 className="cert-card-two__title">Certifications</h3>
            </div>

            <ul className="cert-card-two__list">
              <li>
                <span className="cert-bullet"></span> Cisco Introduction to Cybersecurity
              </li>
              <li>
                <span className="cert-bullet"></span> Skyscanner Front-End Software Engineering Simulation
              </li>
              <li>
                <span className="cert-bullet"></span> Full Stack Web Development
              </li>
            </ul>

            <div className="cert-card-two__action">
              <a
                href="https://drive.google.com/drive/folders/1-_GMiac0KHXIxqb0jUAl1mTZn3uASBDY?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--small btn--primary"
              >
                <FolderOpen size={16} />
                <span>View Certificates</span>
              </a>
            </div>
          </div>

          {/* Card 2: LeetCode & DSA */}
          <div className="cert-card-two">
            <div className="cert-card-two__header">
              <div className="cert-card-two__icon">
                <Code2 size={24} />
              </div>
              <h3 className="cert-card-two__title">LeetCode & DSA</h3>
            </div>

            <div className="cert-card-two__body">
              <div className="dsa-achievement">
                <span className="dsa-count">300+</span>
                <span className="dsa-label">DSA Problems Solved</span>
              </div>
              <p className="dsa-description">
                Consistently practicing Data Structures & Algorithms to strengthen core problem-solving and algorithmic skills.
              </p>
            </div>

            <div className="cert-card-two__action">
              <a
                href="https://leetcode.com/u/Priyanshu_suyal_/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--small btn--outline"
              >
                <ExternalLink size={16} />
                <span>View LeetCode Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
