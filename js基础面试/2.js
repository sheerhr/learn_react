(
    function testApplyArguments() {
        function sum(num1,num2) {
            return num1+num2;
        }
        function callsum1(num1,num2) {
            console.log(this);
            console.log("testApplyArguments");
            return sum.apply(this,arguments);
        }
        console.log(callsum1(10,10));
    }
)();

(
    function testApplyArray() {
        function sum(num1,num2) {
            return num1+num2;
        }
        function callsum1(num1,num2) {
            console.log(this);
            console.log("testApplyArray");
            return sum.apply(this,[num1,num2]);
        }
        console.log(callsum1(10,10));
    }
)();

(function testCall() {
    function sum(num1,num2) {
        return num1+num2;
    }
    function callsum1(num1,num2) {
        console.log(this);
        console.log("testCall");
        return sum.call(this,num1,num2);
    }
    console.log(callsum1(10,10));
})();

(function testRealmean() {
    global.color = 'red';

    let mycolor = {
        color : 'pink'
    }
    
    function showColor() {
        console.log(this.color);
    }

    showColor();

    showColor.call(mycolor);

})();

(function testBind() {
    global.color = 'red';

    let mycolor = {
        color : 'pink'
    }
    
    function showColor() {
        console.log(this.color);
    }

    let showColorBind = showColor.bind(mycolor);

    showColorBind();
})();