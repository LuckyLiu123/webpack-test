// less-loader
// less ==>> css  把less处理成css

const less = require('less');

module.exports = function (source){
    less.render(source, (error, { css }) => {
        this.callback(error, css);
    })
}