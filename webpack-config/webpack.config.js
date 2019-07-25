const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: ['./src/js/index.js', './src/stylesheets/main.css'],
    output: {filename: '../dist/build.js'},
    plugins: [
        new MiniCssExtractPlugin({filename: '../dist/styles.css',}),
        new VueLoaderPlugin()],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.(png|jpg|gif|svg)$/, use: {loader: 'file-loader', options: {name: '[name].[ext]?[hash]'}}},
            {test: /\.(sa|sc|c)ss$/, use: [{loader: MiniCssExtractPlugin.loader,}, 'css-loader', 'sass-loader']},
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};

