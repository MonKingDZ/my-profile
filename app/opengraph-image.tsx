import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt = "你好，我是 MonKingdz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori can't read woff2, so this is a small TTF subset of Ma Shan Zheng
// containing only the glyphs drawn below. Re-download it with the same
// `text=` query if you change the copy.
const fontData = await readFile(
  join(process.cwd(), "assets/ma-shan-zheng-og.ttf"),
);

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f5f0",
          color: "#192732",
          fontFamily: "Ma Shan Zheng",
        }}
      >
        <div style={{ display: "flex", fontSize: 96 }}>
          你好，我是
          <span style={{ color: "#a97d2e", marginLeft: 24 }}>MonKingdz</span>
        </div>
        <div style={{ marginTop: 32, fontSize: 40, color: "#5b6670" }}>
          AI全栈独立开发者 · 博客 · 项目 · 随笔
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 48,
            fontSize: 28,
            color: "#b84357",
          }}
        >
          monkingdz.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Ma Shan Zheng", data: fontData, style: "normal", weight: 400 }],
    },
  );
}
