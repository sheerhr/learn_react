// 用递归来实现5的阶乘
(function testJiechen() {
    function a(n) {
        if(n = 1){
            return 1
        }else {
            return n * a(n-1);
        }
    }
    console.log(a(10));
})();