/**@type {import('next').NextConfig} */

module.exports = {
    reactStricMode: false,
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = {fs: false};

        return config;
    },
};