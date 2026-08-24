import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <div className="section__header">
          <span className="section__subtitle">Academic Background</span>
          <h2 className="section__title">Education</h2>
        </div>

        <div className="education__grid">
          <div className="education__card">
            <div className="education__icon">
              <GraduationCap size={28} />
            </div>
            <div className="education__content">
              <span className="education__year">2022 – 2026</span>
              <h3 className="education__degree">Bachelor of Technology (B.Tech) - CSE</h3>
              <h4 className="education__school">Graphic Era Hill University, Bhimtal</h4>
              <div className="education__score">
                <span className="score-label">CGPA:</span>
                <span className="score-value">7.35 / 10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
