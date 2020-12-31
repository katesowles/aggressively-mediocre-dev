const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/* config options documented here: https://github.com/vercel/next.js/blob/canary/packages/next/next-server/server/config.ts#L12-L63 */
module.exports = (phase, { defaultConfig }) => {
  const isDevEnv = phase === PHASE_DEVELOPMENT_SERVER;
  const isProdEnv = !isDevEnv;

  return {
    ...defaultConfig,
    pageExtensions: ['ts', 'tsx'],
    plugins: ['tailwindcss', 'autoprefixer'],
    // sassOptions: {},
    experimental: {
      // optimizeCss: isProdEnv,
      // optimizeFonts: isProdEnv,
      // optimizeImages: isProdEnv,
      // scrollRestoration: true,
    },
  };
};
