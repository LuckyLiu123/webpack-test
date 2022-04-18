const webpack = require('webpack');
const config = require('./webpack.config');

const compiler = webpack(config);

Object.keys(compiler.hooks).forEach((hookName) => {
    //注册事件
    //同步钩子 用tap
    //异步钩子 用tapAsync
    compiler.hooks[hookName].tap("事件名称", (compilation) => {
        console.log(`run------->>${hookName}`);
    })
})

compiler.run();