import '../styles/Header.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      <div className="logo">
        <img src="/img/Logo.png" alt="Logo da Pizzaria" />
      </div>

      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <a href="#section" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
      </nav>

      <div className="whatsapp">
        <a 
          href="https://wa.me/5545988041417?text=Oi%20mensagem%0A" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
      <img src="/img/WhatsappIcon.png" alt="WhatsApp" className="whatsapp-icon" />       
        Entre em contato
        </a>
      </div>
    </header>
  );
}

export default Header;
