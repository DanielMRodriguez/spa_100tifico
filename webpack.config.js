const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWeboackPlugin = require('copy-webpack-plugin');
module.exports ={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js',
    },
    resolve : {
        extensions: ['.js'],

    },
    module:{
        rules:[
            {
               test: /\.js$/,
               exclude: /node_modules/,
               use:{
                   loader: 'babel-loader'
               }
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            inject:true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new CopyWeboackPlugin([
            {
                from: './src/styles/styles.css',
                to: ''
            }
        ])
    ]
}