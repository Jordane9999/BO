// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placeholder.com"],
  },
  // Configuration pour l'internationalisation
  i18n: {
    localeDetection: false, // Nous utiliserons notre propre détection via middleware
    defaultLocale: "en", // Replace "en" with your default locale
    locales: ["en", "fr"], // Replace with the list of supported locales
  },
};

module.exports = nextConfig;
