// 引入express 框架
const express = require('express');
const { nextTick } = require('process');
// 创建网站服务器
const app = express();

//监听端口
app.listen(3000);

console.log('网站服务器启动成功');

app.get('/request',(req,res,next) => {
    req.name = "罗峰";
    next();
})

app.get('/request',(req,res,next) => {
    res.send(req.name);
})


