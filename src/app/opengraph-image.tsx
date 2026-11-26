import { ImageResponse } from "next/og";

// Link-preview image (WhatsApp, Facebook, LinkedIn, X) for every page.
export const alt = "Runnova — AI Integration for Business with Full Customization";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #FFFFFF 0%, #EEF0FF 55%, #D9DCFF 100%)",
          color: "#0F172A",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "#3B28FF",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              fontWeight: 800,
            }}
          >
            R
          </div>
          <div style={{ fontSize: 44, fontWeight: 800 }}>Runnova</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 76, fontWeight: 800, color: "#3B28FF", lineHeight: 1.05 }}>
            AI Integration for Business
          </div>
          <div style={{ fontSize: 40, fontWeight: 600, color: "#334155" }}>
            With full customization, built into your systems
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#475569" }}>runnova.cloud</div>
      </div>
    ),
    size,
  );
}
