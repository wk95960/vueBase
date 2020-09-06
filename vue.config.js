module.exports = {
  devServer :{
    proxy:{
      '/api': {
        target: 'http://boss.f001.cn/index.php',
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //支持跨域
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}