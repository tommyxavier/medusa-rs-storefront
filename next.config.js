const checkEnvVariables = require("./check-env-variables")

checkEnvVariables()

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      // Remove this if you're not using localhost for images at all
      //{
      //   protocol: "http",
      //  hostname: "localhost",
      //},
      {
        protocol: "https",
        hostname: "iajnjwbxmuvbvpykkorq.supabase.co", // <--- ADD THIS LINE FOR YOUR SUPABASE S3 BUCKET HOSTNAME
      },
      // Keep other S3 domains if you anticipate images from those sources too,
      // but if all your current images are on Supabase, these might be redundant.
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
    ],
  },
}

module.exports = nextConfig
