import { useState, useEffect, useRef } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    const focusTimeout = window.setTimeout(() => toggleRef.current?.focus(), 0);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const menuLinks = menuRef.current?.querySelectorAll('a[href]');
      if (!menuLinks?.length || !toggleRef.current) return;

      const firstElement = menuLinks[0];
      const lastElement = toggleRef.current;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(focusTimeout);
      toggleRef.current?.focus();
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    const targetId = href.substring(1);

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname);
      }
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
      setActiveSection(targetId);
    }
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={(e) => handleNavClick(e, '#home')}>
          <span className="nav__logo-text">Priyanshu </span>
          <span className="nav__logo-accent">Suyal</span>
        </a>

        <div
          className={`nav__backdrop ${isMenuOpen ? 'show-backdrop' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <div
          id="mobile-navigation"
          ref={menuRef}
          className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`}
          aria-label="Mobile navigation"
        >
          <div className="nav__menu-header">
            <span className="nav__menu-label">Navigation</span>
          </div>
          <ul className="nav__list">
            {navItems.map(item => (
              <li key={item.name} className="nav__item">
                <a
                  href={item.href}
                  className={`nav__link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                  aria-current={activeSection === item.href.substring(1) ? 'location' : undefined}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          ref={toggleRef}
          className={`nav__toggle ${isMenuOpen ? 'is-open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="nav__toggle-line" />
          <span className="nav__toggle-line" />
          <span className="nav__toggle-line" />
        </button>
      </nav>
    </header>
  );
}
