(function test1() {
    let date = new Date();
    console.log(date); //2021-01-04T01:07:27.978Z
    let someDate = new Date(Date.parse("May 23, 2019"));
    console.log(someDate);
    /**
     * 如果传给 Date.parse() 的字符串并不表示日期，则该方法会返回 NaN 。
     * 如果直接把表示日期的字符串传给 Date 构造函数，那么 Date 会在后台调用 Date.parse() 。
     * 换句话说，下面这行代码跟前面那行代码是等价的：
     */
    let some = new Date("May 23, 2019");
    console.log(some);

    //如果传给 Date.parse() 的字符串并不表示日期，则该方法会返回 NaN
    let s = Date.parse("string");
    console.log(s); //NaN

    /** Date.UTC() 方法也返回日期的毫秒表示，但使用的是跟 Date.parse() 不同的信息来生成这个值。
     * 传给 Date.UTC() 的参数是年、零起点月数（1 月是 0，2 月是 1，以此类推）、日（1~31）、时（0~23）、
     * 分、秒和毫秒。这些参数中，只有前两个（年和月）是必需的。如果不提供日，那么默认为 1 日。其他
     * 参数的默认值都是 0。
     */
    let y2k = new Date(Date.UTC(2000, 0));
    console.log(y2k);
    // Date.UTC() 方法也返回日期的毫秒表示
    let y = Date.UTC(2000, 1);
    console.log(y);
    // GMT 时间 2005 年 5 月 5 日下午 5 点 55 分 55 秒
    let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
    console.log(allFives);
    // ECMAScript 还提供了 Date.now() 方法，返回表示方法执行时日期和时间的毫秒数。
    let start = Date.now();
    console.log(start);
    for (let index = 0; index < 1000; index++) {
        for (let j = 0; j < 10000; j++) {}
    }
    let end = Date.now();
    console.log(end);
    // Date 类型的 toLocaleString() 方法返回与浏览器运行的本地环境一致的日期和时间。
    // 这通常意味着格式中包含针对时间的 AM（上午）或 PM（下午），但不包含时区信息（具体格式可能因浏览器而不同）
    console.log(new Date().toLocaleString()); //2021-1-4 10:10:11
    // toString() 方法通常返回带时区信息的日期和时间，而时间也是以 24 小时制（0~23）表示的。
    console.log(new Date().toString());


})();