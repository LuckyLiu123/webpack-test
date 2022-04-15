const { resolve, join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const glob = require('glob')

//多页面打包通用解决方案
const setMPA = () => {
    const entry = {};
    const htmlWebpackPlugins = [];

    //查询页面入口模块 路径 以及相应的html模块

    //提取页面入口的名称，用于entry的chunkName

    //一个约定：所有页面入口模块和相应的html模块都要放在一个目录下，页面的名称就是目录的名称
    const entryPath = glob.sync(join(__dirname, './src/*/index.js'));

    entryPath.map((item) => {
        const entryName = item.match(/src\/(.*)\/index\.js$/)[1];
        entry[entryName] = item;

        htmlWebpackPlugins.push(
            new HtmlWebpackPlugin({
                template: join(__dirname, `./src/${entryName}/index.html`),
                filename: `${entryName}.html`,
                chunks: [entryName]
            })
        )
    })
    console.log(entry);


    return {
        entry,
        htmlWebpackPlugins
    }
}

const { entry, htmlWebpackPlugins } = setMPA();

module.exports = {
    entry,
    //出口
    output: {
        path: resolve(__dirname, './mpa'),  //生成资源的存放位置，必须是绝对路径
        filename: 'js/[name].js',   //生成的资源叫什么  占位符[name]
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
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
        ...htmlWebpackPlugins,
    ]
}