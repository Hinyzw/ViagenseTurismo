// Header.jsx
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <span>Viagens e Turismo</span>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#about" className="nav-link">Sobre</a>
          <a href="#cities" className="nav-link">Cidades</a>
          <a href="#contact" className="nav-link">Contatos</a>
        </nav>
      </div>
    </header>
  );
}
