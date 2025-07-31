// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Unga palaya configuration inga irukkalam

  typescript: {
    // !! ECHARIKKAI !!
    // Unga project-la type errors irundhaalum, production build-a vetrigarama
    // mudikka anumathikkum. Idhu aabathanathu.
    // !! ECHARIKKAI !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
