(
    function test1() {
        function fab(n) {
            if (n == 1) {
                return 1;
            }
            if (n == 2) {
                return 1;
            } else {
                return fab(n - 1) + fab(n - 2);
            }
        }

        function isfab(m) {
            for (let i = 1; fab(i) <= m; i++) {
                console.log(fab(i));
                if (fab(i) == m) {
                    console.log("是斐波那契数");
                    if (i >= 2) {
                        console.log(fab(i - 1));
                        console.log(fab(i));
                        console.log(fab(i + 1));
                    } else {
                        console.log("前一位没有数");
                        console.log(fab(i));
                        console.log(fab(i + 1));
                    }
                } else {
                    console.log("nono,不是斐波那契数");
                }
            }
        }
        isfab(5);
    }
)();