function Navbar() {
    return (
        <header className="navbar">
            <a href="#home" className="nav-logo">
                IF
            </a>

            <nav>
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
