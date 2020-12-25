(function test1() {
    let person = new Object();
    person.name = "Nicholas";
    console.log(person.name);
    console.log("---------------------------");
    /**
     * 原始值不能有属性，尽管尝试给原始值添加属性不会报错
     */
    let name = "Nicholas";
    name.age = 27;
    console.log(name.age); //undefined
    console.log("---------------------------");
    /**
     * 如果使用的是 new 关键字，则 JavaScript 会创建一个 Object 类型的实例，但其行为类似原始值。
     * 下面来看看这两种初始化方式的差异
     */
    let name1 = "Nicholas";
    let name2 = new String("Matt");
    name1.age = 27;
    name2.age = 26;
    console.log(name1.age); // undefined
    console.log(name2.age); // 26
    console.log(typeof name1); // string
    console.log(typeof name2); // object
    console.log("--------------------------");
})();