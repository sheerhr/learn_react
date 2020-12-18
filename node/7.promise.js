var p = new Promise(function(resolve,reject){
    if(true){  //
        resolve("OK")
    }else {
        reject("error")
    }
});
p.then(function(data){  
    console.log(data)   //成功的
},function(data){
    console.log(data)
})