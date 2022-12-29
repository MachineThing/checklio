const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },

    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        client: {
            overlay: {
                errors: true,
                warnings: false
            }
        },
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5000',
                secure: false,
            },
        },
    }
}