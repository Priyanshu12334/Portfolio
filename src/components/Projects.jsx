import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import aiHealthImg from '../assets/ai-health.png';
import chatAppImg from '../assets/chat-app.png';
import TaskPilot from '../assets/taskpilot.png';

const projects = [
  {
    id: 'TaskPilot',
    title: 'TaskPilot',
    tagline: 'Collaborative Task Management Platform',
    problem: 'Teams needed a unified platform to create, assign, track, and manage tasks across members with real-time updates and role-based access.',
    solution: 'Built a full-stack collaborative task management system with real-time sync, role-based access control, visual analytics, and AI-powered task assistance.',
    image: TaskPilot,
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Redis', 'Recharts', 'Tailwind CSS', 'REST API', 'Socket.io', 'JWT Auth', 'RBAC', 'Docker', 'Gemini API'],
    features: [
      'Real-time task updates via Socket.IO',
      'Role-based access control (RBAC)',
      'Redis caching for performance',
      'Dockerized deployment',
      'Gemini AI task assistant',
    ],
    liveUrl: 'https://taskpilot-ivory.vercel.app/',
    githubUrl: 'https://github.com/Priyanshu12334/taskpilot',
  },
  {
    id: 'Wellora',
    title: 'Wellora',
    tagline: 'AI Health Companion',
    problem: 'Medical reports are complex and inaccessible for most users, and personal health tracking is fragmented across multiple tools.',
    solution: 'Built an AI-powered health companion that simplifies medical reports, provides nutrition insights, and enables personal health tracking in one place.',
    image: aiHealthImg,
    tech: ['React', 'Node.js', 'Express.js', 'Groq API', 'Tailwind CSS', 'Recharts', 'MongoDB', 'Mongoose', 'REST API', 'JWT Auth'],
    features: [
      'AI medical report simplification via Groq API',
      'Nutrition insights & health tracking',
      'Interactive data charts with Recharts',
      'Secure JWT authentication',
    ],
    liveUrl: 'https://ai-health-companion-phi.vercel.app/',
    githubUrl: 'https://github.com/Priyanshu12334/ai-health-companion',
  },
  {
    id: 'ChatCrypt',
    title: 'ChatCrypt',
    tagline: 'Realtime Chat Application',
    problem: 'Users needed a reliable, secure, real-time messaging platform with persistent conversation history and instant message delivery.',
    solution: 'Built a full-stack real-time chat app using Socket.IO for instant messaging, JWT for secure authentication, and MongoDB for persistent conversations.',
    image: chatAppImg,
    tech: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'Socket.IO', 'REST API', 'MongoDB', 'Mongoose', 'JWT Auth'],
    features: [
      'Real-time messaging with Socket.IO',
      'JWT-based secure authentication',
      'Persistent conversation history',
      'RESTful API backend',
    ],
    liveUrl: 'https://fullstack-chat-app-seven-tawny.vercel.app/',
    githubUrl: 'https://github.com/Priyanshu12334/fullstack-chat-app',
  },
];

