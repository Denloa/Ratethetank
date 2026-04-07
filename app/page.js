export default function Home() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "#020617", 
      color: "white",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: "40px", color: "#fde68a" }}>
        🛡️ Rate My Tank
      </h1>

      <p style={{ marginTop: "10px", color: "#cbd5e1" }}>
        Paste your Raider.IO and let people rate your tanking.
      </p>

      <div style={{ marginTop: "30px" }}>
        <input 
          placeholder="Raider.IO link"
          style={{
            padding: "12px",
            width: "300px",
            borderRadius: "10px",
            border: "1px solid #444",
            background: "#020617",
            color: "white"
          }}
        />
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>⭐ Community Ratings</h2>
        <p>No ratings yet</p>
      </div>
    </div>
  );
}
