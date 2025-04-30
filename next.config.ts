const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flower.elevateegy.com",
        port: "", // optional, in case you're not using a port
        pathname: "/uploads/**", // be specific if needed
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
