export default {
    // 开发环境配置
    development: {
        mongo: {
            uri: 'mongodb://localhost:27017/test'
        }
    },

    // 生产环境配置
    production: {
        mongo: {
            uri: 'mongodb://localhost:27017/product'
        }
    }
}