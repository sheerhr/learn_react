// 检测对象是否有属性的存在中in运算符和hasOwnProperty()的区别？
(function testInAndHasOwnProperty() {
    function init() {

    }

    init.prototype.name = "zhangsan";

    let a = new init();
    a.age = 18;

    
    console.log("name" in a);


    console.log(a.hasOwnProperty("name"));
})();