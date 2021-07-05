const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.join(__dirname, './build'),
    clean: true
  },
  devtool: 'inline-source-map',
  mode: 'development',
  resolve: {
    // 支持引入模块时不带扩展名，优先按下列顺序解析
    extensions: ['.ts', '.tsx', '.js'],
    // 设置别名
    alias: {
      src: path.resolve(__dirname, './src')
    }
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8888,
    host: '127.0.0.1',
    open: true,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            // 缓存 loader 的执行结果
            cacheDirectory: true,
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[hash:8].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
