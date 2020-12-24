/**
 * 1.undefined 类型
 * 当使用var或let声明了变量但是没有初始化的时候，就相当于给变量赋值了undefined值
 */

const { Logger } = require("mongodb");
const { log } = require("util");

let message;
console.log(message + "\n");
/**
 * 一般来说，永远不用显式地给某个变量设置 undefined 值。
 * 字面值 undefined主要用于比较，而且在 ECMA-262 第 3 版之前是不存在的。
 * 增加这个特殊值的目的就是为了正式明确空对象指针（ null ）和未初始化变量的区别。
 */
(function test1() {
    let msg = undefined;
    console.log(msg === undefined);
    console.log("test1---------------------\n");
})();
/**
 * 值为undefined的变量和未定义的变量是有区别的。
 * msg: undefined
 * age: age is not defined
 */
(function test2() {
    let msg;
    console.log(msg);
    console.log('test2----------------\n');
    // console.log(age);
})();
/**
 * 对未声明的变量，只能执行一个有用的操作，就是对它调用typeof.(对未声明的变量调用 
 * delete 也不会报错，但这个操作没什么用，实际上在严格模式下会抛出错误。)
 * 即使未初始化的变量会被自动赋予 undefined 值，但我们仍然建议在声明变量的同时进行初始化这样，
 * 当 typeof 返回 "undefined" 时，你就会知道那是因为给定的变量尚未声明，而不是声明了但未初始化
 */
(function test3() {
    let msg;
    delete age;
    console.log(typeof msg);
    console.log(typeof age);
    console.log("test3---------------------");
})();

(function test4() {
    let msg;
    console.log(!msg);
    console.log("test4---------------------");
})();


/**
 * null数据类型
 */

/**
 * car是对一个对象的引用
 * undefined 值是由 null 值派生而来的
 */
(function test5() {
    let car = null;
    console.log(typeof car);
    console.log(null == undefined);
    console.log("test5------------------------");
})();


/**
 * Boolean类型
 */

/**
 * 虽然布尔值只有两个，但所有其他 ECMAScript 类型的值都有相应布尔值的等价形式。
 * 要将一个其他类型的值转换为布尔值，可以调用特定的 Boolean() 转型函数
 */
(function test6() {
    console.log(Boolean("zhang"));
    console.log(Boolean(new Object("name")));
    console.log(Boolean(2));
    console.log("test6------------------------");
})();

/**
 * Number数值类型
 */
/**
 * 产生NAN的几种场景
 * 1.比如，用 0 ,+0,-0相除会返回NAN。
 */
(function test7() {
    console.log(0 / 0);
    console.log("test7------------------------");
})();

/**
 * 1首先，任何涉及 NaN 的操作始终返回 NaN （如 NaN/10 ），在连续多步计算时这可能是个问题
 * 2其次， NaN 不等于包括 NaN 在内的任何值。例如，下面的比较操作会返回 false ：
 * 由于这里字符串是NaN,只要是进行非连接(+)运算，都会返回NaN
 */
(function test8() {
    console.log(NaN / 10);
    console.log(NaN == NaN);
    console.log(isNaN(NaN));
    console.log(isNaN(10));
    console.log(isNaN("10"));
    console.log(isNaN("blue")); //true
    console.log(isNaN(true));
    console.log(isNaN("haha" - 1)); //true
    console.log(isNaN("haha" * 1)); //true
    console.log(isNaN("haha" / 1)); //true
    console.log("test8------------------------");
})();

/**
 * String类型
 */
(function test9() {
    let value1 = 10;
    let value2 = true;
    let value3 = null;
    let value4;
    console.log(String(value1));
    console.log(String(value2));
    console.log(String(value3));
    console.log(String(value4));
    console.log("test9------------------------");
})();