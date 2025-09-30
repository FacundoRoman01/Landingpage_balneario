import { MessageSquare, Calendar, BarChart3, Shield, Zap, Brain } from "lucide-react";
import "../css/Features.css";

const features = [
  {
    icon: Calendar,
    title: "Reservas Automáticas",
    description: "Tus clientes reservan carpas, sombrillas y camastros sin intervención manual. Sistema inteligente de disponibilidad en tiempo real."
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Personalizado",
    description: "Cada balneario tiene su propio número. Atención 24/7 con respuestas instantáneas sobre precios, servicios y disponibilidad."
  },
  {
    icon: Brain,
    title: "IA con RAG",
    description: "Chat inteligente que conoce únicamente los datos de tu balneario. Respuestas precisas y contextuales para cada consulta."
  },
  {
    icon: BarChart3,
    title: "Dashboard Inteligente",
    description: "Gestiona reservas, visualiza estadísticas y controla tus servicios desde un panel web moderno y seguro."
  },
  {
    icon: Shield,
    title: "Multi-tenant Seguro",
    description: "Todos tus datos permanecen privados y separados. Máxima seguridad y confidencialidad garantizada."
  },
  {
    icon: Zap,
    title: "Entrena tu IA",
    description: "Configura y entrena tus propios agentes de IA de forma sencilla, sin conocimientos técnicos."
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Todo lo que necesitas en{" "}
            <span className="features-title-gradient">una plataforma</span>
          </h2>
          <p className="features-subtitle">
            Potencia tu balneario con tecnología de vanguardia diseñada específicamente para el sector.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="feature-card" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="feature-icon">
                  <Icon className="feature-icon-svg" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
