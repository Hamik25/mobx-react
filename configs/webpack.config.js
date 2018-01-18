const path = require('path');
const baseDir = '../';

module.exports = {
  entry: path.resolve(baseDir, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(baseDir, 'dist')
  },
  devServer: {
      inline: true,
      port: 4000,
      contentBase: path.resolve(baseDir, 'dist')
  },
  module: {
    loaders: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            query: {
                babelrc: false,
                presets: ["es2015", "react", "stage-0"],
                plugins: ["transform-decorators-legacy"]
            }
        }
    ]
  }
};
