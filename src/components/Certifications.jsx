import { Award, FolderOpen, Code2 } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

// All issued certificates are hosted in this shared Google Drive folder.
// Replace any `url` below with the certificate's direct credential link when available.
const CERTIFICATES_FOLDER_URL =
  'https://drive.google.com/drive/folders/1-_GMiac0KHXIxqb0jUAl1mTZn3uASBDY?usp=drive_link';

const CERTIFICATIONS_LIST = [
  {
    id: 'full-stack-web-development',
    name: 'Full Stack Web Development',
    issuer: 'Udemy',
    url: CERTIFICATES_FOLDER_URL,
  },
  {
    id: 'sql-bootcamp',
    name: 'SQL Bootcamp',
    issuer: 'Udemy',
    url: CERTIFICATES_FOLDER_URL,
  },
  {
    id: 'front-end-software-engineering-forage',
    name: 'Front-End Software Engineering Job Simulation',
    issuer: 'Forage',
    url: CERTIFICATES_FOLDER_URL,
  },
  {
    id: 'aws-cloud-practitioner-essentials',
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    url: CERTIFICATES_FOLDER_URL,
  },
];

export default function Certifications() {
  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__subtitle">Credentials & Achievements</span>
          <h2 className="section__title">Certifications & Problem Solving</h2>
        </div>

        <div className="certifications__grid-two">
          {/* Card 1: Certifications */}
          <div className="cert-card-two reveal">
            <div className="cert-card-two__header">
              <div className="cert-card-two__icon">
                <Award size={22} />
              </div>
              <h3 className="cert-card-two__title">Certifications</h3>
            </div>

            <ul className="cert-card-two__list">
              {CERTIFICATIONS_LIST.map(({ id, name, issuer }) => (
                <li key={id}>
                  <span className="cert-bullet"></span>
                  <span className="cert-card-two__item">
                    <span className="cert-card-two__item-name">
                      {name}
                      <span className="cert-card-two__item-issuer"> — {issuer}</span>
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="cert-card-two__action">
              <a
                href={CERTIFICATES_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--small btn--outline"
              >
                <FolderOpen size={16} />
                <span>View Certificates</span>
              </a>
            </div>
          </div>

          {/* Card 2: DSA & Problem Solving */}
          <div className="cert-card-two reveal">
            <div className="cert-card-two__header">
              <div className="cert-card-two__icon">
                <Code2 size={22} />
              </div>
              <h3 className="cert-card-two__title">DSA & Problem Solving</h3>
            </div>

            <div className="cert-card-two__body">
              <div className="dsa-achievement">
                <span className="dsa-count">300+</span>
                <span className="dsa-label">DSA Problems Solved</span>
              </div>
              <p className="dsa-description">
                Active problem solver practicing Data Structures & Algorithms on LeetCode.
              </p>
            </div>

            <div className="cert-card-two__action">
              <a
                href="https://leetcode.com/u/Priyanshu_suyal_/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--small btn--outline certifications__leetcode-button"
              >
                <SiLeetcode size={16} color="#FFA116" />
                <span>View LeetCode Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
