import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP fallback — meaningful bandwidth saving on the
    // photo-heavy service and gallery pages, which matters on Indian mobile.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 420, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [56, 64, 96, 128, 256, 384],
    // Next 16 defaults `qualities` to [75]; 85 is used for the hero and
    // doctor portraits, so both values must be declared.
    qualities: [75, 85],
  },

  async redirects() {
    return [
      {
        // Every treatment lives at /services/<slug>. The keyword-rich
        // Invisalign URL is kept alive as a redirect so nothing that already
        // points at it breaks, but it is no longer a second competing page.
        source: "/invisalign-prayagraj",
        destination: "/services/invisalign-clear-aligners",
        permanent: true,
      },
      // Common misspellings and the old city name people still search for.
      { source: "/invisalign", destination: "/services/invisalign-clear-aligners", permanent: true },
      { source: "/invisalign-allahabad", destination: "/services/invisalign-clear-aligners", permanent: true },
      { source: "/treatments", destination: "/services", permanent: true },
      { source: "/book", destination: "/contact", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        // Transcoded clinic footage and posters are immutable build assets.
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
