import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../js/supabaseClient.js";
import "../css/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [balneario, setBalneario] = useState(null);
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const loadData = async () => {
    setLoading(true);
    const user = await getUser();
    if (!user) return;

    const { data: balnearioData, error: balnearioError } = await supabase
      .from("balnearios")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (balnearioError) console.error(balnearioError);
    else setBalneario(balnearioData);

    const { data: reservasData, error: reservasError } = await supabase
      .from("reservas")
      .select("*")
      .eq("balneario_id", balnearioData.id)
      .order("fecha", { ascending: true });

    if (reservasError) console.error(reservasError);
    else setReservas(reservasData);

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBalneario((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("balnearios")
      .update({
        nombre: balneario.nombre,
        nombre_balneario: balneario.nombre_balneario,
        direccion: balneario.direccion,
        telefono: balneario.telefono,
        email: balneario.email,
        descripcion: balneario.descripcion,
        zona: balneario.zona,
        activo: balneario.activo,
      })
      .eq("id", balneario.id);

    if (error) alert("Error al guardar: " + error.message);
    else alert("Datos del balneario actualizados correctamente!");

    setSaving(false);
  };

  if (loading) return <p className="dashboard-loading">Cargando...</p>;
  if (!balneario) return <p>No se encontró tu balneario.</p>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="dashboard-header-top">
          <h1>Bienvenido a {balneario.nombre_balneario}</h1>
          <button className="btn-logout" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
        <p>Administra tus reservas, servicios y datos del balneario</p>
      </header>

      {/* Formulario de edición de balneario */}
      <section className="dashboard-balneario-edit">
        <h2>Editar información del balneario</h2>
        <div className="form-grid">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del dueño"
            value={balneario.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            name="nombre_balneario"
            placeholder="Nombre del balneario"
            value={balneario.nombre_balneario}
            onChange={handleChange}
          />
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={balneario.direccion || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={balneario.telefono || ""}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={balneario.email || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="zona"
            placeholder="Zona / Provincia"
            value={balneario.zona || ""}
            onChange={handleChange}
          />
          <textarea
            name="descripcion"
            placeholder="Descripción"
            value={balneario.descripcion || ""}
            onChange={handleChange}
          />
          <label>
            <input
              type="checkbox"
              name="activo"
              checked={balneario.activo}
              onChange={handleChange}
            />{" "}
            Balneario activo
          </label>
        </div>
        <button className="btn-save" onClick={handleSave} disabled={saving}>
          {saving ? "Guardando..." : "Guardar cambios"}
        </button>
      </section>

      {/* Estadísticas y reservas */}
      <section className="dashboard-stats">
        <div className="stat-card">
          <h3>Total reservas</h3>
          <p>{reservas.length}</p>
        </div>
        <div className="stat-card">
          <h3>Reservas próximas</h3>
          <p>{reservas.filter(r => new Date(r.fecha) > new Date()).length}</p>
        </div>
      </section>

      <section className="dashboard-reservas">
        <h2>Reservas</h2>
        {reservas.length === 0 ? (
          <p>No hay reservas todavía.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Carpa / Sombrilla</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map((res) => (
                <tr key={res.id}>
                  <td>{res.cliente_nombre}</td>
                  <td>{new Date(res.fecha).toLocaleString()}</td>
                  <td>{res.recurso}</td>
                  <td>{res.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="dashboard-actions">
        <h2>Automatizaciones</h2>
        <button className="btn" onClick={() => alert("WhatsApp activado")}>
          Activar WhatsApp
        </button>
        <button className="btn" onClick={() => alert("RAG activado")}>
          Activar respuestas inteligentes
        </button>
      </section>
    </div>
  );
};

export default Dashboard;
