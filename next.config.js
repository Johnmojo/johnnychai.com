/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/Sitemap"
      }
    ];
  }
};
