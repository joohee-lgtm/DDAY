const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  /**
   * ??? webpack 5 부터 지원?
   * https://webpack.js.org/guides/code-splitting/#entry-dependencies
   entry: {
    index: {
      import: './src/index.js', 
      dependOn: 'shared'
    },
    log: {
      import: "./src/logger.js", 
      dependOn: 'shared'
    },
    shared: 'query-string',    
  },
  */
 entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    new HtmlWebpackPlugin({
      title: 'DDAY'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module : {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};
