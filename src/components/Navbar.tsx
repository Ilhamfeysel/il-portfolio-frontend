
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      {/* Animated logo */}
      <a
        href="#home"
        className="navbar-logo"
        aria-label="Ilham Feysel - Home"
        onClick={closeMenu}
      >
        <span className="logo-ring logo-ring-outer" />
        <span className="logo-ring logo-ring-inner" />

        <span className="logo-text">
          IF<span className="logo-dot">.</span>
        </span>
      </a>

      {/* Mobile menu button */}
      <button
        type="button"
        className="navbar-menu-button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
      </button>

      {/* Navigation */}
      <nav
        id="main-navigation"
        className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}
        aria-label="Main navigation"
      >
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#journey" onClick={closeMenu}>
          Journey
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        {/* CV link inside mobile menu */}
        <a
          href="/Ilham-Feysel-CV.pdf"
          className="navbar-mobile-cv"
          onClick={closeMenu}
          download
        >
          Download CV
        </a>
      </nav>

      {/* CV button on desktop */}
      <a
        href="/Ilham-Feysel-CV.pdf"
        className="cv-button navbar-desktop-cv"
        download
      >
        Download CV
      </a>
    </header>
  );
}

export default Navbar;

