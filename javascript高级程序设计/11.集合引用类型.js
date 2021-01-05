const { set } = require("mongoose");

/**
 * 显式地创建 Object 的实例有两种方式。第一种是使用 new 操作符和 Object 构造函数，如下所示：
 */
(function test1() {
    let person = new Object();
    person.name = "Nicholas";
    person.age = 29;
})();
/**
 * 另一种方式是使用对象字面量（object literal）表示法。
 * 对象字面量是对象定义的简写形式，目的是为了简化包含大量属性的对象的创建
 * 比如，下面的代码定义了与前面示例相同的 person 对象
 */
(function test2() {
    let person = {
        name: "Nicholas",
        age: 29
    };
})();

/**
 * 数组的创建方式
 */
(function test3() {
    let colors = new Array(20);
    let colors1 = new Array();
    let colors2 = new Array("red", "blue", "green");
    //在使用 Array 构造函数时，也可以省略 new 操作符。
    let colors3 = Array(3);
    let colors4 = Array('greg');
    //另一种创建数组的方式是使用数组字面量（array literal）表示法.
    let colors5 = ["red", "blue", "green"]; // 创建一个包含 3 个元素的数组
    let names = []; // 创建一个空数组
    let values = [1, 2, ];
})();

/**
 * Array 构造函数还有两个 ES6 新增的用于创建数组的静态方法： from() 和 of() 。
 * from() 用于将类数组结构转换为数组实例
 * of() 用于将一组参数转换为数组实例
 */
(function test3() {
    //将字符串转化为数组
    console.log(Array.from("Matt"));
    const m = new Map().set(1, 2).set(3, 4);
    console.log(Array.from(m));
    const s = new Set().add(1).add(2).add(3).add(4);
    console.log(Array.from(s));

    const p = { name: "zhangsan" };
    const a1 = [1, 2, 3, 4, p];
    const a2 = Array.from(a1);
    //Array.from()对现有数组执行浅复制,只会复制第一层
    console.log(a1 === a2); //false
    console.log(Array.of(1, 2, 3, 4));
})();

/**
 * 怎么确定一个值是不是数组
 * Array.isArray()
 */
(function test4() {
    let arr = [1, 23, 442];
    let obj = { name: "张三" };
    console.log(Array.isArray(arr)); //true
    console.log(Array.isArray(obj)); //false
})();

/**
 * 迭代器方法
 * keys() 返回数组索引的迭代器
 * values() 返回数组元素的迭代器
 * 而 entries() 返回索引/值对的迭代器
 */
(function test5() {
    const a = ["foo", "bar", "baz", "qux"];
    const akeys = Array.from(a.keys());
    const avalues = Array.from(a.values());
    const aentrys = Array.from(a.entries());
    console.log(akeys);
    console.log(avalues);
    console.log(aentrys);
    // 使用 ES6 的解构可以非常容易地在循环中拆分键/值对
    for (const [idx, element] of aentrys) {
        console.log(idx);
        console.log(element);
    }
})();

/**
 * 转换字符串
 */
(function test6() {
    let person1 = {
        toLocaleString() {
            return "Nikolaos";
        },
        toString() {
            return "Nicholas";
        }
    };
    let person2 = {
        toLocaleString() {
            return "Grigorios";
        },
        toString() {
            return "Greg";
        }
    };
    let people = [person1, person2];
    console.log(people);
    console.log(people.toString());
    console.log(people.toLocaleString());
    let colors = ["red", "green", "blue"];
    //如果不给 join() 传入任何参数，或者传入 undefined ，则仍然使用逗号作为分隔符。
    console.log(colors.join());
    console.log(colors.join('|'));
})();

/**
 * 排序方法
 * 顾名思义,reverse() 方法就是将数组元素反向排列
 */
(function test7() {
    let values = [1, 2, 3, 4, 5];
    values.reverse();
    console.log(values);
    let valuesOfSort = [0, 1, 10, 10, 15];
    valuesOfSort.sort(compare);

    function compare(value1, value2) {
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    }
    console.log(valuesOfSort);
    // 此外，这个比较函数还可简写为一个箭头函数
    values.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
})();

/**
 * 操作方法
 */
(function test8() {
    let colors = ["red", "green", "blue"];
    let colors2 = colors.concat("yellow", ["black", "brown"]);
    console.log(colors2);
})();

(function test9() {

})();