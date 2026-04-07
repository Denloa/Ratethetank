export const metadata = {
  title: "Rate My Tank",
  description: "Protection Paladin themed Mythic+ tank rating page",
};

const categories = [
  { key: "mechanics", label: "General Mechanics", icon: "🛡️" },
  { key: "route", label: "Route Knowledge", icon: "🗺️" },
  { key: "pulls", label: "Pull Pacing", icon: "⚔️" },
  { key: "survival", label: "Survivability", icon: "✨" },
  { key: "rerun", label: "Would Queue Again", icon: "✅" },
];

const reviews = [
  {
    comment: "Good tank overall. Pulls were clean, but route got a little scuffed after the second boss.",
    ratings: { mechanics: 4, route: 3, pulls: 4, survival: 4, rerun: 5 },
  },
  {
    comment: "Stayed alive well and kept things moving. Would definitely queue again.",
    ratings: { mechanics: 4, route: 4, pulls: 5, survival: 5, rerun: 5 },
  },
];

function averageFor(key) {
  return (
    reviews.reduce((sum, r) => sum + (r.ratings[key] || 0), 0) / reviews.length
  ).toFixed(1);
}

function overallAverage() {
  const total = categories.reduce((sum, c) => sum + Number(averageFor(c.key)), 0);
  return (total / categories.length).toFixed(1);
}

function stars(n) {
  const rounded = Math.round(n);
  return "★".repeat(rounded) + "☆".repeat(5 - rounded);
}

