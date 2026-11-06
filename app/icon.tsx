import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Same glyph subset as opengraph-image.tsx — it already contains "M".
const fontData = await readFile(
  join(process.cwd(), "assets/ma-shan-zheng-og.ttf"),
);

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          background: "#192732",
          color: "#bf9341",
          fontFamily: "Ma Shan Zheng",
          fontSize: 26,
        }}
      >
        M
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Ma Shan Zheng", data: fontData, style: "normal", weight: 400 }],
    },
  );
}
