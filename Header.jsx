import linkedin from './assets/linkedin.jpg';
import instagram from './assets/instagram.jpg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="left">
      <a href="#" className="logo-link">Akshay Ahlawat</a></div>

      <nav className="center-nav">

        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">contact</a>
        <a href="/your_resume.pdf" download>Resume</a>
      </nav>

      <div className="right-icons">
        <a href="https://www.linkedin.com/in/akshay-ahlawat-a2004225a" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/akshayahlawat_" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </header>
  );
}

export default Header;
