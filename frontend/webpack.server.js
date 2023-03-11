const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],

    entry: './server.js',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist'),
        library: 'app',
        libraryTarget: 'commonjs2'
    },

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.(js|jsx)$/,
            exclude: /node_modules/
        }]
    },

    watch: true
}