import { Code, Layout, Server, Database, Wrench, Zap, Sparkles } from 'lucide-react';
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRender,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiGooglegemini,
  SiGoogle,
} from 'react-icons/si';
import { Code2, DatabaseZap, KeyRound, Network, ShieldCheck } from 'lucide-react';

const GroqIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 33 33" aria-hidden="true">
    <path fill="#F43E01" d="M.54.39h32v32h-32z" />
    <path fill="#fff" d="m18.445 4.406-9.468 13.74 7.341.665-1.69 9.578 9.469-13.74-7.342-.664 1.69-9.579Z" />
  </svg>
);

const skillIcons = {
  'JavaScript (ES6+)': { icon: SiJavascript, color: '#f7df1e' },
  TypeScript: { icon: SiTypescript, color: '#3178c6' },
  'C++': { icon: SiCplusplus, color: '#00599c' },
  SQL: { icon: DatabaseZap, color: '#4479A1' },
  HTML: { icon: SiHtml5, color: '#e34f26' },
  CSS: { icon: SiCss, color: '#1572b6' },
  React: { icon: SiReact, color: '#61dafb' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06b6d4' },
  'Context API': { icon: Code2, color: '#a1a1aa' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'Express.js': { icon: SiExpress, color: '#a1a1aa' },
  'REST APIs': { icon: Network, color: '#a1a1aa' },
  'JWT Authentication': { icon: KeyRound, color: '#a1a1aa' },
  RBAC: { icon: ShieldCheck, color: '#a1a1aa' },
  'Socket.IO': { icon: SiSocketdotio, color: '#a1a1aa' },
  'Gemini API': { icon: SiGooglegemini, color: '#4285f4' },
  'OAuth 2.0': { icon: SiGoogle, color: '#4285F4' },
  'Groq API': { icon: GroqIcon, color: '#f43e01' },
  LangChain: { icon: SiLangchain, color: '#1C3C3C' },
  RAG: { icon: DatabaseZap, color: '#8b5cf6' },
  'LLM API Integration': { icon: Network, color: '#a1a1aa' },
  'Prompt Engineering': { icon: Sparkles, color: '#A78BFA' },
  MongoDB: { icon: SiMongodb, color: '#47a248' },
  Mongoose: { icon: SiMongoose, color: '#880000' },
  PostgreSQL: { icon: SiPostgresql, color: '#336791' },
  'Prisma ORM': { icon: SiPrisma, color: '#2D3748' },
  MySQL: { icon: SiMysql, color: '#4479a1' },
  Redis: { icon: SiRedis, color: '#dc382d' },
  Git: { icon: SiGit, color: '#f05032' },
  GitHub: { icon: SiGithub, color: '#f0f6fc' },
  'GitHub Actions': { icon: SiGithubactions, color: '#2088FF' },
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
    title: 'Programming Languages',
    icon: <Code size={18} />,
    skills: ['JavaScript (ES6+)', 'TypeScript', 'C++'],
  },
  {
    title: 'Frontend',
    icon: <Layout size={18} />,
    skills: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Context API'],
  },
  {
    title: 'Backend',
    icon: <Server size={18} />,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'OAuth 2.0', 'RBAC', 'Socket.IO'],
  },
  {
    title: 'Databases & Query',
    icon: <Database size={18} />,
    skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Prisma ORM', 'MySQL', 'Redis', 'SQL'],
  },
  {
    title: 'DevOps & Tools',
    icon: <Wrench size={18} />,
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'GitHub Actions', 'Vercel', 'Render'],
  },
  {
    title: 'AI / GenAI Integrations',
    icon: <Zap size={18} />,
    skills: ['Gemini API', 'Groq API', 'LLM API Integration', 'LangChain', 'RAG', 'Prompt Engineering'],
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__subtitle">Technical Expertise</span>
          <h2 className="section__title">Technical Stack</h2>
        </div>

        <div className="skills__grid--compact">
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
