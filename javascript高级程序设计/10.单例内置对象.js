(function test1() {
    let uri = "http://www.wrox.com/illegal value.js#start";
    console.log(encodeURI(uri));
    console.log(encodeURIComponent(uri));
})();

/**
 * Global 对象是 ECMAScript中最特别的对象，因为代码不会显式地访问它。ECMA-262规定 Global
 * 对象为一种兜底对象，它所针对的是不属于任何对象的属性和方法。事实上，不存在全局变量或全局函
 * 数这种东西。在全局作用域中定义的变量和函数都会变成 Global 对象的属性 。本书前面介绍的函数，
 * 包括 isNaN() 、 isFinite() 、 parseInt() 和 parseFloat() ，实际上都是 Global 对象的方法。除
 * 了这些， Global 对象上还有另外一些方法。
 */