/**
 * 每个函数调用都有自己的上下文。当代码执行流进入函数时，函数的上下文被推到一个上下文栈上。
 * 在函数执行完之后，上下文栈会弹出该函数上下文，将控制权返还给之前的执行上下文。ECMAScript
 * 程序的执行流就是通过这个上下文栈进行控制的。
 */
(function test1() {
    var color = "blue";
    console.log(this);
    console.log("------------------------------");

    function changeColor(col) {
        console.log(arguments);
        console.log(this);
        console.log("+++++++++++++++++++++++++++++++++");
        if (color === "blue") {
            color = col;
        } else {
            color = "blue";
        }
    }
    changeColor("red");
})();