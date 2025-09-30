import { Workflow, Bot, Rocket } from "lucide-react";
import "../css/HowItWorks.css";

const steps = [
  {
    icon: Workflow,
    number: "01",
    title: "Configura tu perfil",
    description: "Crea tu cuenta y configura los servicios, precios y disponibilidad de tu balneario en minutos."
  },
  {
    icon: Bot,
    number: "02",
    title: "Entrena tu IA",
    description: "Personaliza las respuestas y el comportamiento del asistente para que refleje la identidad de tu negocio."
  },
  {
    icon: Rocket,
    number: "03",
    title: "Comienza a operar",
    description: "Activa tu número de WhatsApp y dashboard. Tus clientes pueden empezar a reservar inmediatamente."
  }
];

const HowItWorks = () => {
  return (
    <section className="how-section">
      {/* Background decoration */}
      <div className="how-bg-circle" />

      <div className="how-container">
        <div className="how-header">
          <h2 className="how-title">
            Simple, rápido y <span className="how-title-gradient">efectivo</span>
          </h2>
          <p className="how-subtitle">
            Comienza a digitalizar tu balneario en 3 sencillos pasos
          </p>
        </div>

        <div className="how-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="how-step" style={{ animationDelay: `${index * 150}ms` }}>
                
                {/* Connector line */}
                {index < steps.length - 1 && <div className="how-connector" />}

                <div className="how-step-content">
                  {/* Number badge */}
                  <div className="how-step-number">{step.number}</div>

                  {/* Icon */}
                  <div className="how-step-icon">
                    <Icon className="how-step-icon-svg" />
                  </div>

                  {/* Text */}
                  <h3 className="how-step-title">{step.title}</h3>
                  <p className="how-step-desc">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
