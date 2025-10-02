import dashboardPreview from "../assets/dashboard-preview.jpg";
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";
import "../css/DashboardComponent.css";

const stats = [
  {
    icon: TrendingUp,
    value: "+40%",
    label: "Incremento en reservas"
  },
  {
    icon: Users,
    value: "24/7",
    label: "Atención al cliente"
  },
  {
    icon: DollarSign,
    value: "-60%",
    label: "Reducción en costos"
  },
  {
    icon: Activity,
    value: "100%",
    label: "Uptime garantizado"
  }
];

const DashboardComponent = () => {
  return (
    <section className="dashboard-section">
      <div className="container">
        <div className="dashboard-header">
          <h2>
            Dashboard{" "}
            <span className="gradient-text">inteligente</span>
          </h2>
          <p>
            Visualiza métricas clave, gestiona reservas y optimiza tu operación desde un solo lugar
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="stat-icon">
                  <Icon className="icon" />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="dashboard-preview">
          <div className="preview-bg" />
          <img src={dashboardPreview} alt="Dashboard preview" />
        </div>
      </div>
    </section>
  );
};

export default DashboardComponent;
