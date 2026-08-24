import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section__header">
          <span className="section__subtitle">Career History</span>
          <h2 className="section__title">Work Experience</h2>
        </div>

        <div className="experience__timeline">
          <div className="timeline__item">
            <div className="timeline__marker">
              <Briefcase size={18} />
            </div>
            <div className="timeline__content">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">MERN Stack Developer Intern</h3>
                  <h4 className="timeline__company">
                    Webstack Academy <span className="timeline__type">• Remote</span>
                  </h4>
                </div>
                <span className="timeline__date">Jun 2026 – Jul 2026</span>
              </div>
              <ul className="timeline__details">
                <li>
                  Built and maintained web applications using MongoDB, Express.js, React, and Node.js.
                </li>
                <li>
                  Implemented authentication and authorization using JWT and RBAC.
                </li>
                <li>
                  Used Git/GitHub for version control and collaborative development.
                </li>
                <li>
                  Worked with Vercel and Render for deployment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
