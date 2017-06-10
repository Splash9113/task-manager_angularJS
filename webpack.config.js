var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['./app/app.js', './app/app.css'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            // modules: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "ng-cache",
                        options: {
                            prefix: '[dir]/[dir]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "app"),
        compress: true,
        port: 8000
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};