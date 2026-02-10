import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}>
          <div style={{
            fontSize: "4rem",
            marginBottom: "1.5rem",
          }}>
            🔧
          </div>
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}>
            Volvemos pronto
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#a0aec0",
            maxWidth: "500px",
            lineHeight: "1.6",
            marginBottom: "2rem",
          }}>
            Estamos realizando tareas de mantenimiento para mejorar tu experiencia. Estaremos de vuelta en breve.
          </p>
          <div style={{
            width: "60px",
            height: "4px",
            background: "linear-gradient(90deg, #e53e3e, #ed8936)",
            borderRadius: "2px",
          }} />
        </div>
      </body>
    </html>
  );
}
