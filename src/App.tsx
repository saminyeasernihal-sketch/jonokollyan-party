import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// ── Supabase কনফিগারেশন ──────────────────────────────────────────
const SUPABASE_URL = "https://cihkvcozorvctcthssey.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpaGt2Y296b3J2Y3RjdGhzc2V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5MjM3MDAsImV4cCI6MjA5NDQ5OTcwMH0.ZGopi-kvxQxYsalBJiRU3pTHQPpSGPnO5zIAznzkQpM"; // আপনার সম্পূর্ণ key দিন
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const PAGES = [
  "home",
  "netara",
  "istehar",
  "video",
  "join",
  "jogajog",
  "admin",
];

const NAV_LABELS = {
  home: "হোম",
  netara: "নেতারা",
  istehar: "ইশতেহার",
  video: "ভিডিও",
  join: "যোগ দিন",
  jogajog: "যোগাযোগ",
  admin: "অ্যাডমিন",
};

// ADMIN পাসওয়ার্ড (লোকাল অ্যাডমিনের জন্য)
const ADMIN_PASSWORD = "khairul2026";

// ── Navbar Component ──────────────────────────────────────────────
function Navbar({
  page,
  setPage,
}: {
  page: string;
  setPage: (page: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "linear-gradient(90deg,#b50000 0%,#8b0000 100%)",
        boxShadow: "0 4px 24px #0008",
        borderBottom: "2px solid #ff000044",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "auto",
          minHeight: 62,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            cursor: "pointer",
            padding: "8px 0",
          }}
          onClick={() => setPage("home")}
        >
          <span style={{ fontSize: "clamp(24px,6vw,32px)" }}>🔴</span>
          <div>
            <div
              style={{
                fontWeight: 900,
                fontSize: "clamp(14px,4vw,18px)",
                color: "#fff",
                letterSpacing: 1,
              }}
            >
              জনকল্যাণ পার্টি
            </div>
            <div
              style={{ fontSize: "clamp(10px,3vw,11px)", color: "#ffd700aa" }}
            >
              সরকারি ওয়েবসাইট
            </div>
          </div>
        </div>

        <nav
          style={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          className="desktop-nav"
        >
          {PAGES.map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              style={{
                background: page === p ? "#ffd700" : "transparent",
                color: page === p ? "#000" : "#fff",
                border: "none",
                borderRadius: 8,
                padding: "6px 12px",
                fontWeight: 700,
                fontSize: "clamp(12px,3.5vw,14px)",
                cursor: "pointer",
                transition: "all .2s",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
              }}
            >
              {NAV_LABELS[p]}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "clamp(24px,6vw,28px)",
            cursor: "pointer",
            padding: "8px",
          }}
          className="hamburger"
        >
          ☰
        </button>
      </div>

      {open && (
        <div
          style={{ background: "#8b0000", borderTop: "1px solid #ff000044" }}
          className="mobile-menu"
        >
          {PAGES.map((p) => (
            <button
              key={p}
              onClick={() => {
                setPage(p);
                setOpen(false);
              }}
              style={{
                display: "block",
                width: "100%",
                background: page === p ? "#ffd700" : "transparent",
                color: page === p ? "#000" : "#fff",
                border: "none",
                padding: "14px 20px",
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              {NAV_LABELS[p]}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}

// ── Home Page ───────────────────────────────────────────────────
function HomePage({
  stats,
  setPage,
}: {
  stats: any;
  setPage: (page: string) => void;
}) {
  return (
    <div>
      <section
        style={{
          background: "linear-gradient(135deg,#8b0000 0%,#000 80%)",
          padding: "clamp(40px,8vw,80px) 16px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "clamp(30px,5vw,50px)",
            flexDirection: "row",
          }}
        >
          <div style={{ flex: "1 1 300px", textAlign: "center", order: 2 }}>
            <div
              style={{
                fontSize: "clamp(11px,3vw,13px)",
                color: "#ffd700",
                fontWeight: 700,
                letterSpacing: 2,
                marginBottom: 12,
                textTransform: "uppercase",
              }}
            >
              🔴 জনকল্যাণ পার্টি — সরকারি ওয়েবসাইট
            </div>
            <h1
              style={{
                fontSize: "clamp(24px,7vw,48px)",
                fontWeight: 900,
                color: "#ffd700",
                lineHeight: 1.2,
                margin: "0 0 16px",
              }}
            >
              শিরায় শিরায় রক্ত,
              <br />
              আমরা খাইরুল ভাইয়ের ভক্ত 🔥
            </h1>
            <p
              style={{
                color: "#e0e0e0",
                fontSize: "clamp(14px,4vw,17px)",
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              জনকল্যাণ পার্টি বিশ্বাস করে এমন এক উন্নয়নে যেখানে প্রতিটি গরিব
              মানুষকে ১২ তলা ফ্ল্যাট দেওয়া হবে, প্রত্যেক এলাকায় ফ্রি বিরিয়ানি
              ATM বসানো হবে! 😎
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => setPage("join")}
                style={{
                  background: "#ffd700",
                  color: "#000",
                  border: "none",
                  borderRadius: 40,
                  padding: "clamp(10px,3vw,14px) clamp(20px,5vw,28px)",
                  fontWeight: 900,
                  fontSize: "clamp(14px,4vw,16px)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                ✊ এখনই যোগ দিন
              </button>
              <button
                onClick={() => setPage("istehar")}
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "2px solid #fff",
                  borderRadius: 40,
                  padding: "clamp(10px,3vw,14px) clamp(20px,5vw,28px)",
                  fontWeight: 700,
                  fontSize: "clamp(14px,4vw,16px)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                📜 ইশতেহার দেখুন
              </button>
            </div>
          </div>

          <div
            style={{
              flex: "0 0 auto",
              display: "flex",
              justifyContent: "center",
              order: 1,
              width: "100%",
            }}
          >
            <div style={{ position: "relative", margin: "0 auto" }}>
              <div
                style={{
                  width: "clamp(200px,60vw,280px)",
                  height: "clamp(250px,70vw,340px)",
                  background: "linear-gradient(180deg,#b50000,#000)",
                  borderRadius: "clamp(20px,6vw,30px)",
                  border: "4px solid #ffd700",
                  boxShadow: "0 0 40px #ffd70044",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://i.ibb.co.com/fVfy4ZSC/Untitled.jpg"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt="খাইরুল দেওয়ান"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#ffd700",
                  color: "#000",
                  padding: "6px 16px",
                  borderRadius: 40,
                  fontWeight: 900,
                  fontSize: "clamp(12px,4vw,16px)",
                  whiteSpace: "nowrap",
                }}
              >
                সর্বাধিনায়ক 👑
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ background: "#111", padding: "clamp(30px,8vw,60px) 16px" }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: 16,
          }}
        >
          {[
            {
              label: "মোট সদস্য 😎",
              value: stats.members?.toLocaleString("bn-BD") || "0",
            },
            {
              label: "মোট নেতা 🔥",
              value: stats.leaders?.toLocaleString("bn-BD") || "0",
            },
            {
              label: "অপেক্ষমাণ আবেদন 🚩",
              value: stats.pending?.toLocaleString("bn-BD") || "0",
            },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                background: "#1a0000",
                border: "2px solid #b50000",
                borderRadius: 20,
                padding: "clamp(20px,5vw,30px) 16px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(28px,8vw,42px)",
                  fontWeight: 900,
                  color: "#ffd700",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  color: "#ccc",
                  fontSize: "clamp(12px,3.5vw,16px)",
                  marginTop: 8,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ── Netara Page (Supabase থেকে ডাটা লোড করে) ────────────────────────────────
function NetaraPage() {
  const [leaders, setLeaders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const { data, error } = await supabase.from("leaders").select("*");

        if (error) throw error;
        setLeaders(data || []);
      } catch (error) {
        console.error("Error fetching leaders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaders();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          background: "#0a0000",
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ color: "#ffd700", fontSize: "24px" }}>লোড হচ্ছে...</div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#0a0000",
        minHeight: "60vh",
        padding: "clamp(30px,8vw,60px) 16px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(24px,7vw,48px)",
            fontWeight: 900,
            color: "#ffd700",
            marginBottom: "clamp(24px,6vw,48px)",
          }}
        >
          দলের নেতৃবৃন্দ 👑
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
            gap: "clamp(16px,4vw,28px)",
          }}
        >
          {leaders.map((leader: any, i: number) => (
            <div
              key={leader.id || i}
              style={{
                background: "#1a0000",
                border: "2px solid #b50000",
                borderRadius: 24,
                overflow: "hidden",
                transition: "transform .2s, box-shadow .2s",
                boxShadow: "0 4px 20px #0006",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 40px #b5000044";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 4px 20px #0006";
              }}
            >
              <div
                style={{
                  height: "clamp(200px,50vw,260px)",
                  overflow: "hidden",
                  background: "#2a0000",
                }}
              >
                <img
                  src={
                    leader.image ||
                    "https://via.placeholder.com/400x300?text=নেতা+ছবি"
                  }
                  alt={leader.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x300?text=নেতা+ছবি";
                  }}
                />
              </div>
              <div style={{ padding: "16px 20px" }}>
                <h3
                  style={{
                    color: "#ffd700",
                    fontWeight: 900,
                    fontSize: "clamp(18px,5vw,22px)",
                    margin: "0 0 8px",
                  }}
                >
                  {leader.name}
                </h3>
                <p
                  style={{
                    color: "#ccc",
                    margin: "4px 0",
                    fontSize: "clamp(13px,3.5vw,16px)",
                  }}
                >
                  🪑 আসন: {leader.seat || "—"}
                </p>
                <p
                  style={{
                    color: "#ccc",
                    margin: "4px 0",
                    fontSize: "clamp(13px,3.5vw,16px)",
                  }}
                >
                  🎖 পদ: {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Video Page (Supabase থেকে ডাটা লোড করে) ────────────────────────────────
function VideoPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data, error } = await supabase.from("videos").select("*");

        if (error) throw error;
        setVideos(data || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          background: "#0a0a0a",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ color: "#ffd700", fontSize: "24px" }}>লোড হচ্ছে...</div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        padding: "clamp(40px, 6vw, 80px) 16px",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 8vw, 60px)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginBottom: 12,
            }}
          >
            <span style={{ fontSize: "clamp(42px, 8vw, 58px)" }}>🎥</span>
            <h1
              style={{
                fontSize: "clamp(32px, 8vw, 52px)",
                fontWeight: 900,
                color: "#ffd700",
                margin: 0,
                textShadow: "0 0 20px #b5000044",
              }}
            >
              ভিডিও গ্যালারি
            </h1>
          </div>
          <p style={{ color: "#aaa", fontSize: "clamp(16px, 4vw, 19px)" }}>
            খাইরুল ভাইয়ের আগুন ঝরা ভাষণ ও অন্যান্য
          </p>
        </div>

        {videos.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              color: "#777",
              fontSize: "clamp(18px, 5vw, 22px)",
              padding: "80px 20px",
            }}
          >
            এখনো কোনো ভিডিও যোগ করা হয়নি।
            <br />
            অ্যাডমিন প্যানেল থেকে ভিডিও যোগ করুন।
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "clamp(24px, 4vw, 32px)",
            }}
          >
            {videos.map((v: any, i: number) => (
              <div
                key={v.id || i}
                style={{
                  background: "#111",
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid #3d0000",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-8px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div style={{ position: "relative", paddingTop: "56.25%" }}>
                  <iframe
                    src={v.link}
                    title={v.title}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    allowFullScreen
                  />
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <h3
                    style={{
                      color: "#ffd700",
                      fontWeight: 700,
                      fontSize: "clamp(15px, 4vw, 18px)",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {v.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Istehar Page ───────────────────────────────────────────────────
function IsteharPage() {
  const points = [
    "প্রত্যেক গরিব পরিবারকে ১২ তলা ফ্ল্যাট দেওয়া হবে।",
    "গ্রামের রাস্তায় AC লাগানো হবে গরম কমানোর জন্য।",
    "প্রতিটি শিক্ষার্থীকে ফ্রি গেমিং PC দেওয়া হবে।",
    "নদীর উপর ফ্লোটিং শপিং মল বানানো হবে।",
    "প্রতিটি ইউনিয়নে বিরিয়ানি ব্যাংক খোলা হবে।",
    "বৃষ্টির দিনে স্কুলে উপস্থিতি দিলে বোনাস মোবাইল ডেটা দেওয়া হবে।",
    "সব এলাকায় ফ্রি WiFi ও ফ্রি চায়ের ব্যবস্থা থাকবে ☕",
    "সব অটোতে স্টিয়ারিং লাগানো হবে — চালক আরামে থাকবেন! 🚗",
    "ট্রাফিক জ্যাম কমাতে আকাশে বাইক চালানোর অনুমতি দেওয়া হবে।",
  ];

  return (
    <div
      style={{
        background: "#0d0000",
        minHeight: "60vh",
        padding: "clamp(30px,8vw,60px) 16px",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(24px,7vw,48px)",
            fontWeight: 900,
            color: "#ffd700",
            marginBottom: 16,
          }}
        >
          উন্নয়নের ইশতেহার 🚀
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#aaa",
            marginBottom: "clamp(24px,6vw,48px)",
            fontSize: "clamp(13px,3.5vw,16px)",
          }}
        >
          জনকল্যাণ পার্টির নির্বাচনী প্রতিশ্রুতি
        </p>

        <div
          style={{
            background: "#1a0000",
            border: "2px solid #b50000",
            borderRadius: 28,
            padding: "clamp(20px,5vw,36px) clamp(16px,4vw,40px)",
          }}
        >
          {points.map((p, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                padding: "clamp(10px,3vw,14px) 0",
                borderBottom:
                  i < points.length - 1 ? "1px solid #3d0000" : "none",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  color: "#ffd700",
                  fontWeight: 900,
                  fontSize: "clamp(16px,4vw,18px)",
                  minWidth: 28,
                }}
              >
                ✅
              </span>
              <span
                style={{
                  color: "#e0e0e0",
                  fontSize: "clamp(14px,3.5vw,17px)",
                  lineHeight: 1.6,
                }}
              >
                {p}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 32,
            background: "#ffd700",
            color: "#000",
            borderRadius: 20,
            padding: "clamp(20px,5vw,24px) 20px",
            textAlign: "center",
            fontSize: "clamp(16px,5vw,20px)",
            fontWeight: 900,
          }}
        >
          আমার কিন্তু লাঠি আছে 😡
          <br />
          <span style={{ fontWeight: 400, fontSize: "clamp(12px,3.5vw,16px)" }}>
            কথা না শুনলে বাইরাইয়া মাজা ভাইঙ্গালাম
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Join Page ───────────────────────────────────────────────────
function JoinPage() {
  // এখানে আপনার লিংকগুলো বসান
  const MEMBER_FORM_LINK = "https://forms.gle/3pbYqCtUMHynbL1H9";
  const JBF_LINK = "https://forms.gle/QTNyuXxqcnPSgMSP7";

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#8b0000 0%,#000 100%)",
        minHeight: "70vh",
        padding: "clamp(30px,8vw,60px) 16px",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div
          style={{
            background: "#1a0000",
            border: "3px solid #ffd700",
            borderRadius: 32,
            padding: "clamp(20px,5vw,30px) 20px",
            marginBottom: 48,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "clamp(36px,10vw,48px)", marginBottom: 12 }}>
            🎙️
          </div>
          <h2
            style={{
              color: "#ffd700",
              fontWeight: 900,
              fontSize: "clamp(20px,6vw,32px)",
              marginBottom: 16,
            }}
          >
            খাইরুল ভাইয়ের ঘোষণা, উন্নয়নের চেতনা
          </h2>
          <p
            style={{
              color: "#fff",
              fontSize: "clamp(14px,4vw,18px)",
              lineHeight: 1.6,
              marginBottom: 16,
            }}
          >
            “জনকল্যাণ পার্টি শুধু দল না, এটা একটা পরিবার। আমরা চাই দেশ বদলাতে।
            <br />
            প্রতিটি তরুণকে তৈরি করতে চাই নেতা হিসেবে। উন্নয়নের ঠিকানা হচ্ছে
            জনকল্যাণ।”
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            justifyContent: "center",
          }}
        >
          {/* সদস্য ফর্ম কার্ড */}
          <div
            style={{
              flex: "1 1 260px",
              background: "#1a0000",
              border: "2px solid #b50000",
              borderRadius: 28,
              padding: "clamp(24px,6vw,32px) 20px",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform .2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
            onClick={() => window.open(MEMBER_FORM_LINK, "_blank")}
          >
            <div
              style={{ fontSize: "clamp(40px,10vw,48px)", marginBottom: 12 }}
            >
              📝
            </div>
            <h3
              style={{
                color: "#ffd700",
                fontWeight: 900,
                fontSize: "clamp(22px,5vw,26px)",
                marginBottom: 12,
              }}
            >
              সদস্য ফর্ম
            </h3>
            <p
              style={{
                color: "#ccc",
                fontSize: "clamp(12px,3.5vw,14px)",
                marginBottom: 20,
              }}
            >
              জনকল্যাণ পার্টির সদস্য হতে নিচের লিংকে যান
            </p>
            <button
              style={{
                background: "#ffd700",
                color: "#000",
                border: "none",
                borderRadius: 40,
                padding: "10px 24px",
                fontWeight: 900,
                cursor: "pointer",
                fontSize: "clamp(14px,4vw,16px)",
              }}
            >
              ফর্ম খুলুন 🔗
            </button>
          </div>

          {/* JBF কার্ড */}
          <div
            style={{
              flex: "1 1 260px",
              background: "#1a0000",
              border: "2px solid #b50000",
              borderRadius: 28,
              padding: "clamp(24px,6vw,32px) 20px",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform .2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
            onClick={() => window.open(JBF_LINK, "_blank")}
          >
            <div
              style={{ fontSize: "clamp(40px,10vw,48px)", marginBottom: 12 }}
            >
              ⚡
            </div>
            <h3
              style={{
                color: "#ffd700",
                fontWeight: 900,
                fontSize: "clamp(22px,5vw,26px)",
                marginBottom: 12,
              }}
            >
              JBF
            </h3>
            <p
              style={{
                color: "#ccc",
                fontSize: "clamp(12px,3.5vw,14px)",
                marginBottom: 20,
              }}
            >
              জনকল্যাণ বাহিনী ফোর্স — বিশেষ বাহিনীতে যোগ দিন
            </p>
            <button
              style={{
                background: "#ffd700",
                color: "#000",
                border: "none",
                borderRadius: 40,
                padding: "10px 24px",
                fontWeight: 900,
                cursor: "pointer",
                fontSize: "clamp(14px,4vw,16px)",
              }}
            >
              ফর্ম খুলুন 🔗
            </button>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#aaa",
            marginTop: 40,
            fontSize: "clamp(12px,3.5vw,14px)",
          }}
        >
          👆 উপরের যেকোনো কার্ডে ক্লিক করলে নতুন ট্যাবে ফর্মটি খুলে যাবে
        </p>
      </div>
    </div>
  );
}

// ── Jogajog Page ───────────────────────────────────────────────────
function JogajogPage() {
  const contacts = [
    { icon: "📘", label: "ফেসবুক পেজ", value: "facebook.com/jonokollyanparty" },
    { icon: "☎️", label: "নেতার নম্বর", value: "+8801XXXXXXXXX" },
    { icon: "📧", label: "ইমেইল", value: "jonokollyan@party.bd" },
    { icon: "📍", label: "কার্যালয়", value: "ঢাকা, বাংলাদেশ" },
  ];

  return (
    <div
      style={{
        background: "#080808",
        minHeight: "60vh",
        padding: "clamp(30px,8vw,60px) 16px",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(24px,7vw,48px)",
            fontWeight: 900,
            color: "#ffd700",
            marginBottom: "clamp(24px,6vw,48px)",
          }}
        >
          যোগাযোগ করুন 📞
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {contacts.map((c, i) => (
            <div
              key={i}
              style={{
                background: "#1a0000",
                border: "2px solid #b50000",
                borderRadius: 20,
                padding: "clamp(16px,4vw,24px) 20px",
                display: "flex",
                alignItems: "center",
                gap: "clamp(16px,4vw,20px)",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "clamp(28px,7vw,36px)" }}>{c.icon}</span>
              <div>
                <div
                  style={{
                    color: "#888",
                    fontSize: "clamp(11px,3vw,13px)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  {c.label}
                </div>
                <div
                  style={{
                    color: "#ffd700",
                    fontWeight: 900,
                    fontSize: "clamp(16px,4vw,20px)",
                    marginTop: 4,
                    wordBreak: "break-word",
                  }}
                >
                  {c.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Admin Page (Supabase CRUD Operations) ───────────────────────────────────
function AdminPage({
  stats,
  setStats,
  leaders,
  setLeaders,
  videos,
  setVideos,
}: any) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [pwError, setPwError] = useState(false);
  const [newLeader, setNewLeader] = useState({
    name: "",
    seat: "",
    role: "",
    image: "",
  });
  const [newVideo, setNewVideo] = useState({ title: "", link: "" });

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  };

  // Leader operations with Supabase
  const addLeader = async () => {
    if (!newLeader.name || !newLeader.role) return alert("নাম ও পদ আবশ্যক!");

    try {
      const { data, error } = await supabase
        .from("leaders")
        .insert([
          {
            name: newLeader.name,
            seat: newLeader.seat,
            role: newLeader.role,
            image:
              newLeader.image ||
              "https://via.placeholder.com/400x300?text=নেতা+ছবি",
          },
        ])
        .select();

      if (error) throw error;
      setLeaders([...leaders, data[0]]);
      setNewLeader({ name: "", seat: "", role: "", image: "" });
      alert("নেতা সফলভাবে যোগ করা হয়েছে!");
    } catch (error: any) {
      alert("নেতা যোগ করতে সমস্যা: " + error.message);
    }
  };

  const removeLeader = async (id: number, name: string) => {
    if (window.confirm(`"${name}" কে নেতার তালিকা থেকে মুছে ফেলবেন?`)) {
      try {
        const { error } = await supabase.from("leaders").delete().eq("id", id);

        if (error) throw error;
        setLeaders(leaders.filter((leader: any) => leader.id !== id));
        alert("নেতা সফলভাবে মুছে ফেলা হয়েছে!");
      } catch (error: any) {
        alert("নেতা মুছতে সমস্যা: " + error.message);
      }
    }
  };

  // Video operations with Supabase
  const addVideo = async () => {
    if (!newVideo.title || !newVideo.link) return alert("টাইটেল ও লিঙ্ক দিন!");

    try {
      const { data, error } = await supabase
        .from("videos")
        .insert([{ title: newVideo.title, link: newVideo.link }])
        .select();

      if (error) throw error;
      setVideos([...videos, data[0]]);
      setNewVideo({ title: "", link: "" });
      alert("ভিডিও সফলভাবে যোগ করা হয়েছে!");
    } catch (error: any) {
      alert("ভিডিও যোগ করতে সমস্যা: " + error.message);
    }
  };

  const removeVideo = async (id: number, title: string) => {
    if (window.confirm(`"${title}" ভিডিওটি মুছে ফেলবেন?`)) {
      try {
        const { error } = await supabase.from("videos").delete().eq("id", id);

        if (error) throw error;
        setVideos(videos.filter((video: any) => video.id !== id));
        alert("ভিডিও সফলভাবে মুছে ফেলা হয়েছে!");
      } catch (error: any) {
        alert("ভিডিও মুছতে সমস্যা: " + error.message);
      }
    }
  };

  // Stats update with Supabase
  const updateStats = async (key: string, newValue: number) => {
    try {
      const { error } = await supabase
        .from("stats")
        .update({ [key]: newValue })
        .eq("id", 1);

      if (error) throw error;
    } catch (error) {
      console.error("Stats আপডেট করতে সমস্যা:", error);
    }
  };

  const handleStatsChange = (key: string, increment: boolean) => {
    const newValue = increment ? stats[key] + 1 : Math.max(0, stats[key] - 1);
    setStats({ ...stats, [key]: newValue });
    updateStats(key, newValue);
  };

  if (!loggedIn) {
    return (
      <div
        style={{
          background: "#080808",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
        }}
      >
        <div
          style={{
            background: "#1a0000",
            border: "2px solid #b50000",
            borderRadius: 24,
            padding: "clamp(24px,6vw,40px)",
            width: "100%",
            maxWidth: 400,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "clamp(40px,10vw,48px)", marginBottom: 12 }}>
            🔐
          </div>
          <h2
            style={{
              color: "#ffd700",
              fontWeight: 900,
              fontSize: "clamp(22px,6vw,26px)",
              marginBottom: 8,
            }}
          >
            অ্যাডমিন লগইন
          </h2>
          <input
            type="password"
            placeholder="পাসওয়ার্ড দিন"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPwError(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            style={{
              width: "100%",
              background: "#0d0000",
              border: `2px solid ${pwError ? "#f00" : "#3d0000"}`,
              borderRadius: 12,
              padding: "13px 16px",
              color: "#fff",
              fontSize: 16,
              outline: "none",
              boxSizing: "border-box",
              fontFamily: "inherit",
              marginBottom: 12,
            }}
          />
          {pwError && (
            <p style={{ color: "#f55", fontSize: 14, marginBottom: 12 }}>
              ❌ পাসওয়ার্ড ভুল!
            </p>
          )}
          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              background: "#ffd700",
              color: "#000",
              border: "none",
              borderRadius: 12,
              padding: "14px",
              fontWeight: 900,
              fontSize: 16,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            প্রবেশ করুন 🔑
          </button>
        </div>
      </div>
    );
  }

  const inputStyle = {
    width: "100%",
    background: "#0d0000",
    border: "2px solid #3d0000",
    borderRadius: 10,
    padding: "11px 14px",
    color: "#fff",
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    marginBottom: 10,
  };
  const btnGreen = {
    background: "#00aa44",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "11px 20px",
    fontWeight: 900,
    cursor: "pointer",
    fontSize: 15,
    fontFamily: "inherit",
  };
  const btnRed = {
    background: "#b50000",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "6px 14px",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: 13,
    fontFamily: "inherit",
  };
  const btnDelete = {
    background: "#8b0000",
    color: "#ffaaaa",
    border: "1px solid #ff000066",
    borderRadius: 8,
    padding: "6px 14px",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: 13,
    fontFamily: "inherit",
  };

  return (
    <div
      style={{
        background: "#080808",
        minHeight: "60vh",
        padding: "clamp(20px,5vw,40px) 16px",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 36,
          }}
        >
          <h2
            style={{
              color: "#ffd700",
              fontWeight: 900,
              fontSize: "clamp(22px,6vw,28px)",
              margin: 0,
            }}
          >
            ⚙️ অ্যাডমিন প্যানেল
          </h2>
          <button
            onClick={() => {
              setLoggedIn(false);
              setPassword("");
            }}
            style={{ ...btnRed, padding: "9px 18px" }}
          >
            লগআউট 🚪
          </button>
        </div>

        {/* Stats Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 16,
            marginBottom: 36,
          }}
        >
          {[
            { label: "মোট সদস্য", key: "members" },
            { label: "মোট নেতা", key: "leaders" },
            { label: "অপেক্ষমাণ", key: "pending" },
          ].map((s) => (
            <div
              key={s.key}
              style={{
                background: "#1a0000",
                border: "2px solid #b50000",
                borderRadius: 18,
                padding: "clamp(20px,5vw,24px)",
              }}
            >
              <div
                style={{
                  color: "#888",
                  fontSize: "clamp(12px,3.5vw,13px)",
                  marginBottom: 8,
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  color: "#ffd700",
                  fontWeight: 900,
                  fontSize: "clamp(28px,8vw,32px)",
                  marginBottom: 14,
                }}
              >
                {stats[s.key]?.toLocaleString() || "0"}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={() => handleStatsChange(s.key, true)}
                  style={{ ...btnGreen, padding: "8px 18px" }}
                >
                  +
                </button>
                <button
                  onClick={() => handleStatsChange(s.key, false)}
                  style={{ ...btnRed, padding: "8px 18px" }}
                >
                  −
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Leader & Video Sections */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 24,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              background: "#1a0000",
              border: "2px solid #b50000",
              borderRadius: 20,
              padding: "clamp(20px,5vw,28px)",
            }}
          >
            <h3
              style={{
                color: "#ffd700",
                fontWeight: 900,
                fontSize: "clamp(18px,5vw,20px)",
                marginBottom: 20,
              }}
            >
              ➕ নতুন নেতা যোগ করুন
            </h3>
            <input
              style={inputStyle}
              placeholder="নাম *"
              value={newLeader.name}
              onChange={(e) =>
                setNewLeader({ ...newLeader, name: e.target.value })
              }
            />
            <input
              style={inputStyle}
              placeholder="আসন"
              value={newLeader.seat}
              onChange={(e) =>
                setNewLeader({ ...newLeader, seat: e.target.value })
              }
            />
            <input
              style={inputStyle}
              placeholder="পদ *"
              value={newLeader.role}
              onChange={(e) =>
                setNewLeader({ ...newLeader, role: e.target.value })
              }
            />
            <input
              style={inputStyle}
              placeholder="ছবির URL (ঐচ্ছিক)"
              value={newLeader.image}
              onChange={(e) =>
                setNewLeader({ ...newLeader, image: e.target.value })
              }
            />
            <button
              onClick={addLeader}
              style={{ ...btnGreen, width: "100%", padding: "13px" }}
            >
              নেতা যোগ করুন ✅
            </button>
          </div>

          <div
            style={{
              background: "#1a0000",
              border: "2px solid #b50000",
              borderRadius: 20,
              padding: "clamp(20px,5vw,28px)",
            }}
          >
            <h3
              style={{
                color: "#ffd700",
                fontWeight: 900,
                fontSize: "clamp(18px,5vw,20px)",
                marginBottom: 20,
              }}
            >
              ➕ নতুন ভিডিও যোগ করুন
            </h3>
            <input
              style={inputStyle}
              placeholder="ভিডিও টাইটেল *"
              value={newVideo.title}
              onChange={(e) =>
                setNewVideo({ ...newVideo, title: e.target.value })
              }
            />
            <input
              style={inputStyle}
              placeholder="YouTube Embed URL *"
              value={newVideo.link}
              onChange={(e) =>
                setNewVideo({ ...newVideo, link: e.target.value })
              }
            />
            <div
              style={{
                color: "#888",
                fontSize: "clamp(10px,3vw,12px)",
                marginBottom: 12,
              }}
            >
              উদাহরণ: https://www.youtube.com/embed/dQw4w9WgXcQ
            </div>
            <button
              onClick={addVideo}
              style={{ ...btnGreen, width: "100%", padding: "13px" }}
            >
              ভিডিও যোগ করুন ✅
            </button>
          </div>
        </div>

        {/* Existing Leaders List with Delete Buttons */}
        <div
          style={{
            background: "#0d0000",
            border: "2px solid #b50000",
            borderRadius: 20,
            padding: "clamp(20px,5vw,28px)",
            marginBottom: 36,
          }}
        >
          <h3
            style={{
              color: "#ffd700",
              fontWeight: 900,
              fontSize: "clamp(18px,5vw,20px)",
              marginBottom: 20,
            }}
          >
            📋 বর্তমান নেতাদের তালিকা ({leaders.length})
          </h3>
          {leaders.length === 0 ? (
            <p style={{ color: "#888", textAlign: "center", padding: "20px" }}>
              কোনো নেতা যোগ করা হয়নি।
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {leaders.map((leader: any) => (
                <div
                  key={leader.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#1a0000",
                    borderRadius: 12,
                    padding: "12px 16px",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <strong style={{ color: "#ffd700" }}>{leader.name}</strong>
                    <span
                      style={{ color: "#aaa", marginLeft: 12, fontSize: 13 }}
                    >
                      ({leader.role})
                    </span>
                    {leader.seat && (
                      <span
                        style={{ color: "#777", marginLeft: 12, fontSize: 12 }}
                      >
                        আসন: {leader.seat}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => removeLeader(leader.id, leader.name)}
                    style={btnDelete}
                  >
                    🗑 মুছুন
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Existing Videos List with Delete Buttons */}
        <div
          style={{
            background: "#0d0000",
            border: "2px solid #b50000",
            borderRadius: 20,
            padding: "clamp(20px,5vw,28px)",
          }}
        >
          <h3
            style={{
              color: "#ffd700",
              fontWeight: 900,
              fontSize: "clamp(18px,5vw,20px)",
              marginBottom: 20,
            }}
          >
            📋 বর্তমান ভিডিওর তালিকা ({videos.length})
          </h3>
          {videos.length === 0 ? (
            <p style={{ color: "#888", textAlign: "center", padding: "20px" }}>
              কোনো ভিডিও যোগ করা হয়নি।
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {videos.map((video: any) => (
                <div
                  key={video.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#1a0000",
                    borderRadius: 12,
                    padding: "12px 16px",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <strong style={{ color: "#ffd700" }}>{video.title}</strong>
                    <span
                      style={{
                        color: "#777",
                        marginLeft: 12,
                        fontSize: 12,
                        wordBreak: "break-all",
                      }}
                    >
                      {video.link?.substring(0, 50)}...
                    </span>
                  </div>
                  <button
                    onClick={() => removeVideo(video.id, video.title)}
                    style={btnDelete}
                  >
                    🗑 মুছুন
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({ members: 0, leaders: 0, pending: 0 });
  const [leaders, setLeaders] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);

  // Supabase থেকে সব ডাটা লোড করা
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        // Fetch stats
        const { data: statsData } = await supabase
          .from("stats")
          .select("*")
          .single();
        if (statsData) setStats(statsData);

        // Fetch leaders
        const { data: leadersData } = await supabase
          .from("leaders")
          .select("*");
        if (leadersData) setLeaders(leadersData);

        // Fetch videos
        const { data: videosData } = await supabase.from("videos").select("*");
        if (videosData) setVideos(videosData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const renderPage = () => {
    if (loading) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
          }}
        >
          <div style={{ color: "#ffd700", fontSize: "24px" }}>লোড হচ্ছে...</div>
        </div>
      );
    }

    switch (page) {
      case "home":
        return <HomePage stats={stats} setPage={setPage} />;
      case "netara":
        return <NetaraPage />;
      case "istehar":
        return <IsteharPage />;
      case "video":
        return <VideoPage />;
      case "join":
        return <JoinPage />;
      case "jogajog":
        return <JogajogPage />;
      case "admin":
        return (
          <AdminPage
            stats={stats}
            setStats={setStats}
            leaders={leaders}
            setLeaders={setLeaders}
            videos={videos}
            setVideos={setVideos}
          />
        );
      default:
        return <HomePage stats={stats} setPage={setPage} />;
    }
  };

  return (
    <div
      style={{
        background: "#080808",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', sans-serif",
      }}
    >
      <Navbar page={page} setPage={setPage} />
      <main>{renderPage()}</main>
      <footer
        style={{
          background: "#8b0000",
          padding: "clamp(20px,5vw,28px) 16px",
          textAlign: "center",
          fontWeight: 700,
          fontSize: "clamp(12px,3.5vw,15px)",
          borderTop: "2px solid #ff000033",
        }}
      >
        © ২০২৬ জনকল্যাণ পার্টি — "উন্নয়ন এমন হবে, Google Map আপডেট নিতে ভয়
        পাবে" 😎
      </footer>
    </div>
  );
}
