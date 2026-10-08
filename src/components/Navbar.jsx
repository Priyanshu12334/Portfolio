import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={closeMenu}>
          <span className="nav__logo-text">Priyanshu </span>
          <span className="nav__logo-accent">Suyal</span>
        </a>

        <div
          className={`nav__backdrop ${isMenuOpen ? 'show-backdrop' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <div id="mobile-navigation" className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            {navItems.map(item => (
              <li key={item.name} className="nav__item">
                <a
                  href={item.href}
                  className={`nav__link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
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
