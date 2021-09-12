module.exports = {
    devServer:{
        //前端实现跨域
        proxy:{
            '/api': {
                target: 'http://localhost:5000/api/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}