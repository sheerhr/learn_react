// typeof，instanceof和isPrototypeOf的介绍和区别
(function test1() {
    var a = 'a';
    var b = null;
    console.log(typeof a); // String
    console.log(typeof b); //Object
    //判断前者是否是后者的实例
    function A() {

    }
    var a = new A();
    console.log(a instanceof A);
    // 另外要注意的是Object和Function，两者即可为对象，亦可为函数。
    console.log(Object instanceof Function);
    console.log(Function instanceof Object);
    // 判断当前的原型对象（prototype）是否在传入参数的原型链上面
    console.log((A.prototype).isPrototypeOf(a));
})();

