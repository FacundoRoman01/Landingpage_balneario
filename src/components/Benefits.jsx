import { CheckCircle2 } from "lucide-react";
import whatsappChat from "../assets/whatsapp-chat.jpg";
import "../css/Benefits.css";

const benefits = [
  "Ahorra hasta 15 horas semanales en gestión de reservas",
  "Aumenta tus reservas hasta un 40% con disponibilidad 24/7",
  "Reduce errores humanos en la gestión de servicios",
  "Mejora la satisfacción del cliente con respuestas instantáneas",
  "Accede a estadísticas y métricas en tiempo real",
  "Sin instalación de software, todo funciona en la nube"
];

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-grid">
          
          {/* Image */}
          <div className="benefits-image-wrapper">
            <div className="benefits-image-bg" />
            <img 
              src={whatsappChat} 
              alt="WhatsApp chat interface showing beach reservation conversation" 
              className="benefits-image"
            />
          </div>

          {/* Content */}
          <div className="benefits-content">
            <h2 className="benefits-title">
              Beneficios que <span className="benefits-title-gradient">transforman</span> tu negocio
            </h2>
            <p className="benefits-subtitle">
              Diseñado específicamente para las necesidades de balnearios modernos.
            </p>

            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="benefit-item"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="benefit-icon" />
                  <span className="benefit-text">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
