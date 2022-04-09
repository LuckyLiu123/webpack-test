# webpack-test
通过webpack搭建一个项目

npm run build 打包的过程是通过 node_modules/.bin 下面的webpack来启动的

## webpack的配置文件


经过webpack处理加工之后的文件称为bundle文件


*** webpack经过打包之后为什么会出现那么多冗余的内容？***
webpack经过打包之后生成的文件就是下面的这种结构
```
    (function(){

    })({

    })
```
第一个括号里面的函数 webpackBootstrap 提供了一些公共方法，用于帮助eval()执行编译好的代码。这就是为什么webpack4x被吐槽打包公共库有那么多的冗余代码的原因，因为webpack的初衷是来做项目打包构建的，打包公共库只是它的能力之一，并不是它核心的业务，不像rollup，它的中心就是放在打包公共库的业务上的，两者的重心是不一样的，webpack应用业务场景的复杂能力是最棒的

webpack打包时将 export 替换成了它自有的 __webpack_exports__ 对象。

第二个括号里面包含的 参数{} 称为依赖图谱，包含模块的路径和该模块被打包编译后生成的 chunk(代码片段)，在eval()里面















































