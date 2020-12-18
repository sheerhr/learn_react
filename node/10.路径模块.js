const path = require('path');
/**
 * path.basename()
 * 返回路径的最后一部分
 * 其中第二个参数可以过滤掉文件的扩展名
 */
console.log(path.basename('/test/lasetname'));//lasetname
console.log(path.basename('/test/something.txt', 'txt'));//something.


/**
 * path.dirname()
 * 返回路径的目录部分
 */
console.log(path.dirname('/test/something'));//test

/**
 * path.extname()
 * 返回路径的扩展名部分
 */

console.log(path.extname('/test/something')) // ''
console.log(path.extname('/test/something/file.txt')) // '.txt'

/**
 * path.isAbsolute()
 * 检测一个路径是不是绝对路径，如果是就返回true
 */

console.log(path.isAbsolute('/test/something')) // true
console.log(path.isAbsolute('./test/something')) // false

/**
 * path.join()
 * 连接路径的两个或多个地方
 */

const name = 'joe'
console.log(path.join('/', 'users', name, 'notes.txt'))//'/users/joe/notes.txt'

/**
 * path.parse()
 * 解析对象的路径为组成其的片段
 * root: 根路径。
 * dir: 从根路径开始的文件夹路径。
 * base: 文件名 + 扩展名
 * name: 文件名
 * ext: 文件扩展名
 * 
 {
  root: '/',
  dir: '/users',
  base: 'test.txt',
  ext: '.txt',
  name: 'test'
 }
 */
console.log(path.parse('/users/test.txt'))

/**
 * path.relative() 
 * 接受 2 个路径作为参数。 基于当前工作目录，返回从第一个路径到第二个路径的相对路径。 something\test.txt
 */

 console.log(path.relative('/Users/joe', '/Users/joe/test.txt'));//test.txt
 console.log(path.relative('/Users/joe', '/Users/joe/something/test.txt'));//something\test.txt

 /**
  * 可以使用 path.resolve() 
  * 获得相对路径的绝对路径
  */
 console.log(path.resolve('joe.txt'));//D:\study\前端面试题\interview\node\joe.txt
 //通过指定第二个参数，resolve会使用第一个参数作为第二个参数的目录
 console.log(path.resolve('tmp', 'joe.txt'));//D:\study\前端面试题\interview\node\tmp\joe.txt

 //如果第一个参数以斜杠开头，则表示他是绝对路径
console.log(path.resolve('/etc','joe.txt'));//D:\etc\joe.txt

