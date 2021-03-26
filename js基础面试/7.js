// 获取对象中的键
(function testKeyInObject() {
    let o = {   name : "精神小伙儿",
                age : 18  };
    for (let key in o) {
        console.log(key);
    }
    console.log(Object.keys(o));
})();