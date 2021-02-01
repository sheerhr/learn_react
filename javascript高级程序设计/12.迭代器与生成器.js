// 描述了一个方案，即可以把有些结构称为“可迭
// 代对象”（iterable），因为它们实现了正式的 Iterable 接口，而且可以通过迭代器 Iterator 消费。
// 可迭代对象是一种抽象的说法。基本上，可以把可迭代对象理解成数组或集合这样的集合类型的对
// 象。

(function test1() {
    let str = 'abc';
    let arr = ['a', 'b', 'c'];
    let map = new Map().set('a', 1).set('b', 2).set('c', 3);
    let set = new Set().add('a').add('b').add('c');

    console.log(str[Symbol.iterator]); // f values() { [native code] }
    console.log(arr[Symbol.iterator]); // f values() { [native code] }
    console.log(map[Symbol.iterator]); // f values() { [native code] }
    console.log(set[Symbol.iterator]); // f values() { [native code] }

    // 调用这个工厂函数会生成一个迭代器
    console.log(str[Symbol.iterator]()); // StringIterator {}
    console.log(arr[Symbol.iterator]()); // ArrayIterator {}
    console.log(map[Symbol.iterator]()); // MapIterator {}
    console.log(set[Symbol.iterator]()); // SetIterator {}

    /**
     * 实际写代码过程中，不需要显式调用这个工厂函数来生成迭代器。
     * 实现可迭代协议的所有类型都会自动兼容接收可迭代对象的任何语言特性。
     *   for-of 循环
     *   数组解构
     *   扩展操作符 
     *   Array.from()
     *   创建集合
     *   创建映射
     *   Promise.all() 接收由期约组成的可迭代对象
     *   Promise.race() 接收由期约组成的可迭代对象
     *   yield* 操作符，在生成器中使用
     */
    let arr1 = ['foo', 'bar', 'baz'];
    // for-of 循环
    for (let el of arr1) {
        console.log(el);
    }
    // 数组解构
    let [a, b, c] = arr1;
    console.log(a, b, c); // foo, bar, baz
    // 扩展操作符
    let arr2 = [...arr1];
    console.log(arr2); // ['foo', 'bar', 'baz']
    // Array.from()
    let arr3 = Array.from(arr1);
    console.log(arr3); // ['foo', 'bar', 'baz']
    // Set 构造函数
    let set1 = new Set(arr1);
    console.log(set1); // Set(3) {'foo', 'bar', 'baz'}
    // Map 构造函数
    let pairs = arr.map((x, i) => [x, i]);
    console.log(pairs); // [['foo', 0], ['bar', 1], ['baz', 2]]
    let map1 = new Map(pairs);
    console.log(map1); // Map(3) { 'foo'=>0, 'bar'=>1, 'baz'=>2 }
})();

(function test2() {
    // 可迭代对象
    let arr = ['foo', 'bar'];
    // 迭代器
    let iter = arr[Symbol.iterator]();
    /**
     * next() 方法返回的迭代器对象 IteratorResult 包含两个属性： done 和 value 。
     * done 是一个布尔值，表示是否还可以再次调用 next() 取得下一个值
     * value 包含可迭代对象的下一个值( done 为 false)或者 undefined ( done 为 true)
     */
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
})();