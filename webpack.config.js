const webpack = require('webpack');
const path = require('path');

const config = {
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [
          {
            // needed to chain sourcemaps.  see: https://webpack.js.org/loaders/source-map-loader/
            loader: 'source-map-loader',
            options: {

              filterSourceMappingUrl: (url, resourcePath) => {
                //  console.log({ url, resourcePath }) example:
                // {
                //  url: 'index.js.map',
                //  resourcePath: '/repos/xlib-wsl/common/temp/node_modules/.pnpm/https-proxy-agent@5.0.0/node_modules/https-proxy-agent/dist/index.js'
                // }

                if (/.*\/node_modules\/.*/.test(resourcePath)) {
                  return false;
                }
                return true;
              },

            },
          }],
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
};

module.exports = config;
