import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      { source: "/honoraires", destination: "/methode-du-cabinet", permanent: true },
      { source: "/recherche", destination: "/", permanent: true }
    ];
  }
};

export default withMDX(nextConfig);
