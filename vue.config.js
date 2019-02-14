const path = require("path");
var env = process.env.NODE_ENV;
var assetsPath = function(_path) {
    var assetsSubDirectory = 'static'
    return path.posix.join(assetsSubDirectory, _path)
}
module.exports = {
  // 基本路径
  // baseUrl: env === "development" ? "/" : "/elm/",
  // 输出文件目录
  outputDir: "elm",
  assetsDir: "static",
  //这里的publicPath指的是相对网站的根目录的路径，如果将elm文件夹作为网站的root目录，那就是/，如果是root/elm这种方式，就是/elm/
  publicPath: env === "development" ? "/" : "/"/* 或者/elm/ */,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
//   compiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  // configureWebpack: config => {
  //     if (process.env.NODE_ENV === 'production') {
  //       // 为生产环境修改配置...
  //     } else {
  //       // 为开发环境修改配置...
  //     }
  //   }
  configureWebpack: {
    resolve: {
      extensions: ["*", ".js", ".vue", ".less", ".css", ".scss"],
      alias: {
        vue$: "vue/dist/vue.common.js",
        src: path.resolve(__dirname, "./src"),
        assets: path.resolve(__dirname, "./src/assets"),
        components: path.resolve(__dirname, "./src/components")
      }
    },
    module: {
      rules: [
        {
          test: /\.json$/,
          use:{
            loader:"json-loader"
          }
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          use:{
            loader:"url-loader",
            options:{
              limit: 10000,
              name: assetsPath("img/[name].[ext]")
            }
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          use:{
            loader:"url-loader",
            options:{
              limit: 10000,
              name: assetsPath("fonts/[name].[hash:7].[ext]")
            }
          }
        }
      ]
    }
  },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
//   vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: env === "development",
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: true
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
//   dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: "127.0.0.1",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: "http://cangdu.org:8001", // 设置代理
    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
