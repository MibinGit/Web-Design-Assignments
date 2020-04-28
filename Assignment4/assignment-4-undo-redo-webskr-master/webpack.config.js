var HtmlWebpagePlugin = require('html-webpack-plugin');

var path = require('path');

module.exports = {
    entry: './src/Opeartion.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')

    },
    plugins:[new HtmlWebpagePlugin()],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }]
        },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    }
};
