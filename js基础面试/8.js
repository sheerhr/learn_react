// 请取出check为true的值
(function testFilter() {
    var arr = [{check:true,id:1},{check:false,id:2},{check:false,id:3},{check:true,id:4}];
    console.log(arr.filter(item => item.check)); 
})();