export default function Home() {
  return (
    <main style={styles.page}>
      <div style={styles.bgGlow1} />
      <div style={styles.bgGlow2} />
      <div style={styles.bgGlow3} />

      <section style={styles.wrap}>
        <div style={styles.badge}>Protection Paladin Edition</div>
        <h1 style={styles.h1}>Rate My Tank</h1>
        <p style={styles.sub}>
          A WoW-flavored Mythic+ rating page where people can glance at your profile,
          drop quick votes, and judge how clean your tanking felt.
        </p>

        <div style={styles.grid}>
          <div style={{display:"grid", gap: 24}}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>👑 Tank Profile</div>
              <p style={styles.cardSub}>Simple MVP version with a Raider.IO link and quick anonymous voting.</p>

              <div style={styles.inputGrid}>
                <div>
                  <label style={styles.label}>Raider.IO Link</label>
                  <input style={styles.input} defaultValue="https://raider.io/characters/us/illidan/YourTankName" />
                </div>
                <div>
                  <label style={styles.label}>Public Page</label>
                  <div style={styles.fakeInput}>ratemytank.gg/yourtankname-illidan</div>
                </div>
                <div>
                  <label style={styles.label}>Character Name</label>
                  <input style={styles.input} defaultValue="YourTankName" />
                </div>
                <div>
                  <label style={styles.label}>Realm</label>
                  <input style={styles.input} defaultValue="Illidan" />
                </div>
                <div>
                  <label style={styles.label}>Spec</label>
                  <input style={styles.input} defaultValue="Protection Paladin" />
                </div>
                <div>
                  <label style={styles.label}>Mythic+ Score</label>
                  <input style={styles.input} defaultValue="3421" />
                </div>
              </div>

              <div style={styles.heroCard}>
                <div>
                  <h2 style={{margin:0,fontSize:28}}>YourTankName</h2>
                  <p style={{margin:"6px 0 0", color:"#94a3b8"}}>Protection Paladin • Illidan</p>
                  <a href="https://raider.io" style={styles.link}>Open Raider.IO Profile</a>
                </div>
                <div style={styles.scoreBox}>
                  <div style={styles.scoreLabel}>Overall Rating</div>
                  <div style={styles.scoreValue}>{overallAverage()}</div>
                  <div style={styles.scoreSub}>based on {reviews.length} reviews</div>
                </div>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>📊 Community Scores</div>
              <p style={styles.cardSub}>Fast, simple ratings for the stuff people actually care about.</p>
              <div style={styles.scoreGrid}>
                {categories.map((cat) => (
                  <div key={cat.key} style={styles.scoreCard}>
                    <div style={{fontWeight:700, marginBottom:10}}>{cat.icon} {cat.label}</div>
                    <div style={{display:"flex", justifyContent:"space-between", gap:12}}>
                      <span>{stars(averageFor(cat.key))}</span>
                      <span style={{color:"#94a3b8"}}>{averageFor(cat.key)}/5</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>💬 Recent Reviews</div>
              <p style={styles.cardSub}>What people are saying about this tank.</p>
              <div style={{display:"grid", gap:16}}>
                {reviews.map((review, i) => {
                  const overall = (
                    categories.reduce((sum, c) => sum + (review.ratings[c.key] || 0), 0) /
                    categories.length
                  ).toFixed(1);
                  return (
                    <div key={i} style={styles.reviewCard}>
                      <div style={{display:"flex", justifyContent:"space-between", gap:12, flexWrap:"wrap"}}>
                        <div>
                          <div style={{fontWeight:700}}>Anonymous Review</div>
                          <div style={{fontSize:14, color:"#94a3b8"}}>Community rating</div>
                        </div>
                        <div style={{color:"#cbd5e1"}}>Overall {stars(overall)}</div>
                      </div>
                      <p style={{margin:"12px 0 0", color:"#e2e8f0"}}>{review.comment}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div style={{display:"grid", gap:24}}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>✨ Leave a Review</div>
              <p style={styles.cardSub}>Quick voting flow for friends, guildies, or pug survivors.</p>
              <div style={{display:"grid", gap:14}}>
                {categories.map((cat) => (
                  <div key={cat.key} style={styles.voteRow}>
                    <div style={{fontWeight:700, marginBottom:8}}>{cat.icon} {cat.label}</div>
                    <div style={{color:"#fde68a"}}>☆ ☆ ☆ ☆ ☆</div>
                  </div>
                ))}
                <div>
                  <label style={styles.label}>Comment</label>
                  <textarea style={{...styles.input, minHeight:120}} defaultValue="Good mechanics, shaky route, clean pulls after first boss..." />
                </div>
                <button style={styles.button}>Submit Review</button>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Why this MVP works</div>
              <div style={{display:"grid", gap:10, color:"#cbd5e1"}}>
                <div>• One Raider.IO link gives the page identity.</div>
                <div>• Voting is simple enough that people will actually do it.</div>
                <div>• The categories match what tanks get judged on in Mythic+.</div>
                <div>• Easy to expand later with auth, real profiles, and comments database.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #0f172a 0%, #020617 55%, #000000 100%)",
    color: "white",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  wrap: {
    position: "relative",
    zIndex: 2,
    maxWidth: 1200,
    margin: "0 auto",
    padding: "40px 16px",
  },
  badge: {
    display: "inline-block",
    border: "1px solid rgba(250, 204, 21, 0.3)",
    background: "rgba(250, 204, 21, 0.08)",
    color: "#fde68a",
    borderRadius: 999,
    padding: "8px 14px",
    marginBottom: 16,
    fontSize: 14,
  },
  h1: { fontSize: 52, margin: 0, color: "#fefce8" },
  sub: { maxWidth: 760, color: "#cbd5e1", fontSize: 18, lineHeight: 1.55 },
  grid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 24,
    marginTop: 24,
  },
  card: {
    border: "1px solid rgba(250, 204, 21, 0.16)",
    background: "rgba(15, 23, 42, 0.76)",
    borderRadius: 24,
    padding: 24,
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
    backdropFilter: "blur(8px)",
  },
  cardTitle: { fontSize: 28, fontWeight: 800, color: "#fefce8", marginBottom: 8 },
  cardSub: { color: "#94a3b8", marginTop: 0 },
  inputGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  },
  label: {
    display: "block",
    marginBottom: 8,
    color: "#cbd5e1",
    fontSize: 14,
  },
  input: {
    width: "100%",
    background: "rgba(2,6,23,0.9)",
    border: "1px solid rgba(250, 204, 21, 0.16)",
    borderRadius: 16,
    color: "white",
    padding: "12px 14px",
    boxSizing: "border-box",
  },
  fakeInput: {
    background: "rgba(2,6,23,0.9)",
    border: "1px solid rgba(250, 204, 21, 0.16)",
    borderRadius: 16,
    color: "#cbd5e1",
    padding: "12px 14px",
  },
  heroCard: {
    marginTop: 24,
    border: "1px solid rgba(250, 204, 21, 0.16)",
    borderRadius: 24,
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    alignItems: "center",
    flexWrap: "wrap",
    background: "linear-gradient(135deg, rgba(120,53,15,0.18), rgba(2,6,23,0.95), rgba(251,191,36,0.06))",
  },
  link: {
    display: "inline-block",
    color: "#fde047",
    marginTop: 10,
    textDecoration: "underline",
  },
  scoreBox: {
    border: "1px solid rgba(250, 204, 21, 0.30)",
    background: "rgba(250, 204, 21, 0.08)",
    borderRadius: 24,
    padding: "16px 24px",
    textAlign: "center",
  },
  scoreLabel: {
    fontSize: 12,
    color: "#fde047",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
  },
  scoreValue: { fontSize: 40, fontWeight: 800 },
  scoreSub: { fontSize: 14, color: "#94a3b8" },
  scoreGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 16,
  },
  scoreCard: {
    background: "rgba(2,6,23,0.8)",
    border: "1px solid rgba(250, 204, 21, 0.16)",
    borderRadius: 24,
    padding: 18,
  },
  reviewCard: {
    background: "rgba(2,6,23,0.8)",
    border: "1px solid rgba(250, 204, 21, 0.16)",
    borderRadius: 24,
    padding: 18,
  },
  voteRow: {
    background: "rgba(2,6,23,0.8)",
    border: "1px solid rgba(250, 204, 21, 0.16)",
    borderRadius: 18,
    padding: 14,
  },
  button: {
    width: "100%",
    border: "none",
    borderRadius: 16,
    padding: "14px 18px",
    background: "#fde047",
    color: "#0f172a",
    fontWeight: 800,
    cursor: "pointer",
  },
  bgGlow1: {
    position: "absolute", left: -80, top: 80, width: 280, height: 280,
    borderRadius: "50%", background: "rgba(253, 224, 71, 0.08)", filter: "blur(80px)"
  },
  bgGlow2: {
    position: "absolute", right: 0, top: 0, width: 360, height: 360,
    borderRadius: "50%", background: "rgba(251, 191, 36, 0.08)", filter: "blur(100px)"
  },
  bgGlow3: {
    position: "absolute", left: "35%", bottom: 0, width: 320, height: 320,
    borderRadius: "50%", background: "rgba(251, 146, 60, 0.07)", filter: "blur(100px)"
  }
};
