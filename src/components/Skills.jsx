import React from 'react';
import { Code, Layout, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Code size={18} />,
    skills: ['C++', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    icon: <Layout size={18} />,
    skills: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: <Server size={18} />,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Socket.IO'],
  },
  {
    title: 'Database',
    icon: <Database size={18} />,
    skills: ['MongoDB', 'Mongoose', 'MySql', 'SQL'],
  },
  {
    title: 'Tools',
    icon: <Wrench size={18} />,
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Vercel', 'Render'],
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__subtitle">Technical Expertise</span>
          <h2 className="section__title">Skills</h2>
        </div>

        <div className="skills__grid skills__grid--compact">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skills__card skills__card--compact reveal">
              <div className="skills__card-header">
                <div className="skills__icon-wrapper">{cat.icon}</div>
                <h3 className="skills__card-title">{cat.title}</h3>
              </div>
              <div className="skills__pills">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-badge skill-badge--compact">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
