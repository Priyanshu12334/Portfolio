import { Code, Layout, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Code size={18} />,
    skills: ['JavaScript (ES6+)', 'TypeScript', 'C++'],
  },
  {
    title: 'Frontend',
    icon: <Layout size={18} />,
    skills: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Context API', ' Recharts'],
  },
  {
    title: 'Backend',
    icon: <Server size={18} />,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Socket.IO', 'Gemini API', 'Groq API'],
  },
  {
    title: 'Databases',
    icon: <Database size={18} />,
    skills: ['MongoDB', 'MySQL', 'Redis'],
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={18} />,
    skills: ['Git', 'GitHub', 'Docker','Docker Compose', 'Postman', 'Redis Cloud', 'Vercel', 'Render'],
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
