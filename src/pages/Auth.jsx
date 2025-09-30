import { useState } from "react";

import '../css/Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isLogin ? "Login" : "Registro"} enviado!`);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">{isLogin ? "Iniciar sesión" : "Registrarse"}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <input
              type="text"
              placeholder="Nombre completo"
              className="auth-input"
              required
            />
          )}
          <input
            type="email"
            placeholder="Correo electrónico"
            className="auth-input"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="auth-input"
            required
          />
          <button type="submit" className="auth-btn">
            {isLogin ? "Ingresar" : "Registrarse"}
          </button>
        </form>
        <p className="auth-toggle">
          {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
          <span onClick={toggleForm} className="auth-toggle-link">
            {isLogin ? "Regístrate" : "Inicia sesión"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
