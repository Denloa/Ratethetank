export default function Home() {
  const categories = [
    { label: "General Mechanics", value: 4.2, icon: "🛡️" },
    { label: "Route Knowledge", value: 3.8, icon: "🗺️" },
    { label: "Pull Pacing", value: 4.4, icon: "⚔️" },
    { label: "Survivability", value: 4.6, icon: "✨" },
    { label: "Would Queue Again", value: 4.7, icon: "✅" },
  ];

  const reviews = [
    "Good tank overall. Pulls were clean, but route got a little scuffed after the second boss.",
    "Stayed alive well and kept things moving. Would definitely queue again.",
  ];

  const stars = (value) => {
    const rounded = Math.round(value);
    return "★".repeat(rounded) + "☆".repeat(5 - rounded);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(245,158,11,0.12), transparent 28%), linear-gradient(180deg, #0f172a 0%, #020617 55%, #000000 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            border: "1px solid rgba(250,204,21,0.3)",
            background: "rgba(250,204,21,0.08)",
            color: "#fde68a",
            borderRadius: "999px",
            padding: "8px 14px",
            marginBottom: "18px",
            fontSize: "14px",
          }}
        >
          Protection Paladin Edition
        </div>

        <h1 style={{ fontSize: "48px", margin: 0, color: "#fefce8" }}>
          🛡️ Rate My Tank
        </h1>

        <p style={{ color: "#cbd5e1", fontSize: "18px", maxWidth: "760px", lineHeight: 1.6 }}>
          A WoW-flavored Mythic+ rating page where people can glance at your
          Raider.IO, drop quick votes, and judge how clean your tanking felt.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "24px",
            marginTop: "28px",
          }}
        >
          <div style={{ display: "grid", gap: "24px" }}>
            <div
              style={{
                border: "1px solid rgba(250,204,21,0.16)",
                background: "rgba(15,23,42,0.76)",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              }}
            >
              <h2 style={{ marginTop: 0, color: "#fefce8" }}>👑 Tank Profile</h2>
              <p style={{ color: "#94a3b8" }}>
                Simple MVP with Raider.IO identity and fast anonymous voting.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div>
                  <label style={{ display: "block", marginBottom: 8, color: "#cbd5e1" }}>
                    Raider.IO Link
                  </label>
                  <input
                    defaultValue="https://raider.io/characters/us/illidan/YourTankName"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "16px",
                      border: "1px solid rgba(250,204,21,0.16)",
                      background: "rgba(2,6,23,0.9)",
                      color: "white",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: 8, color: "#cbd5e1" }}>
                    Public Page
                  </label>
                  <div
                    style={{
                      padding: "12px 14px",
                      borderRadius: "16px",
                      border: "1px solid rgba(250,204,21,0.16)",
                      background: "rgba(2,6,23,0.9)",
                      color: "#cbd5e1",
                    }}
                  >
                    ratemytank.gg/yourtankname-illidan
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: 8, color: "#cbd5e1" }}>
                    Character Name
                  </label>
                  <input
                    defaultValue="YourTankName"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "16px",
                      border: "1px solid rgba(250,204,21,0.16)",
                      background: "rgba(2,6,23,0.9)",
                      color: "white",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: 8, color: "#cbd5e1" }}>
                    Realm
                  </label>
                  <input
                    defaultValue="Illidan"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "16px",
                      border: "1px solid rgba(250,204,21,0.16)",
                      background: "rgba(2,6,23,0.9)",
                      color: "white",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: 8, color: "#cbd5e1" }}>
                    Spec
                  </label>
                  <input
                    defaultValue="Protection Paladin"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "16px",
                      border: "1px solid rgba(250,204,21,0.16)",
                      background: "rgba(2,6,23,0.9)",
                      color: "white",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: 8, color: "#cbd5e1" }}>
                    Mythic+ Score
                  </label>
                  <input
                    defaultValue="3421"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "16px",
                      border: "1px solid rgba(250,204,21,0.16)",
                      background: "rgba(2,6,23,0.9)",
                      color: "white",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  marginTop: "24px",
                  border: "1px solid rgba(250,204,21,0.16)",
                  borderRadius: "24px",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  background:
                    "linear-gradient(135deg, rgba(120,53,15,0.18), rgba(2,6,23,0.95), rgba(251,191,36,0.06))",
                }}
              >
                <div>
                  <h3 style={{ margin: 0, fontSize: "28px" }}>YourTankName</h3>
                  <p style={{ margin: "6px 0 0", color: "#94a3b8" }}>
                    Protection Paladin • Illidan
                  </p>
                  <a
                    href="https://raider.io"
                    style={{
                      display: "inline-block",
                      marginTop: "10px",
                      color: "#fde047",
                      textDecoration: "underline",
                    }}
                  >
                    Open Raider.IO Profile
                  </a>
                </div>

                <div
                  style={{
                    border: "1px solid rgba(250,204,21,0.30)",
                    background: "rgba(250,204,21,0.08)",
                    borderRadius: "24px",
                    padding: "16px 24px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#fde047",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                    }}
                  >
                    Overall Rating
                  </div>
                  <div style={{ fontSize: "40px", fontWeight: 800 }}>4.3</div>
                  <div style={{ fontSize: "14px", color: "#94a3b8" }}>
                    based on 2 reviews
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                border: "1px solid rgba(250,204,21,0.16)",
                background: "rgba(15,23,42,0.76)",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              }}
            >
              <h2 style={{ marginTop: 0, color: "#fefce8" }}>📊 Community Scores</h2>
              <p style={{ color: "#94a3b8" }}>
                Fast, simple ratings for the stuff people actually care about.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "16px",
                }}
              >
                {categories.map((cat) => (
                  <div
                    key={cat.label}
                    style={{
                      background: "rgba(2,6,23,0.8)",
                      border: "1px solid rgba(250,204,21,0.16)",
                      borderRadius: "24px",
                      padding: "18px",
                    }}
                  >
                    <div style={{ fontWeight: 700, marginBottom: "10px" }}>
                      {cat.icon} {cat.label}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                      <span>{stars(cat.value)}</span>
                      <span style={{ color: "#94a3b8" }}>{cat.value}/5</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                border: "1px solid rgba(250,204,21,0.16)",
                background: "rgba(15,23,42,0.76)",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              }}
            >
              <h2 style={{ marginTop: 0, color: "#fefce8" }}>💬 Recent Reviews</h2>
              <p style={{ color: "#94a3b8" }}>What people are saying about this tank.</p>

              <div style={{ display: "grid", gap: "16px" }}>
                {reviews.map((review, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(2,6,23,0.8)",
                      border: "1px solid rgba(250,204,21,0.16)",
                      borderRadius: "24px",
                      padding: "18px",
                    }}
                  >
                    <div style={{ fontWeight: 700 }}>Anonymous Review</div>
                    <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: 4 }}>
                      Community rating
                    </div>
                    <p style={{ margin: "12px 0 0", color: "#e2e8f0" }}>{review}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gap: "24px" }}>
            <div
              style={{
                border: "1px solid rgba(250,204,21,0.16)",
                background: "rgba(15,23,42,0.76)",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              }}
            >
              <h2 style={{ marginTop: 0, color: "#fefce8" }}>✨ Leave a Review</h2>
              <p style={{ color: "#94a3b8" }}>
                Quick voting flow for friends, guildies, or pug survivors.
              </p>

              <div style={{ display: "grid", gap: "14px" }}>
                {categories.map((cat) => (
                  <div
                    key={cat.label}
                    style={{
                      background: "rgba(2,6,23,0.8)",
                      border: "1px solid rgba(250,204,21,0.16)",
                      borderRadius: "18px",
                      padding: "14px",
                    }}
                  >
                    <div style={{ fontWeight: 700, marginBottom: "8px" }}>
                      {cat.icon} {cat.label}
                    </div>
                    <div style={{ color: "#fde68a" }}>☆ ☆ ☆ ☆ ☆</div>
                  </div>
                ))}

                <div>
                  <label style={{ display: "block", marginBottom: 8, color: "#cbd5e1" }}>
                    Comment
                  </label>
                  <textarea
                    defaultValue="Good mechanics, shaky route, clean pulls after first boss..."
                    style={{
                      width: "100%",
                      minHeight: "120px",
                      padding: "12px 14px",
                      borderRadius: "16px",
                      border: "1px solid rgba(250,204,21,0.16)",
                      background: "rgba(2,6,23,0.9)",
                      color: "white",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <button
                  style={{
                    width: "100%",
                    border: "none",
                    borderRadius: "16px",
                    padding: "14px 18px",
                    background: "#fde047",
                    color: "#0f172a",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Submit Review
                </button>
              </div>
            </div>

            <div
              style={{
                border: "1px solid rgba(250,204,21,0.16)",
                background: "rgba(15,23,42,0.76)",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              }}
            >
              <h2 style={{ marginTop: 0, color: "#fefce8" }}>Why this MVP works</h2>
              <div style={{ display: "grid", gap: "10px", color: "#cbd5e1" }}>
                <div>• One Raider.IO link gives the page identity.</div>
                <div>• Voting is simple enough that people will actually do it.</div>
                <div>• The categories match what tanks get judged on in Mythic+.</div>
                <div>• Easy to expand later with auth, real profiles, and comments database.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
