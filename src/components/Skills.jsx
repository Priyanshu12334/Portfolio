import { Code, Layout, Server, Database, Wrench, Zap } from 'lucide-react';
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
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
import { Code2, DatabaseZap, KeyRound, Network, ShieldCheck } from 'lucide-react';

const GroqIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 33 33" aria-hidden="true">
    <path fill="#F43E01" d="M.54.39h32v32h-32z" />
    <path fill="#fff" d="m18.445 4.406-9.468 13.74 7.341.665-1.69 9.578 9.469-13.74-7.342-.664 1.69-9.579Z" />
  </svg>
);

const OpenAIIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
  </svg>
);

const skillIcons = {
  'JavaScript (ES6+)': { icon: SiJavascript, color: '#f7df1e' },
  TypeScript: { icon: SiTypescript, color: '#3178c6' },
  'C++': { icon: SiCplusplus, color: '#00599c' },
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
  'Groq API': { icon: GroqIcon, color: '#f43e01' },
  LangChain: { icon: SiLangchain, color: '#00A67E' },
  RAG: { icon: DatabaseZap, color: '#8b5cf6' },
  'LLM API Integration': { icon: OpenAIIcon, color: '#10a37f' },
  'Prompt Engineering': { icon: Code, color: '#a1a1aa' },
  MongoDB: { icon: SiMongodb, color: '#47a248' },
  Mongoose: { icon: SiMongoose, color: '#880000' },
  PostgreSQL: { icon: SiPostgresql, color: '#336791' },
  MySQL: { icon: SiMysql, color: '#4479a1' },
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
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'RBAC', 'Socket.IO'],
  },
  {
    title: 'Databases',
    icon: <Database size={18} />,
    skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    title: 'DevOps & Tools',
    icon: <Wrench size={18} />,
    skills: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Postman', 'Redis Cloud', 'Vercel', 'Render'],
  },
  {
    title: 'AI / GenAI Integrations',
    icon: <Zap size={18} />,
    skills: ['Gemini API', 'Groq API', 'LangChain', 'RAG', 'LLM API Integration'],
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
