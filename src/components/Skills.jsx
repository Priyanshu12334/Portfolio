import { BarChart3, Code, Code2, Database, KeyRound, Layout, Network, Server, ShieldCheck, Wrench, Zap } from 'lucide-react';
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedis,
  SiRender,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiGooglegemini,
} from 'react-icons/si';

const skillIcons = {
  'JavaScript (ES6+)': { icon: SiJavascript, color: '#f7df1e' },
  TypeScript: { icon: SiTypescript, color: '#3178c6' },
  'C++': { icon: SiCplusplus, color: '#00599c' },
  HTML: { icon: SiHtml5, color: '#e34f26' },
  CSS: { icon: SiCss, color: '#1572b6' },
  React: { icon: SiReact, color: '#61dafb' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06b6d4' },
  'Context API': { icon: Code2, color: '#a1a1aa' },
  ' Recharts': { icon: BarChart3, color: '#a1a1aa' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'Express.js': { icon: SiExpress, color: '#a1a1aa' },
  'REST APIs': { icon: Network, color: '#a1a1aa' },
  'JWT Authentication': { icon: KeyRound, color: '#a1a1aa' },
  RBAC: { icon: ShieldCheck, color: '#a1a1aa' },
  'Socket.IO': { icon: SiSocketdotio, color: '#a1a1aa' },
  'Gemini API': { icon: SiGooglegemini, color: '#8e75b2' },
  'Groq API': { icon: Zap, color: '#a1a1aa' },
  MongoDB: { icon: SiMongodb, color: '#47a248' },
  Mongoose: { icon: SiMongoose, color: '#880000' },
  MySQL: { icon: SiMysql, color: '#4479a1' },
  SQL: { icon: Database, color: '#a1a1aa' },
  Redis: { icon: SiRedis, color: '#dc382d' },
  Git: { icon: SiGit, color: '#f05032' },
  GitHub: { icon: SiGithub, color: '#f0f6fc' },
  Docker: { icon: SiDocker, color: '#2496ed' },
  'Docker Compose': { icon: SiDocker, color: '#2496ed' },
  Postman: { icon: SiPostman, color: '#ff6c37' },
  'Redis Cloud': { icon: SiRedis, color: '#dc382d' },
  Vercel: { icon: SiVercel, color: '#ffffff' },
  Render: { icon: SiRender, color: '#46e3b7' },
  default: { icon: Code2, color: '#a1a1aa' },
};

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
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'RBAC','Socket.IO', 'Gemini API', 'Groq API'],
  },
  {
    title: 'Databases & Caching',
    icon: <Database size={18} />,
    skills: ['MongoDB', 'Mongoose', 'MySQL', 'SQL', 'Redis'],
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
                {cat.skills.map((skill) => {
                  const { icon: SkillIcon, color } = skillIcons[skill] ?? skillIcons.default;
                  return (
                    <span key={skill} className="skill-badge skill-badge--compact">
                      <SkillIcon className="skill-badge__icon" style={{ color }} aria-hidden="true" />
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
