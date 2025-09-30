import { ArrowRight, Sparkles } from "lucide-react";
import heroBeach from "../assets/hero-beach.jpg";
import "../css/Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <img 
          src={heroBeach} 
          alt="Beach resort with umbrellas and loungers" 
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <Sparkles className="hero-badge-icon" />
            <span className="hero-badge-text">
              Digitaliza tu balneario hoy
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Automatiza tu{" "}
            <span className="hero-title-gradient">balneario</span>
            {" "}con IA
          </h1>

          {/* Subheading */}
          <p className="hero-subtitle">
            Reservas automáticas, atención 24/7 por WhatsApp y dashboard inteligente. 
            Todo en una plataforma diseñada para balnearios modernos.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            {/* <Button variant="accent" size="lg" className="hero-btn-primary">
              Empezar gratis
              <ArrowRight className="hero-btn-icon" />
            </Button>
            <Button variant="outline" size="lg" className="hero-btn-secondary">
              Ver demo
            </Button> */}
          </div>

          {/* Social Proof */}
          <div className="hero-social">
            <div className="hero-social-group">
              <div className="hero-social-avatars">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="hero-avatar" />
                ))}
              </div>
              <span>+10 balnearios confían en nosotros</span>
            </div>
            <div className="hero-divider" />
            <span>⚡ Configuración en menos de 5 minutos</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hero-decorative" />
    </section>
  );
};

export default Hero;
