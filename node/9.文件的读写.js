const fs = require('fs');

/**
 * 读取文件的三个参数
 * 1:文件路径
 * 2.编码方式
 * 3.callback(err,doc){
 * 
 * }
 * err:文件读取发生错误时的信息，
 * doc:读取的文件内容
 */
fs.readFile('./1.hellonode.js','utf8',(err,doc)=>{
    console.log(err);
    console.log(doc);
})

/**
 * 写入文件的三个参数
 * 1.写入文件的路径，若没有自动创建
 * 2.要写入的内容
 * 3.回调函数，失败的回调
 */
fs.writeFile('./etc/testFile.js','haha',err => {
    if(err) {
        console.log(err);
        return
    }else {
        console.log('文件内容写入成功');
    }
})
