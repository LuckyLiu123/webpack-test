
//webpack的配置文件

//webpack是基于nodejs的
const { resolve } = require('path')

module.exports = {
    //入口
    entry: './src/index.js',   //入口文件既支持相对路径也支持绝对路径
    //出口
    output: {
        path: resolve(__dirname, './build'),  //生成资源的存放位置，必须是绝对路径
        filename: 'index.js',   //生成的资源叫什么
    },
    mode: 'development',   //none production development
}