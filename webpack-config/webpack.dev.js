const config = require('./webpack.config.js');
const merge = require('webpack-merge');

const app = merge(config, {
    mode: "development",

});

module.exports = app;
