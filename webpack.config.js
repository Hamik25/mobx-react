const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
      inline: true,
      port: 4002,
      contentBase: "./dist"
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
