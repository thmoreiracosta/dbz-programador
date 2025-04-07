import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Semana do Zero ao Programador Contratado - Dev em Dobro - 2025 &copy; Copyright - Todos os direitos reservados</p>
        
        <div className="social-links">
          <a href="https://github.com/thmoreiracosta" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/thmoreiracosta/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin" /> LinkedIn
          </a>
          <a href="https://www.instagram.com/studio.thiagocosta/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram" /> Instagram
          </a>
          <a href="https://wa.me/5585991040729" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-whatsapp" /> WhatsApp
          </a>
        </div>

        <div className="footer-credit">
          <p>Desenvolvido com <span role="img" aria-label="heart">❤️</span> por 
            <a href="https://github.com/thmoreiracosta/dbz-programador" target="_blank" rel="noopener noreferrer"> Thiago Costa</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
