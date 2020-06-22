( (t) => {t()} )( () => {

    // 全局数据
    let win = null;

    // 全局数据的构造函数
    class WinClass {
        constructor() {
            this.wid = 20;
            this.heig = 20;
            this.domAgg = [];
            this.app = document.querySelector(".content");
            this.leiNum = 26;
        }
    }

    
    function main() {
        // 创建全局数据
        win = new WinClass();
        // 创建结构
        createDomS();

        // 指定雷的位置
        leiWeiZhi();
    }
    // 创建结构
    function createDomS() {
        // 分解全局数据，取出需要的数据
        let {wid, heig, app, domAgg} = win;

        domAgg.splice(0);
        app.innerHTML = "";
        for(let i = 0; i < heig; i ++) {
            domAgg[i] = new Array(wid);
            for(let j = 0; j < wid; j ++) {
                const d = createDom();
                d.xiuAaiWeiZhiData(j, i);

                domAgg[i][j] = d;
                app.appendChild(d.dom);

                d.onClick();
            }
        }
    }
    // 创建一个结构对象
    function createDom() {
        const domAgg = new Dom();
        domAgg.dom.className = "bei";
        return domAgg;
    }

    // 指定雷的位置
    function leiWeiZhi() {
        const { leiNum, domAgg } = win;

        for(let i = 0; i < leiNum; i ++) {
            const weiZhi = leiWeiZhiDan();
            domAgg[ weiZhi.y ][ weiZhi.x ].boo = "lei";
        }
    }
    // 得到一个雷的位置
    function leiWeiZhiDan() {
        let {wid, heig, domAgg} = win;

        const x = parseInt(Math.random() * wid);
        const y = parseInt(Math.random() * heig);
        // 判断当前位置是否已经是雷
        if( domAgg[y][x].boo == "lei" ) {
            // 如果是进行递归
            return leiWeiZhiDan();
        }
        
        return {x, y}
    }
    

    // 位置对象
    class Dom {
        constructor() {
            this.width = 30;
            this.height = 30;
            this.x = 0;
            this.y = 0;
            this.boo = "bei";
            this.dom = document.createElement("div");
        }
        // 修改位置相关的数据
        xiuAaiWeiZhiData(x, y) {
            this.x = x;
            this.y = y;
            this.dom.x = x;
            this.dom.y = y;
        }
        // 绑定鼠标点击事件
        onClick() {
            let { domAgg, wid, heig } = win;
            // 绑定鼠标点击事件
            this.dom.onclick = function () {
                const x = this.x;
                const y = this.y;
                // 查看点击到的是否为雷
                if(domAgg[y][x].boo == "lei") {
                    leiXianShi();
                }
                else if(domAgg[y][x].boo !== "qi") {
                    leiNumJiSuan(x, y);
                }
            }
            // 绑定鼠标右击插旗事件
            this.dom.oncontextmenu = function (e) {
                const x = this.x;
                const y = this.y;
                if( domAgg[y][x].boo == "qi" ) {
                    domAgg[y][x].boo = "bei";
                    domAgg[y][x].dom.className = "bei";
                }
                else {
                    domAgg[y][x].boo = "qi";
                    domAgg[y][x].dom.className = "qi";
                }
                e.preventDefault();
            }

            // 点击后，进行扩展，显示出周边的雷数
            function leiNumJiSuan(x, y, b = []) {
                if( !bianJie(y, x) ) return;
                // 查看当前位置是否已经查询过
                if( b.indexOf(`${x}-${y}`) > -1) return;
                b.push(`${x}-${y}`);

                let num = 0;
                // 计算出当前位置，周边的雷数
                for(let i = y - 1; i <= y + 1; i ++) {
                    for(let j = x - 1; j <= x + 1; j ++) {
                        // 如果周边有一个雷，计算加一
                        if( bianJie(i, j) && domAgg[i][j].boo == "lei" ) {
                            num += 1;
                        }
                    }
                }
                // 周边没有雷，进行递归
                if(num == 0) {
                    for(let i = y - 1; i <= y + 1; i ++) {
                        for(let j = x - 1; j <= x + 1; j ++) {
                            // 进行递归
                            leiNumJiSuan(j, i, b);
                        }
                    }
                }

                // 样式转变
                styleZhuan(x, y, num);
            }
            // 边界判断
            function bianJie(y, x) {
                if(x < wid && y < heig && x >= 0 && y >= 0) return true;
                return false;
            }
            // 样式转变
            function styleZhuan(x, y, num) {
                if(domAgg[y][x].boo !== "qi") {
                    domAgg[y][x].dom.className = "";
                    domAgg[y][x].boo = "";
                    // 周边有雷
                    if(num > 0) domAgg[y][x].dom.innerHTML = num;
                }
            }

            // 显示出所有的雷
            function leiXianShi() {
                for(let i = 0; i < domAgg.length; i ++) {
                    for(let j = 0; j < domAgg[i].length; j ++) {
                        if(domAgg[i][j].boo == "lei") domAgg[i][j].dom.className = "lei";
                        domAgg[i][j].dom.onclick = null;
                        domAgg[i][j].dom.oncontextmenu = null;
                    }
                }
                setTimeout( () => {
                    alert("游戏失败");
                }, 50 )
            }
        }
    }




    main();
} )