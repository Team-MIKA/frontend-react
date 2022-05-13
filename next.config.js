/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    webpack5: true,
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: false,
    },
};
