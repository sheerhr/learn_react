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
(function test4() {
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
(function test5() {
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
(function test6() {
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
(function test7() {
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
(function test8() {
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
(function test9() {
    let colors = ["red", "green", "blue"];
    let colors2 = colors.concat("yellow", ["black", "brown"]);
    console.log(colors2);

    // slice()用于创建一个包含有原数组中一个或多个元素的新数组。这个操作不会影响原数组
    let colors3 = ["red", "green", "blue","yellow","purple"];
    // 表示从索引为2的位置到索引为3的元素组成一个新的数组，这其中不包括索引末尾的元素
    const colors4 = colors3.slice(2,3);
    console.log(colors4);
    // splce()方法用于截取从索引为2的位置,截取3个元素作为新数组，这个方法会改变原数组
    const colors5 = colors3.splice(2,3);
    console.log(colors3);
})();

/**
 * 搜索和位置方法
 * indexOf()
 * laseIndexOf()
 * includes()
 */
(function test10() {
    let numbers = [1,2,3,4,5,4,3,2,1];
    //返回第一个4的索引3
    console.log(numbers.indexOf(4));
    //返回最后一个4的索引5
    console.log(numbers.lastIndexOf(4));
    //数组包含4吗？ true
    console.log(numbers.includes(4));
    console.log(numbers.indexOf(4,4));
    console.log(numbers.lastIndexOf(4,4));
    console.log(numbers.includes(4,7));
    let person = {name : "Nicholas"};
    let people = [{name : "Nicholas"}];
    let morePeople = [person];
    //在比较第一个参数跟数组每一项时，会使用全等(===)比较，从下面的结果可以看出些端倪
    console.log(people.indexOf({name : "Nicholas"}));//-1
    console.log(morePeople.indexOf(person));//0
    console.log(people.includes(person));//false
    console.log(morePeople.includes(person));//true
})();

/**
 * 断言函数
 */
(function test11() {
    const people = [
        {name:"zhangsan",age:19},
        {name:"lisi",age:20},
        {name:"王五",age:18},
    ]
    //find()断言函数接受三个参数，元素，索引值和数组本身，索引是当前元素的索引，而数组就是正在搜索的数组。断言函数返回真值，表示是否匹配。
    // 找到匹配项后，便不再继续搜索
    console.log(people.find((element,index,array) => element.age<20));
})();

/**
 * 迭代方法
 * every()
 * filter()
 * forEach()
 * map()
 * some()
 */
(function test12() {
    let numbers = [1,2,3,4,5,4,3,2,1];
    // 对every()来说，传入的函数必须对每一项都返回true,他才会返回true
    let everyResult = numbers.every((item,index,array) => item > 2);
    console.log(everyResult);
    // 而对some来说，只要有一个返回true，那么它就返回true
    let someResult = numbers.some((item,index,array) => item > 2);
    console.log(someResult);
    // filter方法基于给定的函数来决定某一项是否应该包含在它返回的数组中。
    let filterResult = numbers.filter((item,index,array) => item > 2)
    console.log(filterResult);
    // map()方法非常适合创建一个与原始数组元素一一对应的新数组
    let mapResult = numbers.map((item,index,array) => item * 2)
    console.log(mapResult);
    // forEach()方法只会对每一项运行传入的参数，没有返回值,本质上，forEach方法相当于使用for循环遍历数组。
    numbers.forEach((item,index,array) => console.log(item,index,array));
})();

/**
 * 归并方法
 */
(function test13() {
    let values = [1,2,3,4,5];
    /**
     * 累加操作
     * prev 之前的值
     * cur  现在的值
     */
    let sum = values.reduce((prev,cur,index,array) => prev + cur);

    console.log(sum);
})();