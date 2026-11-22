
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";

type NavbarProps = {
  onOpenCVModal: () => void;
};

function Navbar({ onOpenCVModal }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleCVClick = () => {
    closeMenu();
    onOpenCVModal();
  };

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
        <a href="#research" onClick={closeMenu}>
          Research
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        {/* CV button inside mobile menu */}
        <button
          type="button"
          className="navbar-mobile-cv"
          onClick={handleCVClick}
        >
          Download CV
        </button>
      </nav>

      {/* CV button on desktop */}
      <button
        type="button"
        className="cv-button navbar-desktop-cv"
        onClick={handleCVClick}
      >
        Download CV
      </button>
    </header>
  );
}

export default Navbar;


