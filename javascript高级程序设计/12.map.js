(function test1() {
    const m = new Map([
        ["key1","val1"],
        ["key2","val2"],
        ["key3","val3"]
        ]
    );
    console.log(m.entries);
    for (const pair of m.entries()) {
        console.log(pair);
    }
    for (const pair of m[Symbol.iterator]()) {
        console.log(pair);
    }
    for (let key of m.keys()){
        console.log(key);
    }
    for (const value of m.values()) {
        console.log(value);
    }

    const m1 = new Map([[
        "key1","val1"
    ]]);

    for (let key of m1.keys()) {
        key = "newkey";
        console.log(key);
        console.log(m1.get(key));
    }
})();