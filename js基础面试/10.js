(function testExplain() {
    var a = 10;
    function test() {
        console.log(a);
        a = 100;
        var b = 2 * a;
        var a;
        console.log(a);
        console.log(b)
    }
    test();
})();