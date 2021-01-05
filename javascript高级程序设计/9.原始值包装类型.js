(function test1() {
    let s1 = 'string';
    console.log(typeof s1); //string
    /**
     * 从下标为2的位置开始截，包括2
     */
    let s2 = s1.substring(2);
    console.log(s2);
    /**
     * 为了方便操作原始值，ECMAScript 提供了 3 种特殊的引用类型： Boolean 、 Number 和 String 。
     * 这些类型具有本章介绍的其他引用类型一样的特点，但也具有与各自原始类型对应的特殊行为。
     */
    /**
     * 在这里， s1 是一个包含字符串的变量，它是一个原始值。
     * 第二行紧接着在 s1 上调用了 substring()方法，并把结果保存在 s2 中。
     * 我们知道，原始值本身不是对象，因此逻辑上不应该有方法。而实际上
     * 这个例子又确实按照预期运行了。这是因为后台进行了很多处理，从而实现了上述操作。
     * 具体来说，当第八行访问 s1 时，是以读模式访问的，也就是要从内存中读取变量保存的值。
     * 在以读模式访问字符串值的任何时候，后台都会执行以下 3 步：
     * (1) 创建一个 String 类型的实例；
     * (2) 调用实例上的特定方法；
     * (3) 销毁实例。
     * 可以把这 3 步想象成执行了如下 3 行 ECMAScript 代码：
     * let s1 = new String("some text");
     * let s2 = s1.substring(2);
     * s1 = null;
     */

    /**
     * 几个字符串操作方法
     */
    let stringValue = "hello";
    let result = stringValue.concat("world");
    console.log(result);
    console.log(stringValue);
})();

/**
 * 从字符串中提取子字符串的方法 slice ，substr ,substring
 */
(function test2() {
    let stringValue = "hello world";
    console.log(stringValue.slice(3));
    console.log(stringValue.substring(3));
    console.log(stringValue.substr(3));
})();

/**
 * 字符串位置方法 indexOf() 和 lastIndexOf()
 */
(function test3() {
    let stringValue = "hello world ";
    console.log(stringValue.indexOf('l')); //2
    console.log(stringValue.lastIndexOf('l')); //9
})();

/**
 * 字符串包含方法  startsWith() 、endsWith() 和 includes()
 */
(function test4() {
    let message = "foobarbaz";
    console.log(message.startsWith("foo")); //true
    console.log(message.startsWith("bar")); // false
    console.log(message.endsWith("baz")); //true
    console.log(message.endsWith("bar")); //false
    console.log(message.includes("bar")); //true
    console.log(message.includes("qux")); //false
    /**
     * startsWith() 和 includes() 方法接收可选的第二个参数，表示开始搜索的位置。
     * 如果传入第二个参数，则意味着这两个方法会从指定
     * 位置向着字符串末尾搜索，忽略该位置之前的所有字符。
     */
    console.log(message.startsWith("foo", 1)); // false
    console.log(message.includes("bar", 4)); // false
    /**endsWith() 方法接收可选的第二个参数，表示应该当作字符串末尾的位置。如果不提供这个参数，
     * 那么默认就是字符串长度。如果提供这个参数，那么就好像字符串只有那么多字符一样
     */
    console.log(message.endsWith("bar", 6)); // true
})();

/**
 * ECMAScript 在所有字符串上都提供了 trim() 方法。
 * 这个方法会创建字符串的一个副本，删除前、后所有空格符，再返回结果。
 */
(function test5() {
    let stringValue = "  hello world    ";
    let trimmedStringValue = stringValue.trim();
    console.log(trimmedStringValue);
})();

/**
 * repeat() 这个方法接收一个整数参数，表示要将字符串复制多少次，然后返回拼接所有副本后的结果。
 */
(function test6() {
    let stringValue = "na";
    console.log("让我们一起" + stringValue.repeat(5));
})();

/**
 * padStart() 和 padEnd() 方法
 * padStart() 和 padEnd() 方法会复制字符串，如果小于指定长度，
 * 则在相应一边填充字符，直至满足长度条件这两个方法的第一个参数是长度，第二个参数是可选的填充字符串，默认为空格（U+0020）。
 * 可选的第二个参数并不限于一个字符。如果提供了多个字符的字符串，则会将其拼接并截断以匹配指定长度。
 * 此外，如果长度小于或等于字符串长度，则会返回原始字符串。
 */
(function test7() {
    let stringValue = "foo";
    console.log(stringValue.padStart(6)); // " foo"
    console.log(stringValue.padStart(9, ".")); // "......foo"
    console.log(stringValue.padEnd(6)); // "foo "
    console.log(stringValue.padEnd(9, ".")); // "foo......"
})();

/**
 * 字符串的迭代与解构
 */
(function test8() {
    let message = "abc";
    let stringIterator = message[Symbol.iterator]();
    console.log(stringIterator.next()); // {value: "a", done: false}
    console.log(stringIterator.next()); // {value: "b", done: false}
    console.log(stringIterator.next()); // {value: "c", done: false}
    console.log(stringIterator.next()); // {value: undefined, done: true}
    for (const c of message) {
        console.log(c);
    }
})();

/**
 * 字符串的大小写转换
 */
(function test9() {
    let stringValue = "hello world";
    console.log(stringValue.toLocaleUpperCase());
    console.log(stringValue.toUpperCase());
    console.log(stringValue.toLocaleLowerCase());
    console.log(stringValue.toLowerCase());
})();