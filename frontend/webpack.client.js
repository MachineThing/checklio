const path = require('path');

module.exports = {
    entry: './client.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../backend/static/gen'),
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

    watch: true
}