const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.(js|jsx)$/,
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
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
                target: 'http://127.0.0.1:8000',
                secure: false,
            },
        },
    }
}