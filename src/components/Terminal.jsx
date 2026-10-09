import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';

const COMMANDS = {
  about: 'Priyanshu Suyal — Full Stack Developer & B.Tech CSE Graduate building modern web applications, APIs & backend systems.',
  skills: 'Technical Stack: JavaScript, TypeScript, C++, React, Node.js, Express, MongoDB, Redis, Docker, PostgreSQL, Gemini & Groq APIs.',
  projects: 'Featured Projects: TaskPilot (Collaborative Task Management), Wellora (AI Health Companion), ChatCrypt (Realtime Chat Application).',
  contact: 'Email: suyalpriyanshu2@gmail.com | Phone: +91 8006084643 | Location: India',
  experience: 'Work Experience: Full Stack Developer Intern at The Entrepreneurship Network (Remote) | Jul 2026 – Oct 2026 — built React, Node.js, Express & MongoDB apps with JWT/RBAC authentication.',
  education: 'Education: B.Tech in Computer Science & Engineering (2022 – 2026) at Graphic Era Hill University, Bhimtal | CGPA: 7.35 / 10.',
  certifications: 'Certifications: Full Stack Web Development (Udemy), SQL Bootcamp (Udemy), Front-End Software Engineering Job Simulation (Forage), AWS Cloud Practitioner Essentials (AWS).',
  whoami: 'user@priyanshu-portfolio:~$ Full Stack Developer open to software development opportunities.',
};

const AVAILABLE_COMMANDS = [...Object.keys(COMMANDS), 'clear'].join(', ');

// Commands that also scroll to their matching portfolio section.
const COMMAND_SECTIONS = [
  'about',
  'projects',
  'skills',
  'experience',
  'education',
  'certifications',
  'contact',
];

const SECTION_SHORTCUTS = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

const INITIAL_HISTORY = [
  {
    type: 'code',
    parts: [
      { className: 'hero__terminal-key', text: 'const' },
      { className: 'hero__terminal-val', text: ' developer' },
      { className: 'hero__terminal-sep', text: ' = {' },
    ],
  },
  {
    type: 'code',
    parts: [
      { className: 'hero__terminal-key', text: '  name' },
      { className: 'hero__terminal-sep', text: ': ' },
      { className: 'hero__terminal-val', text: '"Priyanshu Suyal"' },
      { className: 'hero__terminal-sep', text: ',' },
    ],
  },
  {
    type: 'code',
    parts: [
      { className: 'hero__terminal-key', text: '  role' },
      { className: 'hero__terminal-sep', text: ': ' },
      { className: 'hero__terminal-val', text: '"Full Stack Developer"' },
      { className: 'hero__terminal-sep', text: ',' },
    ],
  },
  {
    type: 'code',
    parts: [
      { className: 'hero__terminal-key', text: '  focus' },
      { className: 'hero__terminal-sep', text: ': ' },
      { className: 'hero__terminal-val', text: '"Backend, Web Apps & AI Integrations"' },
      { className: 'hero__terminal-sep', text: ',' },
    ],
  },
  {
    type: 'code',
    lineClass: 'hero__terminal-line--stack',
    parts: [
      { className: 'hero__terminal-key', text: '  stack' },
      { className: 'hero__terminal-sep', text: ': ' },
      { className: 'hero__terminal-val', text: '["MERN", "PostgreSQL", "Redis", "Docker"]' },
      { className: 'hero__terminal-sep', text: ',' },
    ],
  },
  {
    type: 'code',
    parts: [{ className: 'hero__terminal-sep', text: '};' }],
  },
  { type: 'system', text: "Welcome to Priyanshu's developer terminal." },
];

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(INITIAL_HISTORY);

  const terminalOutputRef = useRef(null);

  useEffect(() => {
    const outputEl = terminalOutputRef.current;
    if (outputEl) {
      outputEl.scrollTop = outputEl.scrollHeight;
    }
  }, [history]);

  const scrollToSection = (id) => {
    const sectionEl = document.getElementById(id);
    if (sectionEl && typeof sectionEl.scrollIntoView === 'function') {
      sectionEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const executeCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();

    if (!cleanCmd) return;

    if (cleanCmd === 'clear' || cleanCmd === 'reset') {
      clearTerminal();
      return;
    }

    const output = COMMANDS[cleanCmd] || `Command not found: "${cleanCmd}". Available: ${AVAILABLE_COMMANDS}`;

    setHistory((prev) => [
      ...prev,
      { type: 'cmd', text: `$ ${cmdStr}` },
      { type: 'output', text: output },
    ]);

    setInput('');

    if (COMMAND_SECTIONS.includes(cleanCmd)) {
      scrollToSection(cleanCmd);
    }
  };

  const clearTerminal = () => {
    setHistory(INITIAL_HISTORY);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <div className="hero__terminal">
      <div className="hero__terminal-bar">
        <span className="hero__terminal-dot hero__terminal-dot--red"></span>
        <span className="hero__terminal-dot hero__terminal-dot--yellow"></span>
        <span className="hero__terminal-dot hero__terminal-dot--green"></span>
        <span className="hero__terminal-title">
          <TerminalIcon size={12} />
          developer.js
        </span>
        <button type="button" className="hero__terminal-clear" onClick={clearTerminal}>
          Clear
        </button>
      </div>

      <div className="hero__terminal-body">
        <div className="hero__terminal-output" ref={terminalOutputRef}>
        {history.map((item, idx) => {
          if (item.type === 'code') {
            return (
              <div key={idx} className={`hero__terminal-line hero__terminal-line--info ${item.lineClass || ''}`}>
                {item.parts.map((part, partIdx) => (
                  <span key={partIdx} className={part.className}>
                    {part.text}
                  </span>
                ))}
              </div>
            );
          }
          if (item.type === 'info') {
            return (
              <div key={idx} className="hero__terminal-line hero__terminal-line--info">
                <span className="hero__terminal-key">{item.label}</span>
                <span className="hero__terminal-sep"> → </span>
                <span className="hero__terminal-val">{item.value}</span>
              </div>
            );
          }
          if (item.type === 'cmd') {
            return (
              <div key={idx} className="hero__terminal-line hero__terminal-line--user">
                <span className="hero__terminal-prompt-text">{item.text}</span>
              </div>
            );
          }
          if (item.type === 'output') {
            return (
              <div key={idx} className="hero__terminal-line hero__terminal-line--out">
                <span className="hero__terminal-out-text">{item.text}</span>
              </div>
            );
          }
          return (
            <div key={idx} className="hero__terminal-line hero__terminal-line--sys">
              <span className="hero__terminal-sys-text">{item.text}</span>
            </div>
          );
        })}
        </div>

        <form onSubmit={handleSubmit} className="hero__terminal-input-form">
          <span className="hero__terminal-prompt">$</span>
          <input
            type="text"
            className="hero__terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type a command..."
            aria-label="Developer terminal command input"
          />
          <button type="submit" className="hero__terminal-submit" aria-label="Run command">
            <CornerDownLeft size={12} />
          </button>
        </form>
      </div>
      <nav className="hero__terminal-quick" aria-label="Section shortcuts">
        {SECTION_SHORTCUTS.map(({ label, id }) => (
          <button
            key={id}
            type="button"
            className="hero__terminal-pill"
            onClick={() => scrollToSection(id)}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}
