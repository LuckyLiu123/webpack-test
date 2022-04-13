//loader的结构
// loader就是一个函数，但不可以是箭头函数
//loader必须有返回值 string or buffer
// loader如何接收配置 通过loader API
// 如何返回多个信息 this.callback this.callback有同步调用和异步调用两种方式
// loader有异步逻辑如何处理 this.async()

module.exports = function (source){
    // console.log(source);
    // return source;

    // console.log(this.query);
    // return source.replace('Hello', this.query.name);

    // const info = source.replace('Hello', this.query.name);
    // this.callback(null, info);

    const callback = this.async();

    setTimeout(() => {
        const info = source.replace('Hello', this.query.name);
        callback(null, info);
    }, 3000)
}