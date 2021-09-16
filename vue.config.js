const HtmlWebpackPlugin = require('html-webpack-plugin')
const externals = {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    axios: 'axios',
    clipboard:"Clipboard",
    mockjs:'Mock'

}
const cdn = {
    // 开发环境
    dev: {
        css: [

        ],
        js: [

        ]
    },
    // 生产环境
    build: {
        css: [

        ],
        js: [
            'https://cdn.bootcdn.net/ajax/libs/vue/3.2.0-beta.7/vue.global.prod.min.js',
            'https://cdn.bootcdn.net/ajax/libs/vue-router/4.0.10/vue-router.global.prod.min.js',
            'https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.min.js',
            'https://cdn.bootcdn.net/ajax/libs/clipboard.js/2.0.8/clipboard.min.js',
        ]
    }
}
module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            //externals里的模块不打包
            Object.assign(config, {
                externals: externals
            })
        } else {
            // 为开发环境修改配置...
        }
    },
    chainWebpack: config => {
        // 对vue-cli内部的 webpack 配置进行更细粒度的修改
        config.plugin('html').tap(args => {
            if (process.env.NODE_ENV === 'production') {
                args[0].cdn = cdn.build
            }
            if (process.env.NODE_ENV === 'development') {
                args[0].cdn = cdn.dev
            }
            return args
        })
    }
}