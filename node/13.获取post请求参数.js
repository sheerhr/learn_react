const http = require('http');
const qs = require('querystring');

const port = 3000;

const server = http.createServer((req,res) =>{
    let postParams = '';

    //监听数据传输事件
    req.on('data', params => {
        postParams += params
    })

    //监听数据传输完成事件
    req.on('end', () => {
        console.log(qs.parse(postParams));
    })

    res.writeHead(200, {
		'content-type': 'text/html;charset=utf8'
	});
    res.end('<h1>你好世界</h1>')
})

server.listen(port,() => {
    console.log(`服务器运行在http://${port}/`);
})