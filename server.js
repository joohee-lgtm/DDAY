const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: path.resolve(__dirname, '/'),
}));

app.listen(3000, function() {
    console.log('d-day app port 3000 - run server ');
});

