import '../styles/MiddleSection.css';

function MiddleSection() {
  const handleClick = () => {
    window.open('https://wa.me/5545988041417?text=Oi%20mensagem%0A', '_blank'); 
  };

  return (
    <section className="middle-section">
      <h2>Ainda tem dúvidas sobre Pizza?</h2>
      <p>Entre em contato direto com nossos atendentes.</p>
      <button className="whatsapp-button" onClick={handleClick}>
        <img src="/img/WhatsappWhiteIcon.png" alt="WhatsApp" className="whatsapp-icon" />
        Entrar em contato
      </button>
    </section>
  );
}

export default MiddleSection;