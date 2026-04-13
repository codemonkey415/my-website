import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "6px",
          background: "linear-gradient(135deg, #1e2e47 0%, #0d1829 100%)",
          border: "2px solid #4f87f7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "13px",
          fontWeight: "800",
          color: "#4f87f7",
          fontFamily: "sans-serif",
          letterSpacing: "-0.5px",
        }}
      >
        CP
      </div>
    ),
    { ...size }
  );
}
