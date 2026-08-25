import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import taskpilotImg from '../assets/taskpilot.png';
import aiHealthImg from '../assets/ai-health.png';
import chatAppImg from '../assets/chat-app.png';

const projects = [
  {
    title: 'TaskPilot - Collaborative Task Management Platform',
    description:
      'MERN task management platform with JWT authentication, RBAC, real-time Socket.IO chat, analytics dashboard, and Docker containerization.',
    image: taskpilotImg,
    badge: 'Featured',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO', 'JWT', 'RBAC', 'Docker'],
    liveUrl: 'https://taskpilot-ivory.vercel.app/',
    githubUrl: 'https://github.com/Priyanshu12334/taskpilot',
  },
  {
    title: 'Wellora – AI Health Companion',
    description:
      'AI health application powered by Groq API, featuring OCR medical report simplification, an intelligent nutrition engine, and health tracking.',
    image: aiHealthImg,
    badge: 'AI Powered',
    tech: ['React', 'Node.js', 'Express.js', 'Groq API', 'OCR Engine', 'MongoDB'],
    liveUrl: 'https://ai-health-companion-phi.vercel.app/',
    githubUrl: 'https://github.com/Priyanshu12334/ai-health-companion',
  },
  {
    title: 'ChatCrypt - Realtime Chat Application',
    description:
      'Real-time messaging platform using Socket.IO, WebSockets, MongoDB data persistence, and secure JWT authentication.',
    image: chatAppImg,
    badge: 'Real-Time',
    tech: ['React', 'Node.js', 'Express.js', 'Socket.IO', 'WebSockets', 'MongoDB', 'JWT'],
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
                <div className="project__tech-stack">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
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
                    <Github size={16} /> GitHub
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
