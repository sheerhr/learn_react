/************************************
 * 只操作一个值的操作符叫做一元操作符*
 ************************************/
(function test1() {
    let age = 29;
    let anotherAge = --age + 2;
    console.log(age);
    console.log(anotherAge);
})();

/**
 * 位操作符
 * 按位非操作符用波浪符（ ~ ）表示,它的作用是返回数值的一补数
 * 实际上，尽管两者返回的结果一样，但位操作的速度快得多。这是因为位操作是在数值的底层表示上完成的。
 */
(function test2() {
    let num1 = 25;
    let num2 = ~num1;
    console.log(num2);
    // let num1 = 25;
    // let num2 = -num1 - 1;
    // console.log(num2);
})();

/**
 * 按位与
 * 25 和 3 的按位与操作的结果是 1。为什么呢？看下面的二进制计算过程：
 * 25 = 0000 0000 0000 0000 0000 0000 0001 1001
 *  3 = 0000 0000 0000 0000 0000 0000 0000 0011
 * ---------------------------------------------
 * AND = 0000 0000 0000 0000 0000 0000 0000 0001
 */
(function test3() {
    let result = 25 & 3;
    console.log(result); // 1
})();

/**
 * 按位或
 * 25 = 0000 0000 0000 0000 0000 0000 0001 1001
 *  3 = 0000 0000 0000 0000 0000 0000 0000 0011
 * ---------------------------------------------
 * OR = 0000 0000 0000 0000 0000 0000 0001 1011
 */
(function test4() {
    let result = 25 | 3;
    console.log(result); // 1
})();

/**
 * 按位异或
 * 按位异或与按位或的区别是，它只在一位上是 1 的时候返回 1（两位都是 1 或 0，则返回 0）。
 * 25 = 0000 0000 0000 0000 0000 0000 0001 1001
 *  3 = 0000 0000 0000 0000 0000 0000 0000 0011
 * ---------------------------------------------
 * XOR = 0000 0000 0000 0000 0000 0000 0001 1010
 */
(function test5() {
    let result = 25 ^ 3;
    console.log(result); // 26
})();

/**
 * 左移
 * 比如，如果数值 2（二进制 10）向左移 5 位，
 * 就会得到 64（二进制 1000000），
 * 注意在移位后，数值右端会空出 5 位。左移会以 0 填充这些空位，让结果是完整的 32 位数值
 * 注意，左移会保留它所操作数值的符号。比如，如果2 左移 5 位，将得到64，而不是正 64。
 */
(function test6() {
    let oldValue = 2; // 等于二进制 10
    let newValue = oldValue << 5; // 等于二进制 1000000，即十进制 64
    console.log(newValue);
})();

/**
 * 有符号右移
 * 有符号右移由两个大于号（ >> ）表示，会将数值的所有 32 位都向右移，同时保留符号（正或负）。
 * 有符号右移实际上是左移的逆运算
 * 比如，如果将 64 右移 5 位，那就是 2：
 * 同样，移位后就会出现空位。不过，右移后空位会出现在左侧，且在符号位之后。
 * ECMAScript 会用符号位的值来填充这些空位，以得到完整的数值。
 */
(function test7() {
    let oldValue = 64; // 等于二进制 1000000
    let newValue = oldValue >> 5; // 等于二进制 10，即十进制 2
    console.log(newValue);
})();

/**
 * 无符号右移
 * 无符号右移用 3 个大于号表示 >>> 
 * 对于正数，无符号右移与有符号右移结果相同。仍然以前面有符号右移的例子为例，64 向右移动 5 位，会变成 2
 * 无符号右移操作符将负数的二进制表示当成正数的二进制表示来处理
 * 在对-64 无符号右移 5 位后，结果是 134 217 726。这是因为-64 的二进制表示是 11111111111111111111111111000000，
 * 无符号右移却将它当成正值，也就是 4 294 967 232。把这个值右移 5 位后，结果是
 * 00000111111111111111111111111110，即 134 217 726。
 */
(function test8() {
    let oldValue = -64; //  等于二进制 11111111111111111111111111000000
    let newValue = oldValue >>> 5; // 等于十进制 134217726
    console.log(newValue);
})();

/**
 * 逻辑操作符
 */

/**
 * 逻辑非操作符由一个感叹号表示
 * 这个操作符始终返回布尔值，无论应用到的是什么数据类型。
 * 逻辑非操作符首先将操作数转换为布尔值，然后再对其取反。
 * 换句话说，逻辑非操作符会遵循如下规则。
 *   如果操作数是对象，则返回 false 。
 *   如果操作数是空字符串，则返回 true 。
 *   如果操作数是非空字符串，则返回 false 。
 *   如果操作数是数值 0，则返回 true 。
 *   如果操作数是非 0 数值（包括 Infinity ），则返回 false 。
 *   如果操作数是 null ，则返回 true 。
 *   如果操作数是 NaN ，则返回 true 。
 *   如果操作数是 undefined ，则返回 true 。
 * 逻辑非操作符也可以用于把任意值转换为布尔值。同时使用两个叹号（ !! ），相当于调用了转型函数 Boolean() 。
 * 第二个叹号对该布尔值取反，从而给出变量真正对应的布尔值。结果与对同一个值使用 Boolean() 函数是一样的
 */
