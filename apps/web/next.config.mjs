/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com',
      },
      {
        hostname: 'res.cloudinary.com',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'img.freepik.com',
      },
    ],
  },
}

export default nextConfig
