const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    output: {
        publicPath: 'http://localhost:3000/',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader', // or 'ts-loader' (but use only one)
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devtool: 'source-map',
    plugins: [
        new ModuleFederationPlugin({
            name: 'shell',
            remotes: {
                cards: 'cards@http://localhost:3001/remoteEntry.js',
            },
            shared: {
                react: { singleton: true, requiredVersion: '19.1.0' },
                'react-dom': { singleton: true, requiredVersion: '19.1.0' },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
              crossorigin: 'anonymous',
        }),
    ],
};
