const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new CopyPlugin({
            patterns: [
                { 
                    from: "*.gif", 
                    to: "[name][ext]",
                    noErrorOnMissing: true
                }
            ],
        }),
    ],
    devServer: {
        static: './dist',
        hot: true
    }
}; 