module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{js,css,html}'],
  globIgnores: ['**/{sw,workbox*}.js'],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: 'dist/sw.js',
  skipWaiting: true,
  sourcemap: true,
  mode: 'development',
  navigateFallback: 'index2.html',
  runtimeCaching: [{ urlPattern: '*', handler: 'NetworkFirst' }],
};
