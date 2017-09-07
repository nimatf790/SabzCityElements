const path = require('path');

const config = {
    entry: {
        polyfills: '/components/SabzCityElements/index.html-suggestion/polyfills.js',
        index: '/components/SabzCityElements/index.html-suggestion/index.js',
        // add your app here
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "es6-template-string"
            }
        ]
    }
}