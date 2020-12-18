//引入http模块
const http = require('http')

//设置主机和端口号
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  //响应状态吗 
  res.statusCode = 200
  //设置响应头   
  res.setHeader('Content-Type', 'text/plain')
  //关闭响应
  res.end('你好世界\n')
})

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})
// 当 Node.js 运行此行代码时，进程会被立即强制终止。
// process.exit(1)

// 也可以用这种方式   process.exitCode = 1
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('进程已终止')
  })
})

process.kill(process.pid, 'SIGTERM')
