const { resolve } = require("dns");

console.log(1);
setTimeout(() =>{
    console.log(5);
    new Promise(resolve =>{
        resolve()
    }).then(res => console.log(9));
},100)
new Promise(resolve => {
    console.log(2);
    setTimeout(() => {
    console.log(6)
}, 100);
    resolve();
}).then(res => {
    console.log(4)
})
console.log(3);