import { Download, ArrowRight } from 'lucide-react';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from './SocialIcons';
import Terminal from './Terminal';
import myPhoto from '../assets/my.png';

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero__container container">
        <div className="hero__content">
          {/* Greeting */}
          <p className="hero__greeting">Hi, I'm Priyanshu 👋</p>

          {/* Main title */}
          <h1 className="hero__title">
            <span className="hero__title-line">FULL STACK</span>
            <span className="hero__title-line hero__title-accent">DEVELOPER</span>
          </h1>

          <p className="hero__description">
            Building modern full-stack applications and backend systems, with an interest in practical AI integrations.
          </p>

          {/* CTA Buttons */}
          <div className="hero__buttons">
            <a href="#projects" className="btn btn--primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1Q5iW9xkbe3qHwIKXX1kCIfH0_J5oH2cn?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Availability badge */}
          <div className="hero__availability">
            <span className="hero__avail-dot"></span>
            <span>Open to Software Development Opportunities</span>
          </div>

          {/* Social links */}
          <div className="hero__social">
            <span className="hero__social-title">Connect:</span>
            <div className="hero__social-links">
              <a
                href="https://www.linkedin.com/in/priyanshu-suyal-5732b224a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={22} color="#0A66C2" />
              </a>
              <a
                href="https://github.com/Priyanshu12334"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={22} color="#f0f6fc" />
              </a>
              <a
                href="https://www.instagram.com/priyanshu_suyal_?igsi=MW54MmNqYzhyeTlpOA=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Right column: Photo + Interactive Terminal */}
        <div className="hero__right">
          {/* Profile photo */}
          <div className="hero__image-wrapper">
            <div className="hero__image-container">
              <img src={myPhoto} alt="Priyanshu Suyal" className="hero__img" />
            </div>
          </div>

          {/* Interactive Terminal */}
          <Terminal />
        </div>
      </div>
    </section>
  );
}
