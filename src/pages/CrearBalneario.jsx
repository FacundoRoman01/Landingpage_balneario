// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Building2 } from "lucide-react";
// import "../css/CrearBalneario.css";

// const CrearBalneario = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     nombre: "",
//     direccion: "",
//     telefono: "",
//     email: "",
//     descripcion: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validación básica
//     if (!formData.nombre || !formData.direccion || !formData.telefono) {
//       alert("Por favor completa los campos obligatorios");
//       return;
//     }

//     // Guardar en localStorage (temporal, luego conectar con backend)
//     localStorage.setItem("balneario", JSON.stringify(formData));

//     alert("¡Balneario creado! Tu balneario ha sido registrado exitosamente");

//     // Redirigir al dashboard
//     navigate("/dashboard");
//   };

//   return (
//     <div className="crear-balneario-container">
//       <div className="crear-balneario-content">
//         <div className="crear-balneario-header">
//           <Building2 className="header-icon" size={40} />
//           <h1 className="header-title">Crear Balneario</h1>
//           <p className="header-subtitle">
//             Completa la información de tu balneario para comenzar
//           </p>
//         </div>

//         <div className="crear-balneario-card">
//           <form onSubmit={handleSubmit} className="balneario-form">
//             <div className="form-group">
//               <label htmlFor="nombre">
//                 Nombre del Balneario <span className="required">*</span>
//               </label>
//               <input
//                 id="nombre"
//                 name="nombre"
//                 value={formData.nombre}
//                 onChange={handleChange}
//                 placeholder="Ej: Balneario Sol y Mar"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="direccion">
//                 Dirección <span className="required">*</span>
//               </label>
//               <input
//                 id="direccion"
//                 name="direccion"
//                 value={formData.direccion}
//                 onChange={handleChange}
//                 placeholder="Ej: Playa Grande, Punta del Este"
//                 required
//               />
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="telefono">
//                   Teléfono <span className="required">*</span>
//                 </label>
//                 <input
//                   id="telefono"
//                   name="telefono"
//                   type="tel"
//                   value={formData.telefono}
//                   onChange={handleChange}
//                   placeholder="+598 99 123 456"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="contacto@balneario.com"
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="descripcion">Descripción</label>
//               <textarea
//                 id="descripcion"
//                 name="descripcion"
//                 value={formData.descripcion}
//                 onChange={handleChange}
//                 placeholder="Describe tu balneario, servicios ofrecidos, horarios, etc."
//                 rows={4}
//               />
//             </div>

//             <button type="submit" className="submit-button">
//               Crear Balneario
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CrearBalneario;
