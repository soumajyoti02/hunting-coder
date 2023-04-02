// This is the configuration object for Next.js
// It includes options to configure the behavior of the framework

/** 
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
  // This option ensures that the framework enforces strict mode for React
  // Strict mode makes it easier to spot problems in the application by highlighting potential issues
  reactStrictMode: true,

  // This option adds trailing slashes to URLs, which can help solve a bug that occurs when refreshing a page with a dynamic URL in a static export
  trailingSlash: true
}

// Export the configuration object for use in other modules
module.exports = nextConfig
