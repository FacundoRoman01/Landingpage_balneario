import { Link } from "react-router-dom";
import { Waves } from "lucide-react";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="header-logo">
          <div className="header-logo-icon">
            <Waves className="header-logo-svg" />
          </div>
          <span className="header-logo-text">BalnearioAI</span>
        </Link>

        {/* Navigation */}
        <nav className="header-nav">
          <Link to="/auth" className="header-btn">
            Iniciar sesión / Registrarse
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
