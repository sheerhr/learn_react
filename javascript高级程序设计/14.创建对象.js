//工厂模式

const { type } = require("os");
const { prototype } = require("stream");

/**
 * 这种工厂模式虽然可以解决创建多个类似对象的问题，但没有解决对象标识问题（即新创建的对象是什么类型）
 */
(function test1() {
    function createPerson(name, age, job) {
        let o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.sayName = function () {
            console.log(this.name);
        };
        return o;
    }
    let person1 = createPerson("Nicholas", 29, "Software Engineer");
    let person2 = createPerson("Greg", 27, "Doctor");
    console.log(person1);
    console.log(person2);
}
)();

//构造函数模式
/**
 * tips:要注意函数名 Person 的首字母大写了
 * 按照惯例，构造函数名称的首字母都是要大写的,这有助于在 ECMAScript中区分构造函数和普通函数
 */
(function test2() {
    function Person(name, age, job) {
        Person.prototype.country = "china";
        this.name = name;
        this.age = age;
        this.job = job;
        this.sayName = function () {
            console.log(this.name);
        };
    }
    let person1 = new Person("Nicholas", 29, "Software Engineer");
    let person2 = new Person("Greg", 27, "Doctor");
    person1.sayName(); // Nicholas
    person2.sayName(); // Greg
    // 实例中的constructor 属性指向 Person
    console.log(person1.constructor == Person);
    console.log(person2.constructor == Person);
    // 不过，一般认为 instanceof 操作符是确定对象类型更可靠的方式
    console.log(person1 instanceof Object); // true
    console.log(person1 instanceof Person); // true
    console.log(person2 instanceof Object); // true
    console.log(person2 instanceof Person); // true
    console.log(person1.country);

    // 构造函数不一定要写成函数声明的形式。赋值给变量的函数表达式也可以表示构造函数
    let Person1 = function (name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.sayName = function () {
            console.log(this.name);
        };
    }
    let person11 = new Person1("Nicholas", 29, "Software Engineer");
    let person21 = new Person1("Greg", 27, "Doctor");
    person11.sayName(); // Nicholas
    person21.sayName(); // Greg
    console.log(person11 instanceof Object); // true
    console.log(person11 instanceof Person1); // true
    console.log(person21 instanceof Object); // true
    console.log(person21 instanceof Person1); // true
    // 在实例化时，如果不想传参数，那么构造函数后面的括号可加可不加。只要有 new 操作符，就可以调用相应的构造函数
    function Person2() {
        this.name = "jake";
        this.sayName = function () {
            console.log(this.name);
        }
    }
    let person4 = new Person2();
    let person5 = new Person2;
    console.log(person4.name);
    person4.sayName();
    // 构造函数也是函数
    // 构造函数与普通函数唯一的区别就是调用方式不同。除此之外，构造函数也是函数。并没有把某个函数定义为构造函数的特殊语法。
    // 任何函数只要使用 new 操作符调用就是构造函数，而不使用 new 操
    // 作符调用的函数就是普通函数。
    // 作为构造函数
    let person = new Person("Nicholas", 29, "Software Engineer");
    person.sayName(); // "Nicholas"

    // 作为函数调用
    Person("Greg", 27, "Doctor"); // 添加到 global 对象
    global.sayName(); // "Greg"

    // 在另一个对象的作用域中调用
    let o = new Object();
    Person.call(o, "Kristen", 25, "Nurse");
    o.sayName(); // "Kristen"
})();

(function test2() {
    // 无论何时，只要创建一个函数，就会按照特定的规则为这个函数创建一个 prototype 属性（指向
    // 原型对象）。默认情况下，所有原型对象自动获得一个名为 constructor 的属性，指回与之关联的构
    // 造函数。对前面的例子而言， Person.prototype.constructor 指向 Person 。然后，因构造函数而
    // 异，可能会给原型对象添加其他属性和方法。
    function Person() { }
    console.log(typeof Person.prototype);
    // 构造函数有一个原型对象
    console.log(Person.prototype);
    // 这个原型对象有一个constructor属性指向构造函数
    console.log(Person.prototype.constructor === Person);
    // 正常的原型链都会终止于 Object 的原型对象
    // Object 原型的原型是 null
    console.log(Person.prototype.__proto__ === Object.prototype); // true
    console.log(Person.prototype.__proto__.constructor === Object); // true
    console.log(Person.prototype.__proto__.__proto__ === null); // true

    /**
    * 构造函数、原型对象和实例
    * 是 3 个完全不同的对象：
    */
    let person1 = new Person(),
        person2 = new Person();
    console.log(person1 !== Person); // true
    console.log(person1 !== Person.prototype); // true
    console.log(Person.prototype !== Person); // true

    // 构造函数通过 prototype 属性链接到原型对象
    // 实例对象通过__proto__链接到原型对象
    // 它实际上指向隐藏特性[[Prototype]]
    console.log(person1.__proto__ === Person.prototype); // true
    console.log(person1.__proto__.constructor === Person); // true
    /**
    * 同一个构造函数创建的两个实例
    * 共享同一个原型对象：
    */
    console.log(person1.__proto__ === person2.__proto__); // true
    console.log(Person.prototype.isPrototypeOf(person1)); // true
    console.log(Person.prototype.isPrototypeOf(person2)); // true
    // Object.getPrototypeOf() 返回的对象就是传入对象的原型对象
    console.log(Object.getPrototypeOf(person1) === Person.prototype);
})();

// hasOwnProperty() 会在属性存在于调用它的对象实例上时返回 true
(function test3() {
    function Person() {
        Person.prototype.name = "zhangsan";
    }
    let person = new Person;
    console.log(person.hasOwnProperty("name"));//false
})();

// in 操作符 在单独使用时， in 操作符会在可
// 以通过对象访问指定属性时返回 true ，无论该属性是在实例上还是在原型上。
(function test4() {
    function Person() { }
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayName = function () {
        console.log(this.name);
    };
    let person1 = new Person();
    let person2 = new Person();
    console.log(person1.hasOwnProperty("name")); // false
    console.log("name" in person1); // true
    person1.name = "Greg";
    console.log(person1.name); // "Greg"，来自实例
    console.log(person1.hasOwnProperty("name")); // true
    console.log("name" in person1); // true
    console.log(person2.name); // "Nicholas"，来自原型
    console.log(person2.hasOwnProperty("name")); // false
    console.log("name" in person2); // true
    delete person1.name;
    console.log(person1.name); // "Nicholas"，来自原型
    console.log(person1.hasOwnProperty("name")); // false
    console.log("name" in person1); // true
})();

// 列出所有属性
(function test5() {
    function Person() { }
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayName = function () {
        console.log(this.name);
    };
    let keys = Object.keys(Person.prototype);
    console.log(keys);
})();

// 对象的迭代
(function test6() {
    const o = {
        foo: 'bar',
        baz: 1,
        qux: {}
    };
    console.log(Object.values(o));
    console.log(Object.entries((o)));
})();

// 原生对象原型
(function test7() {
    // 获取数组原型对象上的所有属性
    console.log(Object.getOwnPropertyNames(Array.prototype));
    console.log(typeof Array.prototype.sort);
    console.log(typeof String.prototype.substring);
})();