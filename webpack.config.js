"use strict";

module.exports = {
	entry: './src/index.js',
	output: { path: __dirname, filename: 'public/dist/bundle.js' },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.less/,
                exclude: /node_modules/,
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'less-loader',
                ]
            },
            {
                test: /\.jpg/,
                exclude: /(node_modules)/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png/,
                exclude: /(node_modules)/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            }
        ]
    },
};
