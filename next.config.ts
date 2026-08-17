import type { NextConfig } from "next";

// Domain www.monats-kristalle.de ist zu WooCommerce/Hostinger umgezogen.
// Diese Seite dient nur noch als Backup/Referenz unter
// pajosch212.github.io/monats-kristalle/, daher wieder mit Unterpfad.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/monats-kristalle",
  assetPrefix: "/monats-kristalle",
};

export default nextConfig;
