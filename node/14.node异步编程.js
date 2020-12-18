console.log("代码开始执行");
setTimeout(() => {
    console.log("第一次");
}, 1);
setTimeout(() => {
    console.log("第二次");
}, 0);
console.log("代码结束执行");

new Promise((resolve,reject)=>{
    
})