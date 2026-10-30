import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site-config";
import { shareImage } from "@/lib/metadata";

export const alt = shareImage.alt;
export const size = { width: shareImage.width, height: shareImage.height };
export const contentType = shareImage.type;

// Brand colors from globals.css.
const colors = {
  navy: "#0c1a3f",
  blue: "#20327c",
  red: "#b62225",
};

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/images/Logo-White.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
          color: "white",
          backgroundColor: colors.navy,
          backgroundImage: `radial-gradient(circle at 85% 15%, ${colors.blue}, transparent 55%)`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- next/og renders plain img elements */}
        <img alt="" height={136} src={logoSrc} width={260} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, letterSpacing: "-0.02em" }}>{siteConfig.name}</div>
          <div style={{ marginTop: 20, fontSize: 34, color: "rgba(255,255,255,0.8)" }}>
            Heating, Cooling &amp; Restaurant Equipment Service
          </div>
          <div style={{ display: "flex", marginTop: 40 }}>
            <div style={{ display: "flex", padding: "16px 32px", backgroundColor: colors.red, fontSize: 38 }}>
              {siteConfig.phone.display}
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: 0, bottom: 0, width: 240, height: 10, backgroundColor: colors.red }} />
      </div>
    ),
    size,
  );
}
