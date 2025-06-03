export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Mundo Urbano - Todos os direitos reservados</p>
          <p>Desenvolvido com React + Vite</p>
        </div>
      </footer>
    );
  }