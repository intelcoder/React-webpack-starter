var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BUILD_DIR = path.resolve(__dirname, './public');
var APP_DIR = path.resolve(__dirname, './app');

var config = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        APP_DIR + '/index.js'
    ],
    devtool: 'source-map',
    module : {
        preloaders: [{
            test: /\.scss/,
            loader: 'import-glob-loader'
        }],
        loaders : [
            {
                test : /\.jsx?/,
                loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react&presets[]=stage-0' ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css?sourceMap!sass?sourceMap' ]
            }
        ]
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath:'http://localhost:8080/assets/'
    },
    sassLoader: {
        includePaths: [ 'app/styles' ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('public/main.css')
    ]
};

module.exports = config;