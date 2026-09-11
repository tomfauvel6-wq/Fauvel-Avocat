import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fauvel Avocat";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#071426",
          color: "#F4F1EA",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px"
        }}
      >
        <div style={{ color: "#B89A5E", fontSize: 28, letterSpacing: 8, textTransform: "uppercase" }}>
          Fauvel Avocat
        </div>
        <div style={{ marginTop: 32, fontSize: 74, lineHeight: 1.05, maxWidth: 900 }}>
          Fiscalité stratégique, contentieux et structuration patrimoniale.
        </div>
        <div style={{ marginTop: 46, width: 120, height: 2, background: "#B89A5E" }} />
      </div>
    ),
    size
  );
}
