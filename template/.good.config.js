/**
 * GOOD 配置文件
 *
 */
module.exports = {
  devPort: '8000', // dev server 运行的端口
  designLayoutWidth: 750, // 设计稿的宽度 | 默认750
  baseSize: 10, // 计算 rem 的基数，通常不用修改
  enableREM: true, // 是否用 rem 做适配

  /**
   * webpack base config
   */
  entry: 'src/js/main.js',
  output: {
    path: 'dist',
    publicPath: './',
    filename: 'js/bundle.js'
  },
  outputCss: 'css/app.css',
  outputCssPublicPath: '../',
  imgLoaderQuery: {
    limit: 1000,
    name: 'img/[name].[ext]'
  },
  rules: [{
    test: /\.js?$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        babelrc: true,
      }
    }]
  }],

  /**
   * webpack development config
   *
   * 只作用于 development 模式，会覆盖 base config 中相同的配置项
   **/
  DEVELOPMENT: {},

  /**
   * webpack production config
   *
   * 只作用于 production 模式，会覆盖 base config 中相同的配置项
   **/
  PRODUCTION: {}
};
