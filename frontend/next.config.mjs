/** @type {import('next').NextConfig} */
console.log("The environment in next.config.mjs", process.env);
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  }
}

export default nextConfig;