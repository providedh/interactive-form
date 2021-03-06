const path = require('path');

const outputDirectory = '../docs'

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname,outputDirectory)
  },
  resolve: {
    alias: {
    grid_style_layout: __dirname + "/node_modules/react-grid-layout/css/styles.css",
    grid_style_resizable: __dirname + "/node_modules/react-resizable/css/styles.css",
    app_reducers: __dirname + '/src/redux/reducers.js',
    app_actions: __dirname + '/src/redux/actions.js',
    app_components: __dirname + '/src/components',
    app_containers: __dirname + '/src/containers',
    app_sources: __dirname + '/src/sources',
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /^(?!.*?\.module).*\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            url: false
          }
        }]
      },
      {
        test: /\.module\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
          }
        }]
      }
    ]
  },
  devServer: {
    port: 3000,
  },
  devtool: "cheap-module-source-map",
};
