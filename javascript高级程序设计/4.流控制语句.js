/**
 * do while
 */
(function test1() {
    let i = 0;
    do {
        i += 2;
        console.log(i);
    } while (i < 10);
    console.log("test1------------------------------------");
})();

/**
 * while语句
 */
(function test2() {
    let i = 0;
    while (i < 20) {
        i += 2;
        console.log(i);
    }
    console.log("test2-----------------------------------");
})();

/**
 * for语句
 */
(function test3() {
    let count = 10;
    for (let i = 0; i < count; i++) {
        console.log(i);
    }
    console.log("test3------------------------------------");
})();

/**
 * for in 语句
 * 用于枚举对象中的非符号键属性
 * 这里只会拿到对象中的属性
 */
(function test4() {
    let person = {
        name: "zhangsan",
        age: 14,
        height: 180
    }
    for (let i in person) {
        console.log(i);
    }
    for (const propName in global) {
        console.log(propName);
    }
    console.log("test4------------------------------------");
})();

/**
 * for of语句
 * 语句是一种严格的迭代语句，用于遍历可迭代对象的元素
 * 注意普通对象不是可迭代对象，如下例中的person
 */
(function test5() {
    const arr = [2, 4, 6, 8, 10];
    for (let i of arr) {
        console.log(i);
    }
    console.log(typeof arr);
    // const person = {
    //     name: "zhangsan",
    //     age: 14,
    //     height: 180
    // }
    // for (let i of person) {
    //     console.log(i);
    // }
    console.log("test5------------------------------------");
})();

/**
 * break和continue语句
 * break语句用于立即退出循环，强制执行循环后的下一条语句
 * continue用于立即退出循环，但会再次从循环顶部开始执行
 */
(function test6() {
    let num = 0;
    for (let i = 1; i < 10; i++) {
        if (i % 5 == 0) {
            break;
        }
        num++;
    }
    console.log(num); //4

    let num1 = 0;
    for (let i = 1; i < 10; i++) {
        if (i % 5 == 0) {
            continue;
        }
        num++;
    }
    console.log(num); //8
    console.log("test6-------------------------------");
})();

/**
 * switch语句
 * 虽然 switch 语句是从其他语言借鉴过来的，但 ECMAScript 为它赋予了一些独有的特性。首先，
 * switch 语句可以用于所有数据类型（在很多语言中，它只能用于数值），因此可以使用字符串甚至对象。
 * 其次，条件的值不需要是常量，也可以是变量或表达式
 */
(function test7() {
    let i = 10;
    switch (i) {
        case 10:
            console.log(10);
            break;
        case 20:
            console.log(20);
            break;
        default:
            console.log("other");
    }
    console.log("test7------------------------------");
    switch ("hello world") {
        case "hello" + " world":
            console.log("Greeting was found");
            break;
        case "goodbye":
            console.log("Closing was found");
            break;
        default:
            console.log("Unexpected message was found.");
    }
    let num = 25;
    switch (true) {
        //而传给 switch 语句的参数之所以是 true ，就是因为每个条件的表达式都会返回布尔值。
        case num < 0:
            console.log("less than 0");
            break;
        case num >= 0 && num <= 10:
            console.log("Between 0 and 10.");
            break;
        case num > 10 && num <= 20:
            console.log("Between 0 and 10.");
            break;
        default:
            console.log("More than 20");
    }
})();