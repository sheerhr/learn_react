
const express = require('express');
const path = require('path');
//创建网站服务器
const app = express();

//告诉express框架模板的位置
app.set('views', path.join(__dirname,'views'));

//设置模板的后缀
app.set('view engine','art');

app.engine('art',require('express-art-template'));

//开放静态资源文件
app.use(express.static(path.join(__dirname,'public')));


// 引入路由模块
const home = require('./route/home');
const admin = require('./route/admin');

app.use('/home',home);
app.use('/admin',admin);

app.listen(80);
console.log("服务器启动成功");