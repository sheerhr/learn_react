function fun() {
    console.log(n);
    n = 456;
    console.log(n);
}
var n = 123;
fun(n);
console.log(n);