const config = require('./webpack.config.js');
const merge = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin'); // minifiado de JS
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // minificado de css

const app = merge(config, {
    mode: "production",
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
});

module.exports = app;
