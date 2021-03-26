const fs = require('fs');
(
    function test1() {
        function double(value) {
            setTimeout(() => setTimeout(console.log, 0, value * 2), 1000);
        }
        double(3);
    }
)();
(
    function test2() {
        function double(value, callback) {
            setTimeout(() => callback(value * 2), 1000);
        }
        double(3, (x) => {
            console.log(`回调返回了${x}`);
        });
    }
)();
(
    function test3() {
        function double(value, success, failure) {
            setTimeout(() => {
                try {
                    if (typeof value !== 'number') {
                        throw 'Must provide number as first argument';
                    }
                    success(2 * value);
                } catch (e) {
                    failure(e);
                }
            }, 1000);
        }
        const successCallback = (x) => console.log(`Success: ${x}`);
        const failureCallback = (e) => console.log(`Failure: ${e}`);
        double(3, successCallback, failureCallback);
        double('b', successCallback, failureCallback);
    }
)();
// 嵌套异步回调
(
    function test4() {
        var sayhello = function(name, callback) {
            setTimeout(function() {
                console.log(name);
                callback();
            }, 1000);
        }
        sayhello("first", function() {
            sayhello("second", function() {
                sayhello("third", function() {
                    console.log("end");
                });
            });
        });
    }
)();
// promise
(
    function test5() {
        let p = new Promise(() => {});
        setTimeout(console.log, 0, p);
    }
)();

(
    function test6() {
        // 生成一个min到max的随机数
        function random(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (random(1, 100) <= 30) {
                    function success() {
                        console.log("恭喜获得model3一辆");
                    }
                    // resolve函数的作用是把promise的状态从pending置为resolved,并且将异步操作的value值传递出去到then()方法中处理
                    resolve(success);
                } else {
                    function failed() {
                        console.log("欢迎再接再厉");
                    }
                    // reject函数的作用是把promise的状态从pending置为rejected,并且将异步操作的value值传递出去到then()方法中处理
                    reject(failed);
                };
            }, 1000);
        });
        p.then((success) => {
            success();
        }, (failed) => {
            failed();
        });
    }
)();
// 读取文件
(function test7() {
    let p = new Promise((resolve, reject) => {
        fs.readFile('./content.txt', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        })
    });
    p.then((data) => {
        console.log(data);
    }, (err) => {
        console.log(err);
    })
})();

(function test8() {
    let p = new Promise((resolve, reject) => {
        console.log("1111");
    })
    console.log("222");
})();