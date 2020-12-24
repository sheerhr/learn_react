/**
 * 使用var
 * for(var i = 0;i<5;i++){
 * }
 * console.log(i);  //5
 * 使用let过后
 */

for (let i = 0; i < 5; i++) {

}
console.log(i); //i is not defined

/**
 * 在同步代码执行之后，使用var的迭代变量，js执行引擎并不会为每一个迭代循环声明一个新的变量而是一直是同一个变量。
 */
for (var i = 0; i < 5; ++i) {
    setTimeout(() => {
        console.log(i);
    }, 0)
}
/**
 * JS中的for循环体比较特殊，每次执行都是一个全新的独立的块作用域，用let声明的变量传入到 for循环体的作用域后，不会发生改变，不受外界的影响
 * 使用let声明的变量，js执行引擎会为每个迭代循环声明一个新的迭代变量。每个setTimeOut都是引用的不同的变量实例。
 */
for (let i = 0; i < 5; ++i) {
    setTimeout(() => {
        console.log(i);
    }, 0)
}