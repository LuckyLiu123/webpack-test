# webpack-test
通过webpack搭建一个项目

npm run build 打包的过程是通过 node_modules/.bin 下面的webpack来启动的

## webpack的配置文件


经过webpack处理加工之后的文件称为bundle文件


*** webpack经过打包之后为什么会出现那么多冗余的内容？**
webpack经过打包之后生成的文件就是下面的这种结构
```
(function(){

})({

})
```
第一个括号里面的函数 webpackBootstrap 提供了一些公共方法，用于帮助eval()执行编译好的代码。这就是为什么webpack4x被吐槽打包公共库有那么多的冗余代码的原因，因为webpack的初衷是来做项目打包构建的，打包公共库只是它的能力之一，并不是它核心的业务，不像rollup，它的中心就是放在打包公共库的业务上的，两者的重心是不一样的，webpack应用业务场景的复杂能力是最棒的

webpack打包时将 export 替换成了它自有的 __webpack_exports__ 对象。

第二个括号里面包含的 参数{} 称为依赖图谱，包含模块的路径和该模块被打包编译后生成的 chunk(代码片段)，在eval()里面

## chunk chunks chunkNames ##
chunk 就是代码片段 一个 module 对应一个 chunk
chunks chunk组 包含至少一个chunk(module)
chunkNames 有效的名称

一个入口打包成一个bundle文件
一个 bundle 对应一个 chunkName(chunks) 代码片段组
一个 chunkName(chunks) 包含至少一个module(chunk)


## loader ##
假如我们知道 webpack 只会编译处理 js json 格式的模块，那怎么集成样式，图片，vue，jsx等模块呢？

一个 loader 只做一件事情
当多个 loader 作用于同一个模块的时候，它的执行顺序是：自后往前














































