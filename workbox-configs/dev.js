module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{js,css,html}"],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: "dist/sw.js",
  skipWaiting: true,
  sourcemap: true,
  mode: "development",
  navigateFallback: "index.html",
  runtimeCaching: [{ urlPattern: "*", handler: "NetworkFirst" }],
  maximumFileSizeToCacheInBytes: 5000000,
};
