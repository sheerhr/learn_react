const http = require('http');

const port = 3000;

const server = http.createServer((req,res) =>{

    // 获取请求方式
    console.log(req.method);
    // 获取请求地址
    console.log(req.url);
    // 获取请求报文
    console.log(req.headers['accept']);


    res.writeHead(200, {
		'content-type': 'text/html;charset=utf8'
	});
    res.end('<h1>你好世界</h1>')
})

server.listen(port,() => {
    console.log(`服务器运行在http://${port}/`);
})