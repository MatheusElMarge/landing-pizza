import { useEffect, useState } from 'react';
import '../styles/Section.css';

function Section() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageSrc = isMobile ? '/img/Frame1_Mobile.png' : '/img/Frame1.png';

  return (
    <section id="section" className="section">
      <div className="section-image">
        <img src={imageSrc} alt="Pizza artesanal" />
      </div>

      <div className="section-content">
        <span className="section-label">Por que escolher Pizza SVG</span>
        <h2 className="section-title">A melhor Pizza com o melhor atendimento da cidade</h2>

        <div className="section-features">
          <div className="feature">
            <div className="icon-box">
              <img src="/img/HandIcon.png" alt="massa" className="custom-icon" />
            </div>
            <div>
              <strong>Lorem ipsum dolor</strong>
              <p className="section-description">Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.</p>
            </div>
          </div>

          <div className="feature">
            <div className="icon-box">
              <img src="/img/ToolsIcon.png" alt="ingredientes" className="custom-icon" />
            </div>
            <div>
              <strong>Lorem ipsum dolor</strong>
              <p className="section-description">Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.</p>
            </div>
          </div>

          <div className="feature">
            <div className="icon-box">
              <img src="/img/CardIcon.png" alt="entrega" className="custom-icon" />
            </div>
            <div>
              <strong>Lorem ipsum dolor</strong>
              <p className="section-description">Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
