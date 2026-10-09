import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';

const COMMANDS = {
  about: 'Priyanshu Suyal — Full Stack Developer & B.Tech CSE Graduate building modern web applications, APIs & backend systems.',
  skills: 'Technical Stack: JavaScript, TypeScript, C++, React, Node.js, Express, MongoDB, Redis, Docker, PostgreSQL, Gemini & Groq APIs.',
  projects: 'Featured Projects: TaskPilot (Collaborative Task Management), Wellora (AI Health Companion), ChatCrypt (Realtime Chat Application).',
  contact: 'Email: suyalpriyanshu2@gmail.com | Phone: +91 8006084643 | Location: India',
  whoami: 'user@priyanshu-portfolio:~$ Full Stack Developer open to software development opportunities.',
};

const SECTION_SHORTCUTS = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

const SECTION_COMMANDS = ['about', 'skills', 'projects', 'contact'];

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'info', key: 'name', label: 'name', value: '"Priyanshu Suyal"' },
    { type: 'info', key: 'role', label: 'role', value: '"Full Stack Developer"' },
    { type: 'info', key: 'focus', label: 'focus', value: '"Backend, Web Apps & AI Integrations"' },
    { type: 'info', key: 'stack', label: 'stack', value: '["MERN", "PostgreSQL", "Redis", "Docker"]' },
    { type: 'system', text: "Welcome to Priyanshu's developer terminal." },
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();

    if (!cleanCmd) return;

    if (cleanCmd === 'clear' || cleanCmd === 'reset') {
      setHistory([
        { type: 'info', key: 'name', label: 'name', value: '"Priyanshu Suyal"' },
        { type: 'info', key: 'role', label: 'role', value: '"Full Stack Developer"' },
        { type: 'info', key: 'focus', label: 'focus', value: '"Backend, Web Apps & AI Integrations"' },
        { type: 'info', key: 'stack', label: 'stack', value: '["MERN", "PostgreSQL", "Redis", "Docker"]' },
        { type: 'system', text: "Welcome to Priyanshu's developer terminal." },
      ]);
      setInput('');
      return;
    }

    const output = COMMANDS[cleanCmd] || `Command not found: "${cleanCmd}". Available: about, skills, projects, contact, clear`;

    setHistory((prev) => [
      ...prev,
      { type: 'cmd', text: `$ ${cmdStr}` },
      { type: 'output', text: output },
    ]);

    if (SECTION_COMMANDS.includes(cleanCmd)) {
      const el = document.getElementById(cleanCmd);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    }

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
          dev.shell
        </span>
      </div>

      <div className="hero__terminal-body">
        {history.map((item, idx) => {
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
        <div ref={terminalEndRef} />
      </div>
      <nav className="hero__terminal-quick" aria-label="Section shortcuts">
        {SECTION_SHORTCUTS.map(({ label, id }) => (
          <button
            key={id}
            type="button"
            className="hero__terminal-pill"
            onClick={() => {
              document.getElementById(id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}
