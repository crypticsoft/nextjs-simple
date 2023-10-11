const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
    // env: {
    //     PUBLIC_BUILDER_API_KEY: PUBLIC_BUILDER_API_KEY,
    // },
});

module.exports = nextConfig;
