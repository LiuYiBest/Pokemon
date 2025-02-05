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
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: true
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
    },
    resolve: {
        extensions: ['.js', '.css']
    }
}; 