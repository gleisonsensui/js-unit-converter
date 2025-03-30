const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('node:path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/incex.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    pluigins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            index: 'index.html',
            title: 'Conversor de Unidades',
            publicPath: '/'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
}