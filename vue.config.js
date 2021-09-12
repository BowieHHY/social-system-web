module.exports = {
    devServer:{
        //前端实现跨域
        proxy:{
            '/api': {
                target: 'http://localhost:3000/api/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}