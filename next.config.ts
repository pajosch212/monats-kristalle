import type { NextConfig } from "next";

// Custom Domain (www.monats-kristalle.de) via GitHub Pages CNAME liegt auf
// Root, kein /monats-kristalle/ Unterpfad mehr nötig wie bei der alten
// pajosch212.github.io/monats-kristalle URL.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
