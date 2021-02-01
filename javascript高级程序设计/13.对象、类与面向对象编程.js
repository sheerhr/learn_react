// ECMA-262 使用一些内部特性来描述属性的特征。这些特性是由为 JavaScript 实现引擎的规范定义
// 的。因此，开发者不能在 JavaScript 中直接访问这些特性。为了将某个特性标识为内部特性，规范会用
// 两个中括号把特性的名称括起来，比如 [[Enumerable]] 。
// 属性分两种：数据属性和访问器属性。

/**
 * 数据属性有四种:
 * [[Configurable]] ：表示属性是否可以通过 delete 删除并重新定义，
 * 是否可以修改它的特性，以及是否可以把它改为访问器属性。
 * 默认情况下，所有直接定义在对象上的属性的这个特性都是 true
 * 
 * [[Enumerable]] ：表示属性是否可以通过 for-in 循环返回。
 * 默认情况下，所有直接定义在对象上的属性的这个特性都是 true
 * 
 * [[Writable]] ：表示属性的值是否可以被修改。
 * 默认情况下，所有直接定义在对象上的属性的这个特性都是 true ，
 * 
 * [[Value]] ：包含属性实际的值。这就是前面提到的那个读取和写入属性值的位置。
 * 这个特性的默认值为 undefined
 */
(function test1() {
    let person = {
        name: "Nicholas",
        age: 29,
        job: "Software Engineer",
        sayName() {
            console.log(this.name);
        }
    };
})();

/**
 * 访问器属性不包含数据值。相反，它们包含一个获取（getter）函数和一个设置（setter）函数，不过这两个函数不是必需的。
 * 在读取访问器属性时，会调用获取函数，这个函数的责任就是返回一个有效的值。
 * 在写入访问器属性时，会调用设置函数并传入新值，这个函数必须决定对数据做出什么修改。
 * 
 * 访问器属性有 4 个特性描述它们的行为。
 * [[Configurable]] ：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，
 * 以及是否可以把它改为数据属性。默认情况下，所有直接定义在对象上的属性的这个特性都是 true 。
 * 
 * [[Enumerable]] ：表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接
 * 定义在对象上的属性的这个特性都是 true 。
 * 
 * [[Get]] ：获取函数，在读取属性时调用。默认值为 undefined 。
 * 
 * [[Set]] ：设置函数，在写入属性时调用。默认值为 undefined 。
 */
(function test2() {
    let book = {
        year_: 2017,
        edition: 1
    }

    Object.defineProperty(book, "year", {
        get() {
            return this.year_;
        },
        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    });

    book.year = 2018;
    console.log(book.edition); //2
})();

// 定义多个属性

(function test3() {
    let book = {};
    Object.defineProperties(book, {
        year_: {
            value: 2017
        },
        edition: {
            value: 1
        },
        year: {
            get() {
                return this.year_;
            },
            set(newValue) {
                if (newValue > 2017) {
                    this.year_ = newValue;
                    this.edition += newValue - 2017;
                }
            }
        }
    });
})();

// 读取属性的特性
(function test3() {
    let book = {};
    Object.defineProperties(book, {
        year_: {
            value: 2017
        },
        edition: {
            value: 1
        },
        year: {
            get: function () {
                return this.year_;
            },
            set: function (newValue) {
                if (newValue > 2017) {
                    this.year_ = newValue;
                    this.edition += newValue - 2017;
                }
            }
        }
    });
    let descriptor = Object.getOwnPropertyDescriptor(book, "year_");
    console.log(descriptor.value); // 2017
    console.log(descriptor.configurable); // false
    console.log(typeof descriptor.get); // "undefined"
    let descriptor1 = Object.getOwnPropertyDescriptor(book, "year");
    console.log(descriptor1.value); // undefined
    console.log(descriptor1.enumerable); // false
    console.log(typeof descriptor1.get); // "function"
})();

// 合并对象
// JavaScript 开发者经常觉得“合并”（merge）两个对象很有用。更具体地说，就是把源对象所有的
// 本地属性一起复制到目标对象上。有时候这种操作也被称为“混入”（mixin），因为目标对象通过混入
// 源对象的属性得到了增强。
(function test4() {
    let dest, src, result;
    dest = {};
    src = { id: 'src' };
    // 这个方法接收一个目标对象和一个
    // 或多个源对象作为参数，然后将每个源对象中可枚举（ Object.propertyIsEnumerable() 返回 true ）
    // 和自有（ Object.hasOwnProperty() 返回 true ）属性复制到目标对象。以字符串和符号为键的属性
    // 会被复制。对每个符合条件的属性，这个方法会使用源对象上的 [[Get]] 取得属性的值，然后使用目标
    // 对象上的 [[Set]] 设置属性的值。
    Object.assign(dest, src);
    // Object.assign 修改目标对象
    // 也会返回修改后的目标对象
    console.log(dest === result); // true
    console.log(dest !== src); // true
    console.log(result); // { id: src }
    console.log(dest); // { id: src }

    dest = {};
    result = Object.assign(dest, { a: 'foo' }, { b: 'bar' });
    console.log(dest); // { a: foo, b: bar }

    /**
    * 获取函数与设置函数
    */
    dest = {
        set a(val) {
            console.log(`Invoked dest setter with param ${val}`);
        }
    };
    src = {
        get a() {
            console.log('Invoked src getter');
            return 'foo';
        }
    };
    // 换句话说，不能在两个对象间转移获取函数和设置函数。不能获取源对象的访问器属性。
    Object.assign(dest, src);
    // console.log(dest);
})();

(function test5() {
    let dest, src, result;
    /**
    * 覆盖属性
    */
    dest = { id: 'dest' };
    result = Object.assign(dest, { id: 'src1', a: 'foo' }, { id: 'src2', b: 'bar' });
    // Object.assign 会覆盖重复的属性
    console.log(result); // { id: src2, a: foo, b: bar }
    // 可以通过目标对象上的设置函数观察到覆盖的过程：
    dest = {
        set id(x) {
            console.log(x);
        }
    };
    Object.assign(dest, { id: 'first' }, { id: 'second' }, { id: 'third' });
    // first
    // second
    // third
    /**
    * 对象引用
    */
    dest = {};
    src = { a: {} };
    Object.assign(dest, src);
    // 浅复制意味着只会复制对象的引用
    console.log(dest); // { a :{} }
    console.log(dest.a === src.a); // true
})();