
//webpack的配置文件

//webpack是基于nodejs的
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const myPlugins = require('./myPlugins/txt-webpack-plugin.js')

module.exports = {
    //入口
    // spa 单页面应用
    // mpa 多页面应用 多入口 对应 多出口
    entry: {      //入口文件既支持相对路径也支持绝对路径
        index: './src/index.js',
        login: './src/login.js'
    },
    //出口
    output: {
        path: resolve(__dirname, './build'),  //生成资源的存放位置，必须是绝对路径
        filename: '[name].js',   //生成的资源叫什么  占位符[name]
    },
    mode: 'development',   //none production development
    resolveLoader: {
        modules: ['./node_modules', './myLoaders']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ["style-loader", "css-loader"],  //执行顺序 自后往前
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            // {
            //     test: /\.less$/,
            //     use: [
            //         MiniCssExtractPlugin.loader, 
            //         "css-loader", 
            //         "postcss-loader", 
            //         "less-loader"
            //     ]
            // },
            {
                test: /\.less$/,   //自定义loader
                use: ['kkb-style-loader', 'kkb-css-loader', 'kkb-less-loader'],
            },
            {
                test: /\.js$/,
                // use: resolve(__dirname, './MyLoaders/mini-loader.js')
                use: [
                    {
                        // loader: resolve(__dirname, './MyLoaders/mini-loader.js'),
                        loader: 'mini-loader',  //配置resolveLoader之后
                        options: {
                            name: 'heihei'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            filename: 'index.html',
            chunks: ['index'],   // 多页面打包的时候 chunks做资源的区分
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/public/login.html',
            filename: 'login.html',
            chunks: ['login']
        }),
        new myPlugins({
            name: 'kkb'
        })
    ]
}