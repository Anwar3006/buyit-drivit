/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://buyit-drivit-waitlist.created.app",
          },
        ],
      },
    ];
  },
  images: {
    domains: [
      "img.clerk.com", // Allow Clerk images
      "images.clerk.dev", // Additional Clerk domain
      "uploadthing.com", // In case you use UploadThing
      "utfs.io", // UploadThing file storage domain
      "images.unsplash.com",
      "www.byd.com",
      "i02.appmifile.com",
    ],
  },
};

export default nextConfig;
