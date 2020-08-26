'use strict'
const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/test', // 基本路径
    outputDir: 'dist', // 输出文件目录
    lintOnSave: true, // eslint-loader 是否在保存的时候检查
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // webpack配置
    chainWebpack: (config) => {
        config.plugins.delete('preload')  //删除预加载
        config.plugins.delete('prefetch') //删除预加载链接

        //哈希命名
        config
            .output
            .filename('js/[name].[hash:3].js')
            .end()
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
            // 将每个依赖包打包成单独的js文件
            const optimization = {
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                    maxInitialRequests: Infinity,
                    minSize: 20000,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name (module) {
                                // get the name. E.g. node_modules/packageName/not/this/part.js
                                // or node_modules/packageName
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                // npm package names are URL-safe, but some servers don't like @ symbols
                                return `npm.${packageName.replace('@', '')}`
                            }
                        }
                    }
                }
            }
            Object.assign(config, {
                optimization
            })
        } else {
            // 为开发环境修改配置...
            config.mode = 'development'
        }
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                extensions: ['.js', '.vue', '.json'],
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@c': path.resolve(__dirname, './src/components'),
                    '@v': resolve('src/views'),
                    '@l': resolve('src/libs')
                } // 别名配置
            },
            externals: {
                vue: 'Vue',
                'vue-router': 'VueRouter'
            }
        })
    },
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    // css相关配置
    css: {
        extract: false, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps?
        loaderOptions: {
            css: {}, // 这里的选项会传递给 css-loader
            sass: {}
        }, // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
        requireModuleExtension: true  // 启用 CSS modules for all css / pre-processor files.
    },
    parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    pwa: {}, // PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    // webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0', // 允许外部ip访问
        port: 8089, // 端口
        compress: true,
        https: false, // 启用https
        overlay: {
            warnings: true,
            errors: true
        }, // 错误、警告在页面弹出
        // proxy: {
        // }, // 代理转发配置，用于调试环境
        disableHostCheck: true
    },
    // 第三方插件配置
    pluginOptions: {
        lintStyleOnBuild: false, // 添加了插件(@ascendancyy/vue-cli-plugin-stylelint), 所以需要配置
        stylelint: {
            fix: true, // boolean (default: true)
            files: ['src/**/*.vue', 'src/assets/styles/*.l?(e|c)ss'] // string | [string] (default: ['src/**/*.{vue,htm,html,css,sss,less,scss}'])
            // formatter: () => { } // function (default: require('stylelint-codeframe-formatter'))
            // etc...
        }
    }
}
