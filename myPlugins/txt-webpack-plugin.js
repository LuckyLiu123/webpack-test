// 插件的结构 类

// 必须要有apply函数
class TxtWebpackPlugin {
    constructor(options) {
        console.log(options);
    }

    apply(compiler){
        // compiler.hooks
        compiler.hooks.emit.tapAsync('TxtWebpackPlugin', (compilation, callback) => {
            console.log(compilation.assets);

            const content = '这是一个测试的资源模块，里面的内容无所谓';

            compilation.assets['kkb.txt'] = {
                source: function(){
                    return content;
                },
                size: function(){
                    return content.length;
                }
            }
            callback();
        })
    }
}

module.exports = TxtWebpackPlugin;