const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    context: __dirname,
    entry: {
        'app': './app',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    watchOptions: {
        aggregateTimeout: 100,
        poll: true
    },
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname),
        host: 'frontend',
        // host: '0.0.0.0',
        port: 3000,
        historyApiFallback: {
            index: path.join(__dirname, 'index.html'),
        },
        sockHost: 'localhost',
        // proxy: {
        //     '/': 'http://localhost:3000',
        // },
    }
};