export default function Projects() {
  const [openDetails, setOpenDetails] = useState({});
  const [mountedDetails, setMountedDetails] = useState({});
  const [visibleDetails, setVisibleDetails] = useState({});
  const animationFrames = useRef({});

  useEffect(() => {
    Object.entries(openDetails).forEach(([projectId, detail]) => {
      if (detail && mountedDetails[projectId] === detail) {
        animationFrames.current[projectId] = requestAnimationFrame(() => {
          setVisibleDetails((current) => ({ ...current, [projectId]: detail }));
          delete animationFrames.current[projectId];
        });
      }
    });

    return () => {
      Object.values(animationFrames.current).forEach(cancelAnimationFrame);
      animationFrames.current = {};
    };
  }, [openDetails, mountedDetails]);

  const toggleDetail = (projectId, detail) => {
    const isClosing = openDetails[projectId] === detail;
    setOpenDetails((current) => ({
      ...current,
      [projectId]: current[projectId] === detail ? null : detail,
    }));

    if (isClosing) {
      setVisibleDetails((current) => ({ ...current, [projectId]: null }));
      if (visibleDetails[projectId] !== detail) {
        setMountedDetails((current) => ({ ...current, [projectId]: null }));
      }
    } else {
      setMountedDetails((current) => ({ ...current, [projectId]: detail }));
    }
  };

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__subtitle">Featured Work</span>
          <h2 className="section__title">Featured Projects</h2>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project__card reveal"
              style={{ zIndex: openDetails[project.id] ? 10 : undefined }}
            >
              {/* Screenshot */}
              <div className="project__img-container">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className={`project__img ${project.id === 'Wellora' ? 'project__img--wellora' : ''} ${project.id === 'ChatCrypt' ? 'project__img--chatcrypt' : ''}`}
                />
              </div>

              <div className="project__content">
                <div className="project__title-block">
                  <h3 id={`${project.id}-title`} className="project__title">{project.title}</h3>
                  <p className="project__tagline">{project.tagline}</p>
                </div>

                <div
                  className={`project__detail-actions ${openDetails[project.id] ? 'is-hidden' : ''}`}
                  role="group"
                  aria-label={`${project.title} details`}
                  aria-hidden={Boolean(openDetails[project.id])}
                  inert={openDetails[project.id] ? '' : undefined}
                >
                  {[
                    { id: 'problem', label: 'Problem & Solution' },
                    { id: 'features', label: 'Key Features' },
                    { id: 'tech', label: 'Tech Stack' },
                  ].map(({ id, label }) => {
                    const isOpen = openDetails[project.id] === id;
                    return (
                      <button
                        key={id}
                        id={`${project.id}-${id}-trigger`}
                        type="button"
                        className={`project__detail-button ${isOpen ? 'is-active' : ''}`}
                        aria-expanded={isOpen}
                        aria-controls={`${project.id}-detail-panel`}
                        onClick={() => toggleDetail(project.id, id)}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                <div className="project__links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--small btn--primary"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--small btn--outline"
                  >
                    <SiGithub size={15} color="#f0f6fc" />
                    GitHub
                  </a>
                </div>

                <div
                  id={`${project.id}-detail-panel`}
                  className={`project__detail-panel ${mountedDetails[project.id] ? 'is-mounted' : ''} ${visibleDetails[project.id] ? 'is-open' : ''}`}
                  role="region"
                  aria-labelledby={openDetails[project.id]
                    ? `${project.id}-${openDetails[project.id]}-trigger`
                    : `${project.id}-title`}
                  aria-hidden={!openDetails[project.id]}
                  inert={openDetails[project.id] ? undefined : ''}
                  onTransitionEnd={(event) => {
                    if (
                      event.target === event.currentTarget
                      && event.propertyName === 'opacity'
                      && !openDetails[project.id]
                    ) {
                      setMountedDetails((current) => ({ ...current, [project.id]: null }));
                    }
                  }}
                >
                  {mountedDetails[project.id] && (
                    <>
                      <div className="project__detail-panel-header">
                        <h4 className="project__detail-panel-title">
                          {mountedDetails[project.id] === 'problem' && 'Problem & Solution'}
                          {mountedDetails[project.id] === 'features' && 'Key Features'}
                          {mountedDetails[project.id] === 'tech' && 'Tech Stack'}
                        </h4>
                        <button
                          type="button"
                          className="project__detail-close"
                          aria-label={`Close ${project.title} details`}
                          onClick={() => toggleDetail(project.id, openDetails[project.id])}
                        >
                          Close
                        </button>
                      </div>
                      {mountedDetails[project.id] === 'problem' && (
                        <div className="project__case">
                          <div className="project__case-block">
                            <span className="project__case-label">Problem</span>
                            <p className="project__case-text">{project.problem}</p>
                          </div>
                          <div className="project__case-block">
                            <span className="project__case-label project__case-label--green">Solution</span>
                            <p className="project__case-text">{project.solution}</p>
                          </div>
                        </div>
                      )}

                      {mountedDetails[project.id] === 'features' && (
                        <div className="project__features">
                          <span className="project__features-label">Key Technical Features</span>
                          <ul className="project__features-list">
                            {project.features.map((feature) => (
                              <li key={feature} className="project__feature-item">
                                <span className="project__feature-dot" aria-hidden="true" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {mountedDetails[project.id] === 'tech' && (
                        <div className="project__tech-stack">
                          {project.tech.map((technology) => (
                            <span key={technology} className="tech-tag">{technology}</span>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
