import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0A1929 0%, #0D2233 55%, #07332A 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "2px solid rgba(201,162,75,0.4)",
            borderRadius: "16px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 60, fontWeight: 700, color: "#FFFFFF" }}>Second Alarm</span>
          <span
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: "#C9A24B",
              letterSpacing: 6,
              marginTop: 4,
            }}
          >
            INVASIVE CONTROL
          </span>
          <span style={{ fontSize: 26, color: "#B8C4D0", marginTop: 36 }}>
            Iguana &amp; Muscovy Duck Removal — Southwest Florida
          </span>
          <span style={{ fontSize: 24, color: "#7291AF", marginTop: 16 }}>(239) 365-6753</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
