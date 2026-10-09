import { Briefcase, FolderOpen } from 'lucide-react';

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__subtitle">Career History</span>
          <h2 className="section__title">Work Experience</h2>
        </div>

        <div className="experience__timeline">
          <div className="timeline__item reveal">
            <div className="timeline__marker">
              <Briefcase size={18} />
            </div>
            <div className="timeline__content">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">Full Stack Developer Intern</h3>
                  <h4 className="timeline__company">
                    The Entrepreneurship Network <span className="timeline__type">• Remote</span>
                  </h4>
                </div>
                <span className="timeline__date">Jul 2026 – Oct 2026</span>
              </div>
              <ul className="timeline__details">
                <li>
                  Built and maintained web applications using React, Node.js, Express.js, and MongoDB.
                </li>
                <li>
                  Implemented authentication and authorization using JWT and RBAC.
                </li>
                <li>
                  Used Git/GitHub for version control and collaborative development.
                </li>
              </ul>
              <div className="timeline__documents">
                <a
                  href="https://drive.google.com/drive/folders/1o7HHg73INfLTHqYlxgOUT8VojL6WnZo8?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--small btn--outline"
                >
                  <FolderOpen size={16} />
                  <span>View Documents</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
