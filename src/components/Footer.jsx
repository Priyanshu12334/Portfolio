import { GitHubIcon, InstagramIcon, LinkedInIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span>Priyanshu </span>
            <span className="nav__logo-accent">Suyal</span>
          </a>
          <p className="footer__desc">
            Full Stack Developer building modern web applications, backend systems, and exploring AI-powered solutions.
          </p>
        </div>

        <div className="footer__nav">
          <h4 className="footer__title">Navigation</h4>
          <ul className="footer__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__social-section">
          <h4 className="footer__title">Connect</h4>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/priyanshu-suyal-5732b224a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} color="#0A66C2" />
            </a>
            <a
              href="https://github.com/Priyanshu12334"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon size={20} color="#f0f6fc" />
            </a>
            <a
              href="https://www.instagram.com/priyanshu_suyal_?igsi=MW54MmNqYzhyeTlpOA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Priyanshu Suyal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
