// https://nextjs.org/docs/api-reference/next.config.js/rewrites

module.exports = {
  async rewrites() {
    return [
      {
        source: "/dashboard",
        destination: "/",
      },
      {
        source: "/prev",
        destination: "/",
      },
      {
        source: "/:path/next",
        destination: "/next",
      },
      {
        source: "/:path*",
        destination: "/",
      },
    ];
  },
};
