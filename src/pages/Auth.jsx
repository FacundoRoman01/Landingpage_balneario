import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../js/supabaseClient.js";
import "../css/Auth.css";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [nombreBalneario, setNombreBalneario] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Limpia mensaje al cambiar de login a registro
  useEffect(() => {
    setMessage("");
  }, [isLogin]);

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (isLogin) {
        // LOGIN
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;

        if (!data.user.email_confirmed_at) {
          setMessage("Debes confirmar tu correo antes de iniciar sesión.");
        } else {
          navigate("/dashboard");
        }
      } else {
        // Validaciones extra
        if (!fullName.trim() || !nombreBalneario.trim()) {
          setMessage("Completa todos los campos requeridos.");
          setLoading(false);
          return;
        }
        if (password.length < 6) {
          setMessage("La contraseña debe tener al menos 6 caracteres.");
          setLoading(false);
          return;
        }

        // REGISTRO
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({ email, password });
        if (signUpError) throw signUpError;

        if (!signUpData.user?.id) throw new Error("No se pudo crear el usuario.");

        // Crear balneario automáticamente
        const { error: balnearioError } = await supabase.from("balnearios").insert([{
          user_id: signUpData.user.id,
          nombre: fullName,
          nombre_balneario: nombreBalneario,
        }]);

        if (balnearioError) throw balnearioError;

        setMessage("Usuario registrado. Revisa tu correo para confirmar antes de iniciar sesión.");
      }

      setEmail("");
      setPassword("");
      setFullName("");
      setNombreBalneario("");
    } catch (error) {
      console.error(error);
      setMessage("Ocurrió un error, revisa tus datos e intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-background" />
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">{isLogin ? "Bienvenido de nuevo" : "Crear cuenta"}</h1>
          <p className="auth-subtitle">
            {isLogin
              ? "Ingresa tus credenciales para continuar"
              : "Completa los datos para registrarte"}
          </p>
        </div>

        {message && <p style={{ color: "red", textAlign: "center" }}>{message}</p>}

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <>
              <div className="auth-field">
                <label htmlFor="fullName" className="auth-label">Nombre completo</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  className="auth-input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              <div className="auth-field">
                <label htmlFor="nombreBalneario" className="auth-label">Nombre del Balneario</label>
                <input
                  id="nombreBalneario"
                  type="text"
                  placeholder="Balneario Playa Feliz"
                  className="auth-input"
                  value={nombreBalneario}
                  onChange={(e) => setNombreBalneario(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
            </>
          )}

          <div className="auth-field">
            <label htmlFor="email" className="auth-label">Correo electrónico</label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="auth-field">
            <label htmlFor="password" className="auth-label">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              minLength={6}
            />
          </div>

          <button type="submit" className="auth-btn auth-btn-primary" disabled={loading}>
            {loading ? <span className="auth-spinner">⏳ Cargando...</span> : isLogin ? "Iniciar sesión" : "Registrarse"}
          </button>
        </form>

        <div className="auth-toggle">
          <p>
            {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
            <button type="button" onClick={toggleForm} className="auth-toggle-link" disabled={loading}>
              {isLogin ? "Regístrate aquí" : "Inicia sesión"}
            </button>
          </p>
        </div>

        <Link to="/" className="auth-back">← Volver al inicio</Link>
      </div>
    </div>
  );
};

export default Auth;
