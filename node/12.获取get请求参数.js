const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer((req,res) =>{
    //获取请求参数
    const {query,pathname} = url.parse(req.url,true);
    console.log(query.name);
    console.log(query.age);
    console.log(pathname);

    res.writeHead(200, {
		'content-type': 'text/html;charset=utf8'
	});
    res.end('<h1>你好世界</h1>')
})

server.listen(port,() => {
    console.log(`服务器运行在http://${port}/`);
})