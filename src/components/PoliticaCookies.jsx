import './LegalPage.css';

export default function PoliticaCookies({ onBack }) {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <button className="legal-back" onClick={onBack}>← Volver</button>
        <h1 className="legal-titulo">Política de Cookies</h1>
        <div className="legal-content">
          <p>El contenido de esta página estará disponible próximamente.</p>
        </div>
      </div>
    </div>
  );
}
