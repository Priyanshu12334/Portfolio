import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import aiHealthImg from '../assets/ai-health.png';
import chatAppImg from '../assets/chat-app.png';
import TaskPilot from '../assets/taskpilot.png';
import leadFlowImg from '../assets/LeadFlow.png';

const projects = [
  {
    id: 'LeadFlow',
    title: 'LeadFlow',
    tagline: 'AI-Powered Lead Follow-Up Platform',
    problem: 'Following up with leads from Google Sheets is repetitive and makes it difficult to personalize outreach while keeping track of drafts and review.',
    solution: 'LeadFlow converts Google Sheets leads into personalized Gemini-generated Gmail drafts with per-user quotas and draft tracking. All emails require human review before sending.',
    image: leadFlowImg,
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Axios', 'Node.js', 'Express', 'Google APIs', 'Gemini API', 'PostgreSQL', 'Prisma 7', 'Google OAuth 2.0', 'Encrypted Refresh Tokens'],
    features: [
      'Imports lead data from Google Sheets',
      'Generates personalized Gmail drafts with Gemini AI',
      'Tracks processed leads and per-user quotas',
      'Human review before sending; never sends automatically',
      'Google OAuth 2.0 with secure session cookies and encrypted refresh tokens',
    ],
    liveUrl: 'https://get-ai-leadflow.vercel.app',
    githubUrl: 'https://github.com/Priyanshu12334/leadflow-ai',
  },
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
    tagline: 'AI-Powered Health & Wellness Platform',
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
    problem: 'Users need a simple and private way to connect and chat with others in real time.',
    solution: 'Built a real-time chat platform with unique usernames, secure authentication, instant messaging, and persistent chat history.',
    image: chatAppImg,
    tech: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'Socket.IO', 'REST API', 'MongoDB', 'Mongoose', 'JWT Auth'],
    features: [
      'Connect with users using unique usernames',
      'Real-time messaging with Socket.IO',
      'JWT-based secure authentication',
      'Persistent conversation history',
    ],
    liveUrl: 'https://fullstack-chat-app-seven-tawny.vercel.app/',
    githubUrl: 'https://github.com/Priyanshu12334/fullstack-chat-app',
  },
];

function Amp() {
  return <span className="amp">&amp;</span>;
}

function renderAmpersands(text) {
  return text.split('&').flatMap((part, index) => (
    index === 0 ? [part] : [<Amp key={`${index}-${part}`} />, part]
  ));
}

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
    setOpenDetails(Object.fromEntries(
      projects.map(({ id }) => [id, id === projectId && !isClosing ? detail : null]),
    ));

    if (isClosing) {
      setVisibleDetails((current) => ({ ...current, [projectId]: null }));
      if (visibleDetails[projectId] !== detail) {
        setMountedDetails((current) => ({ ...current, [projectId]: null }));
      }
    } else {
      setVisibleDetails((current) => Object.fromEntries(
        Object.keys(current).map((id) => [id, null]),
      ));
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
            >
              {/* Screenshot */}
              <div className="project__img-container">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project__img"
                />
              </div>

              <div className="project__content">
                <div className="project__title-block">
                  <h3 id={`${project.id}-title`} className="project__title">{project.title}</h3>
                  <p className="project__tagline">{renderAmpersands(project.tagline)}</p>
                </div>

                <div
                  className="project__detail-actions"
                  role="group"
                  aria-label={`${project.title} details`}
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
                        <span className="project__detail-label">{renderAmpersands(label)}</span>
                      </button>
                    );
                  })}
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
                          {mountedDetails[project.id] === 'problem' && renderAmpersands('Problem & Solution')}
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
                                {renderAmpersands(feature)}
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
