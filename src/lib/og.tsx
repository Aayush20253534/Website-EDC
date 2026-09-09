import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "./site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const ASSETS = join(process.cwd(), "src", "lib", "og-assets");

/**
 * Fonts are read from disk rather than fetched from Google at build time, so
 * the build stays reproducible and works offline. ImageResponse needs TTF or
 * OTF — it cannot parse WOFF2.
 */
async function brandFonts() {
  const [display, sans] = await Promise.all([
    readFile(join(ASSETS, "cormorant-600.ttf")),
    readFile(join(ASSETS, "jakarta-600.ttf")),
  ]);
  return [
    { name: "Cormorant", data: display, weight: 600 as const, style: "normal" as const },
    { name: "Jakarta", data: sans, weight: 600 as const, style: "normal" as const },
  ];
}

async function markDataUri() {
  const png = await readFile(join(process.cwd(), "public", "brand", "mark.png"));
  return `data:image/png;base64,${png.toString("base64")}`;
}

/**
 * Branded share card.
 *
 * Every page previously shared the same generic logo image. In this market
 * links are passed around on WhatsApp constantly, so the preview card is
 * often the first thing a prospective patient sees — it earns a real design.
 *
 * ImageResponse supports only flexbox and a subset of CSS: no grid, no
 * background-clip, and every element with more than one child needs an
 * explicit `display: flex`.
 */
export async function renderOgCard({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  const [fonts, mark] = await Promise.all([brandFonts(), markDataUri()]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FBF7F2",
          padding: "68px 76px",
          position: "relative",
        }}
      >
        {/* warm sand arc, bled off the right edge */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -220,
            width: 760,
            height: 760,
            borderRadius: 760,
            backgroundColor: "#ECE1D1",
            opacity: 0.75,
          }}
        />

        {/* header: mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mark} width={62} height={62} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Cormorant",
                fontSize: 34,
                letterSpacing: 2,
                color: "#3A2C25",
                lineHeight: 1,
              }}
            >
              ECLECTIC
            </div>
            <div
              style={{
                fontFamily: "Jakarta",
                fontSize: 13,
                letterSpacing: 5,
                color: "#786D67",
                marginTop: 7,
              }}
            >
              DENTAL CARE
            </div>
          </div>
        </div>

        {/* the message */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 46, height: 2, backgroundColor: "#C25E4A" }} />
            <div
              style={{
                fontFamily: "Jakarta",
                fontSize: 19,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#A9452F",
              }}
            >
              {eyebrow}
            </div>
          </div>

          <div
            style={{
              fontFamily: "Cormorant",
              fontSize: title.length > 34 ? 82 : 100,
              lineHeight: 1.02,
              color: "#3A2C25",
              marginTop: 26,
            }}
          >
            {title}
          </div>

          {subtitle && (
            <div
              style={{
                fontFamily: "Jakarta",
                fontSize: 26,
                lineHeight: 1.45,
                color: "#786D67",
                marginTop: 22,
                maxWidth: 780,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* footer: location + phone */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #E0DBD5",
            paddingTop: 26,
          }}
        >
          {/* Single text node: Satori requires display:flex on any element
              with more than one child, and JSX interpolation split across
              literals counts as several children. */}
          <div style={{ fontFamily: "Jakarta", fontSize: 22, color: "#3A2C25" }}>
            {`${site.address.locality}, ${site.address.city}`}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Jakarta",
                fontSize: 22,
                color: "#FFFFFF",
                backgroundColor: "#A9452F",
                padding: "12px 26px",
                borderRadius: 999,
              }}
            >
              {site.phoneDisplay}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
