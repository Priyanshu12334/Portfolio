import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import aiHealthImg from '../assets/ai-health.png';
import chatAppImg from '../assets/chat-app.png';
import TaskPilot from '../assets/TaskPilot.png';

const projects = [
  {
    title: 'TaskPilot - Collaborative Task Management Platform',
    description:
      'Collaborative task platform for creating, assigning, tracking, and managing team tasks efficiently.',
    image: TaskPilot,
    badge: 'Featured',
    tech: [ 'React', 'Node.js','Express.js', 'MongoDB', 'Mongoose', 'Redis', 'Recharts', 'Tailwind CSS', 'Rest API', 'Socket.io', 'JWT Authentication', 'RBAC', 'Docker', 'Gemini API'],
    liveUrl: 'https://taskpilot-ivory.vercel.app/',
    githubUrl: 'https://github.com/Priyanshu12334/taskpilot',
  },
  {
    title: 'Wellora – AI Health Companion',
    description:
      'AI health companion for simplifying medical reports, providing nutrition insights, and tracking personal health.',
    image: aiHealthImg,
    badge: 'AI Powered',
    tech: [ 'React', 'Node.js','Express.js','Groq API', 'Tailwind CSS', 'Recharts','MongoDB', 'Mongoose', 'Rest API', 'JWT Authentication'],
    liveUrl: 'https://ai-health-companion-phi.vercel.app/',
    githubUrl: 'https://github.com/Priyanshu12334/ai-health-companion',
  },
  {
    title: 'ChatCrypt - Realtime Chat Application',
    description:
      'Real-time chat application for instant messaging with secure user authentication and persistent conversations.',
    image: chatAppImg,
    badge: 'Real-Time',
    tech: [ 'React', 'Node.js','Express.js','Tailwind CSS', 'Socket.IO', 'Rest API', 'MongoDB', 'Mongoose', 'JWT Authentication'],
    liveUrl: 'https://fullstack-chat-app-seven-tawny.vercel.app/',
    githubUrl: 'https://github.com/Priyanshu12334/fullstack-chat-app',
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__subtitle">Featured Work</span>
          <h2 className="section__title">Featured Projects</h2>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.title} className="project__card reveal">
              <div className="project__img-container">
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="project__img"
                />
                <div className="project__badge">{project.badge}</div>
              </div>
              <div className="project__content">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__description">{project.description}</p>
                <div className="project__links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--small btn--primary"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--small btn--outline"
                  >
                    <SiGithub size={16} color="#f0f6fc" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
