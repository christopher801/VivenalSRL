import { createCanvas, loadImage } from "canvas";
import fs from "fs";
import path from "path";

const OUTPUT = "./public";

const sizes = [16, 32, 48, 64, 96, 128, 180, 192, 512];

async function generate() {
  const img = await loadImage("./public/vivenal-image-logo-removebg-preview.png");

  for (const size of sizes) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, size, size);
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(path.join(OUTPUT, `favicon-${size}x${size}.png`), buffer);
    console.log(`✓ favicon-${size}x${size}.png`);
  }

  // favicon.ico = 32x32
  const canvas = createCanvas(32, 32);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, 32, 32);
  fs.writeFileSync(path.join(OUTPUT, "favicon.ico"), canvas.toBuffer("image/png"));
  console.log("✓ favicon.ico");

  // apple-touch-icon = 180x180
  const appleCanvas = createCanvas(180, 180);
  const appleCtx = appleCanvas.getContext("2d");
  appleCtx.drawImage(img, 0, 0, 180, 180);
  fs.writeFileSync(path.join(OUTPUT, "apple-touch-icon.png"), appleCanvas.toBuffer("image/png"));
  console.log("✓ apple-touch-icon.png");

  // site.webmanifest
  const manifest = {
    name: "Vivenal SRL",
    short_name: "Vivenal",
    icons: [
      { src: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    theme_color: "#c62828",
    background_color: "#ffffff",
    display: "standalone",
  };
  fs.writeFileSync(path.join(OUTPUT, "site.webmanifest"), JSON.stringify(manifest, null, 2));
  console.log("✓ site.webmanifest");

  console.log("\n✅ Tout icon yo jenere nan /public/");
}

generate().catch(console.error);