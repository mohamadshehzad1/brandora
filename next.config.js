/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
  ignoreDuringBuilds: true,
},
  images: {
    domains: [
      'res.cloudinary.com',  // ✅ Correct domain for your Cloudinary images
      'via.placeholder.com', // ✅ Placeholder images
      'placehold.co',        // ✅ If you use placehold.co too
      'affiliates.jethost.com' // ✅ For affiliate banners/pixels
    ],
  },
}

module.exports = nextConfig
