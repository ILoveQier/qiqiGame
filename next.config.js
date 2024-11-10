// // next.config.js
// module.exports = {
//   output: 'export', // This tells Next.js to export your site as static HTML
//   swcMinify: false,
//   productionBrowserSourceMaps: true,
//   images: {
//     unoptimized: true, // Disable image optimization during the export
//   },
// };

// next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  output: 'export',
  assetPrefix,
  basePath,
};