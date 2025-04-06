import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`);
  };

  return (
    <section id="contato" className="contact-section">
      <span className="section-label">Entre em Contato</span>
      <h2 className="contact-heading">
        Fale com a nossa equipe especializada e adquira nossos serviços
      </h2>
      <p className="contact-subheading">
        Lorem ipsum dolor sit amet consectetur. Platea viverra nam vitae
        convallis. Orci fringilla imperdiet malesuada ullamcorper facilisis.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label className="contact-label">Primeiro Nome</label>
          <input
            type="text"
            className="contact-input"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <label className="contact-label">E-mail</label>
          <input
            type="email"
            className="contact-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="contact-label">Mensagem</label>
          <textarea
            className="contact-textarea"
            rows="5"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          ></textarea>
        </div>

        <div>
          <button type="submit" className="contact-button">
            <img
              src="/img/Send.png"
              alt="Ícone Enviar"
              className="button-icon"
            />
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
