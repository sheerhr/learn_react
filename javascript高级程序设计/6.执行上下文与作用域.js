/**
 * 每个函数调用都有自己的上下文。当代码执行流进入函数时，函数的上下文被推到一个上下文栈上。
 * 在函数执行完之后，上下文栈会弹出该函数上下文，将控制权返还给之前的执行上下文。ECMAScript
 * 程序的执行流就是通过这个上下文栈进行控制的。
 */
(function test1() {
    var color = "blue";
    console.log(this);
    console.log("------------------------------");

    function changeColor(col) {
        console.log(arguments);
        console.log(this);
        console.log("+++++++++++++++++++++++++++++++++");
        if (color === "blue") {
            color = col;
        } else {
            color = "blue";
        }
    }
    changeColor("red");
})();

/**
 * Js的执行过程可分为两个重要的时期预编译期（预解析期）和执行期。
 * 预编译期
 * 浏览器的JavaScript引擎“解析”js代码
 * 建立arguments对象，函数，参数，变量
 * 建立作用域链
 * 确定this的指向
 * 执行期
 * 按照从上到下的顺序执行代码。
 * 如何区分不同的运行环境，需要引出的一个概念就是执行上下文(Execution Context)。
 * 它是一个对象，由js的执行引擎创建，具有三个属性：变量对象(variable object)，作用域链(scope chain)，this指针。
 * 
 * js在执行过程中会有一个上下文栈，上下文栈中存放的就是不同的上下文对象（你可以理解为不同的js运行环境)。
 * 比如当js开始执行一个函数，那此时它的运行环境从原来的Global Code变为Function Code，js引擎会创建一个context对象，并将其压如栈中。
 * 当这个函数执行完后，这个对象将会弹出。故而，当前执行代码的context对象总是在栈顶。
 * 
 * 变量对象是context对象中的一个重要属性，其创建过程如下：
 * 创建arguments对象，其中保存有多个属性，属性的key值是'0','1','2'......，value值就是传入的参数的实际值。
 * 找到这个作用域内的所有var和function的声明，作为属性存储在变量对象中，如果是function，那属性名就是函数名，属性值是函数的引用。
 * 如果是var，那属性名就是变量名，属性值是undefined.理解了变量对象创建的过程，你就可以理解为什么会有变量提升这个特性了。
 */