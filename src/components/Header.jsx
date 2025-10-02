import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Waves } from "lucide-react";
import "../css/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    // { label: "Características", href: "#features" },
    // { label: "Precios", href: "#pricing" },
    // { label: "Casos de éxito", href: "#cases" },
    // { label: "Contacto", href: "#contact" },
  ];

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <Waves size={28} className="logo-icon" />
            <span className="logo-text">BalneIA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="nav-buttons">
            <Link to="/auth">
              <button className="btn btn-primary">Iniciar sesión</button>
            </Link>

          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-toggle"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-links">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mobile-buttons">
              <Link to="/auth">
                <button className="btn btn-ghost">Iniciar sesión</button>
              </Link>
  
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
