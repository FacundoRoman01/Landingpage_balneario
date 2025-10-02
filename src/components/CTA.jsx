import { ArrowRight, Sparkles } from "lucide-react";
import "../css/CTA.css";

const CTA = () => {
  return (
    <section className="cta-section">
      {/* Background decorations */}
      <div className="cta-bg-overlay" />
      <div className="cta-bg-circle cta-circle-top" />
      <div className="cta-bg-circle cta-circle-bottom" />

      <div className="cta-container">
        <div className="cta-content">
          {/* Icon */}
          <div className="cta-icon">
            <Sparkles className="cta-icon-svg" />
          </div>

          {/* Heading */}
          <h2 className="cta-title">
            ¿Listo para <span className="cta-title-gradient">transformar</span> tu balneario?
          </h2>

          {/* Description */}
          <p className="cta-desc">
            Únete a los balnearios que ya están automatizando su operación y mejorando la experiencia de sus clientes.
          </p>

          {/* CTA Buttons */}
          {/* <div className="cta-buttons">
            <button className="btn-accent group">
              Comenzar ahora gratis
              <ArrowRight className="btn-icon" />
            </button>
            <button className="btn-outline">
              Agendar demo personalizada
            </button>
          </div> */}

          {/* Trust badges */}
          <div className="cta-badges">
            <div className="cta-badge">
              {/* <span className="cta-badge-icon">✔</span>
              <span>Sin tarjeta de crédito</span> */}
            </div>
            <div className="cta-badge">
              <span className="cta-badge-icon">✔</span>
              <span>Configuración en 5 minutos</span>
            </div>
            <div className="cta-badge">
              <span className="cta-badge-icon">✔</span>
              <span>Soporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
