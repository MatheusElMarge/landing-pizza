import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/img/Logo.png" alt="Logo da Pizzaria" />
      </div>
      <p className="footer-endereco">
        Endereço 
      </p>
      <p className="footer-endereco">
      Av. Brasil, 74 - Foz do Iguaçu - CEP
      </p>
      <p className="footer-endereco">
      85851-000      </p>
    </footer>
  );
}

export default Footer;
