const webpack = require("webpack");

module.exports = function override(config) {
    config.resolve.fallback = Object.assign(config.resolve.fallback || {}, {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        assert: require.resolve("assert"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify"),
        url: require.resolve("url"),
        //'process/browser': require.resolve('process/browser'),
    });

    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.MY_ENV': JSON.stringify(process.env.MY_ENV),
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
        }),
    ]);
    return config;
};