import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
           <a href="#home" className="navbar-logo" aria-label="Ilham Feysel - Home">
  <span className="logo-ring logo-ring-outer" />
  <span className="logo-ring logo-ring-inner" />

  <span className="logo-text">
    IF<span className="logo-dot">.</span>
  </span>
</a>

<nav className="navbar-links" aria-label="Main navigation">
  <a href="#projects">Projects</a>
  <a href="#skills">Skills</a>
  <a href="#journey">Journey</a>
  <a href="#contact">Contact</a>
</nav>
            <a href="/Ilham-Feysel-CV.pdf" className="cv-button">
        Download CV
      </a>
        </header>

    );
}
export default Navbar;
