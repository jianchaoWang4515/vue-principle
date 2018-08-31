const path = require('path');

module.exports = {
	mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            include: [path.resolve(__dirname, "lib/"), path.resolve(__dirname, "index.js")], // 需要进行babel-loader
            exclude: /node_modules/ // 不需要进行babel-loader
        }]
    }
};