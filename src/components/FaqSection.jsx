import { useState } from 'react';
import '../styles/FaqSection.css';

const faqs = [
  {
    question: 'Pizza é boa?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.',
  },
  {
    question: 'Vende pizza?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.',
  },
  {
    question: 'Tem pizza de calabresa?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.',
  },
  {
    question: 'Tem delivery?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.',
  },
  {
    question: 'Entrega de bike?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.',
  }
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-content">
        <span className="faq-label">FAQ</span>
        <h2 className="faq-title">Tire todas as suas dúvidas sobre nosso processo de produção!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. <span className="highlight">Etiam pellentesque</span> gravida eu egestas sed quis donec ipsum eu. In viverra velit.
        </p>

        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <strong>{faq.question}</strong>
              <img
                src={openIndex === index ? '/img/minus-circle.png' : '/img/plus-circle.png'}
                alt={openIndex === index ? 'Fechar' : 'Abrir'}
                className="faq-icon"
              />
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <div className="faq-image">
        <img src="/img/Frame2.png" alt="Pizza" />
      </div>
    </section>
  );
}

export default FaqSection;