(function test9() {
    console.log(!false); //true
    console.log(!"blue"); //false
    console.log(!0); //true
    console.log(!NaN); //true
    console.log(!undefined); //true
    console.log(!12345); //false
    console.log(!""); //true
    console.log(!!"adv"); //true
})();

/**
 * 逻辑与
 * 逻辑与操作符可用于任何类型的操作数，不限于布尔值。
 * 如果有操作数不是布尔值，则逻辑与并不一定会返回布尔值，而是遵循如下规则。
 *   如果第一个操作数是对象，则返回第二个操作数。
 *   如果第二个操作数是对象，则只有第一个操作数求值为 true 才会返回该对象。
 *   如果两个操作数都是对象，则返回第二个操作数。
 *   如果有一个操作数是 null ，则返回 null 。
 *   如果有一个操作数是 NaN ，则返回 NaN 。
 *   如果有一个操作数是 undefined ，则返回 undefined 。
 * 逻辑与操作符是一种短路操作符，意思就是如果第一个操作数决定了结果，那么永远不会对第二个操作数求值。
 */
(function test10() {
    // 如果第一个操作数是对象，则返回第二个操作数。
    let a = new Object({ "name": "zhangsan", "age": 10 });
    let b = "haha";
    console.log(a && b);
    //如果第二个操作数是对象，则只有第一个操作数求值为 true 才会返回该对象。
    console.log(b && a);
    // 如果有一个操作数是 null ，则返回 null 。
    let c = null;
    console.log(typeof c);
    console.log(a && c);
    console.log(c && a);
    // 如果有一个操作数是 NaN ，则返回 NaN 。
    console.log(NaN && a);
    // 逻辑与操作符是一种短路操作符，意思就是如果第一个操作数决定了结果，那么永远不会对第二个操作数求值。
    const d = () => {
        console.log("hello world");
    };

    function e(param) {
        param && param();
        console.log("------------------------------------------");
    }
    e(d);
    e();
})();

/**
 * 逻辑或
 * 逻辑或操作符由两个管道符（ || ）表示，比如
 * 与逻辑与类似，如果有一个操作数不是布尔值，那么逻辑或操作符也不一定返回布尔值。它遵循如下规则。
 *   如果第一个操作数是对象，则返回第一个操作数。
 *   如果第一个操作数求值为 false ，则返回第二个操作数。
 *   如果两个操作数都是对象，则返回第一个操作数。
 *   如果两个操作数都是 null ，则返回 null 。
 *   如果两个操作数都是 NaN ，则返回 NaN 。
 *   如果两个操作数都是 undefined ，则返回 undefined 。
 * 同样与逻辑与类似，逻辑或操作符也具有短路的特性。只不过对逻辑或而言，第一个操作数求值为true ，第二个操作数就不会再被求值了。
 */

(function test11() {
    let found = true;
    let result = found || somesssak;
    console.log(result);
    console.log(true || false);
})();

/**
 * 乘性操作符
 * 主要介绍一下取模运算符
 */

(function test12() {
    let result = 196 % 182;
    console.log(result);
})();

/**
 * 指数操作符
 * ECMAScript 7新增了指数操作符， Math.pow() 现在有了自己的操作符 ** ，结果是一样的
 * 不仅如此，指数操作符也有自己的指数赋值操作符 **= ，该操作符执行指数运算和结果的赋值操作
 */
(function test13() {
    console.log(Math.pow(3, 2));
    console.log(3 ** 2);
    let squared = 3;
    squared **= 3;
    console.log(squared);
})();

/**
 * 相等操作符
 * ECMAScript 中的等于操作符用两个等于号（ == ）表示，如果操作数相等，则会返回 true 。不等于
 * 操作符用叹号和等于号（ != ）表示，如果两个操作数不相等，则会返回 true 。这两个操作符都会先进
 * 行类型转换（通常称为强制类型转换）再确定操作数是否相等。
 * 在转换操作数的类型时，相等和不相等操作符遵循如下规则。
 *   如果任一操作数是布尔值，则将其转换为数值再比较是否相等。 false 转换为 0， true 转换为 1。
 *   如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，再比较是否相等。
 *   如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf() 方法取得其原始值，再根据前面的规则进行比较。
 * 在进行比较时，这两个操作符会遵循如下规则。
 *  null 和 undefined 相等。
 *  null 和 undefined 不能转换为其他类型的值再进行比较。
 *   如果有任一操作数是 NaN ，则相等操作符返回 false ，不相等操作符返回 true 。
 * 记住：即使两个操作数都是 NaN ，相等操作符也返回 false ，因为按照规则， NaN 不等于 NaN 。
 *   如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true 。否则，两者不相等。
 */

/**
 * 全等和不全等
 * 全等和不全等操作符与相等和不相等操作符类似，只不过它们在比较相等时不转换操作数。
 * 全等操作符由 3 个等于号（ === ）表示，只有两个操作数在不转换的前提下相等才返回 true
 */
(function test14() {
    let result1 = ("55" == 55); // true，转换后相等
    let result2 = ("55" === 55); // false，不相等，因为数据类型不同
    console.log(result1);
    console.log(result2);
    let result3 = ("55" != 55); // false，转换后相等
    let result4 = ("55" !== 55); // true，不相等，因为数据类型不同


})();

/**
 * 逗号运算符
 * 逗号操作符可以用来在一条语句中执行多个操作
 */
(function test15() {
    let num1 = 1,
        num2 = 2,
        num3 = 3;
})();