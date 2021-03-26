// 计算出以下商品单价和金额的总和，初始值为10
(function testReduce() {
    let arr = [{count:1,price:10,name:'a'},{count:3,price:50,name:'b'},{count:5,price:23,name:'c'},{count:2,price:14,name:'d'}];
    let total = arr.reduce((prev,cur) => {
        return prev + cur.count * cur.price
    },10)
    console.log(total);
})();
