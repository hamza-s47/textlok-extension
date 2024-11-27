const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 8080,
        open: true,
        hot: true,
        liveReload: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),

        
        new CopyWebpackPlugin({
            patterns: [
                { from: 'assets', to: 'assets' },
                { from: 'manifest.json', to: 'manifest.json' }
            ],
        }),
    ],
};
