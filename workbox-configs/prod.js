module.exports = {
  globDirectory: 'deploy/',
  globPatterns: ['**/*.{js,css,html}'],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: 'deploy/sw.js',
  skipWaiting: true,
  sourcemap: false,
  mode: 'production',
  navigateFallback: 'dev-emoji-page/index.html',
  runtimeCaching: [{ urlPattern: '*', handler: 'NetworkFirst' }],
};
