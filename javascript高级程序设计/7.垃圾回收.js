/**
 * JavaScript 最常用的垃圾回收策略是标记清理
 */
var n = 123; // 给数值变量分配内存
var s = "azerty"; // 给字符串分配内存

var o = {
    a: 1,
    b: null
}; // 给对象及其包含的值分配内存

// 给数组及其包含的值分配内存（就像对象一样）
var a = [1, null, "abra"];

function f(a) {
    return a + 2;
} // 给函数（可调用的对象）分配内存


// 有些函数调用结果是分配对象内存：
var d = new Date(); // 分配一个 Date 对象


// 有些方法分配新变量或者新对象：
var s = "azerty";
var s2 = s.substr(0, 3); // s2 是一个新的字符串
// 因为字符串是不变量，
// JavaScript 可能决定不分配内存，
// 只是存储了 [0-3] 的范围。

var a = ["ouais ouais", "nan nan"];
var a2 = ["generation", "nan nan"];
var a3 = a.concat(a2);
// 新数组有四个元素，是 a 连接 a2 的结果

// JS 有自动垃圾回收机制，那么这个自动垃圾回收机制的原理是什么呢？
// 其实很简单，就是找出那些不再继续使用的值，然后释放其占用的内存。
// 在这里最艰难的任务是找到不再需要使用的变量。
// 不再需要使用的变量也就是生命周期结束的变量，是局部变量，局部变量只在函数的执行过程中存在，
// 当函数运行结束，没有其他引用(闭包)，那么该变量会被标记回收。
// 全局变量的生命周期直至浏览器卸载页面才会结束，也就是说全局变量不会被当成垃圾回收。
// 因为自动垃圾回收机制的存在，开发人员可以不关心也不注意内存释放的有关问题，
// 但对无用内存的释放这件事是客观存在的。

/**
 * 这是最初级的垃圾回收算法。
 * 引用计数算法定义“内存不再使用”的标准很简单，就是看一个对象是否有指向它的引用。
 * 如果没有其他对象指向它了，说明该对象已经不再需了。
 */
(function test1() {
    var obj = { a: 123 }; //对象{a:123}引用次数加1
    var obj1 = { a: 123 }; //对象{a:123}引用次数加1
    var obj = {}; //对象{a:123}引用次数-1
    var obj1 = null; //对象{a:123}引用次数为0
})();

/**
 * 该算法有个限制：无法处理循环引用的事例。在下面的例子中，两个对象被创建，并互相引用，形成了一个循环。
 * 它们被调用之后会离开函数作用域，所以它们已经没有用了，可以被回收了。
 * 然而，引用计数算法考虑到它们互相都有至少一次引用，所以它们不会被回收。
 * 如果这个方法被多调用几次，那么会导致大量的内存得不到释放
 */
(function test2() {
    function f() {
        var o = {};
        var o2 = {};
        o.a = o2; // o 引用 o2,o2引用次数加1
        o2.a = o; // o2 引用 o,o引用次数加1
        return "azerty";
    }
    f();
})();

/**
 * js中最常用的垃圾回收方式就是标记清除。当变量进入环境时，例如，在函数中声明一个变量，就将这个变量标记为“进入环境”。
 * 从逻辑上讲，永远不能释放进入环境的变量所占用的内存，因为只要执行流进入相应的环境，就可能会用到它们。
 * 而当变量离开环境时，则将其标记为“离开环境”。
 * 垃圾回收器在运行的时候会给存储在内存中的所有变量都加上标记（当然，可以使用任何标记方式）。
 * 然后，它会去掉环境中的变量以及被环境中的变量引用的变量的标记（闭包）。
 * 而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。
 * 最后，垃圾回收器完成内存清除工作，销毁那些带标记的值并回收它们所占用的内存空间。
 */
(function test3() {
    function test() {
        var a = 10; //被标记 ，进入环境  
        var b = 20; //被标记 ，进入环境
    }
    test(); //执行完毕之后 a、b又被标离开环境，被回收。
})();

/**
 * 上例采用标记清除算法
 */
(function test4() {
    function f() {
        var o = {}; //o进入环境
        var o2 = {}; //o2进入环境
        o.a = o2;
        o2.a = o;
        return "azerty";
    }
    f(); //执行完毕之后o,o2又被标为离开环境，被回收
})();

/**
 * 闭包不会被回收的原因
 * 由于闭包占用内存空间，所以要谨慎使用闭包。尽量在使用完闭包后，及时解除引用，以便更早释放内存。
 */
(function test5() {
    function f() {
        let a = 10;
        let fun = function fn() {
            return a;
        }
        return fun;
    }
    var fun = f();
    console.log(fun());
})();

(function test6() {
    //通过将baz置为null，解除引用
    function foo() {
        var a = 2;

        function bar() {
            console.log(a); //2
        }
        return bar;
    }
    var baz = foo();
    baz();
    baz = null;
    /*后续代码*/
})();