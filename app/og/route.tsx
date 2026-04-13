import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0d1829",
          padding: "60px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background radial glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(63,81,181,0.35) 0%, rgba(63,81,181,0.12) 50%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(79,135,247,0.25) 0%, rgba(79,135,247,0.08) 50%, transparent 70%)",
          }}
        />

        {/* Top row — avatar + name */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {/* Avatar circle */}
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1e2e47 0%, #0d1829 100%)",
              border: "3px solid #4f87f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: "800",
              color: "#4f87f7",
              flexShrink: 0,
            }}
          >
            CP
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#8fa3be",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Portfolio
            </span>
            <span
              style={{
                fontSize: "42px",
                fontWeight: "800",
                color: "#f3f6fb",
                lineHeight: 1,
              }}
            >
              Cheng Piao
            </span>
          </div>
        </div>

        {/* Centre headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontSize: "56px",
              fontWeight: "800",
              color: "#f3f6fb",
              lineHeight: 1.1,
            }}
          >
            Sr. Full Stack Developer
          </span>
          <span
            style={{
              fontSize: "30px",
              fontWeight: "500",
              color: "#8fa3be",
              lineHeight: 1.3,
            }}
          >
            Web Scraper &amp; Bot Developer · Team Leader
          </span>
        </div>

        {/* Bottom row — tags + URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* Skill tags */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {["React", "Next.js", "Python", "Web Scraping", "AI"].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "6px 18px",
                  borderRadius: "999px",
                  background: "#1e2e47",
                  border: "1px solid #2a3f60",
                  color: "#4f87f7",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Domain */}
          <span
            style={{
              fontSize: "20px",
              fontWeight: "500",
              color: "#4f87f7",
              opacity: 0.8,
            }}
          >
            codymonky.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
