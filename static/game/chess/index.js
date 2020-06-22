( (p) => {
    p();
} )(() => {
    
    let win = null;


    function main() {
        // 构建全局数据
        win = new WinData();
        // 创建棋盘结构
        createJieGou();
        // 创建棋子对象
        createQiZi();
        // 在指定的位置放入棋子dom
        chaQiZiDom();
    }

    // 全局数据
    class WinData {
        constructor() {
            this.wid = 9;
            this.heig = 10;
            this.add = document.querySelector(".content");
            this.qiPan = null;

            this.qiZiWeiZhi = null;
            this.muBiaoWeiZhi = null;
            this.zouBoo = "红";
            this.boo = document.querySelector(".boo");
        }
        // 修改全局数据
        modifyWin (action) {
            if( action.type == "MODIFY" ) {
                this[ action.attribute ] = action.value;
            }
        }
    }

    // 创建棋盘结构
    function createJieGou () {
        const {wid, heig, add} = win;

        // 创建棋盘对象
        const qiPan = new QiPan();
        // 创建棋盘中的位置对象
        const weiZhi = new Array(heig);
        for(let i = 0; i < heig; i ++) {
            weiZhi[i] = new Array(wid);
            for(let j = 0; j < wid; j ++) {
                weiZhi[i][j] = new QiPanWeiZhi(j, i);

                if(i <= 4) weiZhi[i][j].color = "红";
                else weiZhi[i][j].color = "黑";

                if(j >= 3 && j <= 5 && (i <= 2 || i >= 7)) {
                    weiZhi[i][j].jiangBoo = true;
                }

                add.appendChild( weiZhi[i][j].dom );
            }
        }
        qiPan.qiPanWeiZhiAgg = weiZhi;
        

        // 对全局数据进行修改
        win.modifyWin( {
            type: "MODIFY",
            attribute: "qiPan",
            value: qiPan
        } );
    }

    // 创建棋盘对象
    class QiPan {
        constructor () {
            this.qiPanWeiZhiAgg = null;
        }
    }
    // 创建棋盘位置对象
    class QiPanWeiZhi {
        constructor (x, y) {
            this.color = null;
            this.jiangBoo = false;
            this.qiZi = null;
            this.x = x;
            this.y = y;
            this.dom = document.createElement("div");

            this.dom.x = x;
            this.dom.y = y;

            this.dom.onclick = function () {
                // 获取初始位置和目标位置
                const {qiZiWeiZhi, muBiaoWeiZhi, qiPan, zouBoo} = win;
                const weiZhi = qiPan.qiPanWeiZhiAgg;

                // 当前点击的是象棋，保存初始位置
                if(!qiZiWeiZhi && weiZhi[this.y][this.x].qiZi ) {
                    // 判断当前象棋的颜色是否可以走
                    if( !colorPanDuan(weiZhi[this.y][this.x].qiZi.color) ) return;

                    win.modifyWin({
                        type: "MODIFY",
                        attribute: "qiZiWeiZhi",
                        value: {
                            x: this.x,
                            y: this.y
                        }
                    })
                    // 添加class，显示边框
                    weiZhi[this.y][this.x].dom.className = "active";
                }
                else if(qiZiWeiZhi) {
                    // 点击的是同一个位置，不进行操作
                    if(this.x == qiZiWeiZhi.x && this.y == qiZiWeiZhi.y) return;

                    win.modifyWin({
                        type: "MODIFY",
                        attribute: "muBiaoWeiZhi",
                        value: {
                            x: this.x,
                            y: this.y
                        }
                    })

                    // 进行落子条件的判断
                    if( luoZiTiaoJian() ) {
                        luoZi();
                        jiangJun();

                        // 修改全局中的颜色标识
                        colorXiu();
                        // 修改出的颜色信息
                        colorBooGengXin();
                    }
                    // 如果点击的位置不能进行落子，则数据复原，能落子也进行数据复原
                    weiZhiInit();
                } 
            }
        }
    }
    // 判断当前象棋的颜色是否可以走
    function colorPanDuan (col) {
        // 获取初始位置和目标位置
        const {zouBoo} = win;
        // 颜色不符和
        if(col != zouBoo) return false;
        return true;
    }
    // 修改全局中的颜色标识
    function colorXiu() {
        const {zouBoo} = win;
        let color = "";
        // 颜色符合，更改颜色
        if(zouBoo == "红") color = "黑";
        else if(zouBoo == "黑") color = "红";

        // 更改全局中的颜色数据
        win.modifyWin({
            type: "MODIFY",
            attribute: "zouBoo",
            value: color
        })
    }

    // 落子条件判断
    function luoZiTiaoJian() {
        // 取出坐标信息以及棋盘数据
        const {qiZiWeiZhi, muBiaoWeiZhi, qiPan} = win;
        const weiZhi = qiPan.qiPanWeiZhiAgg;

        // 获取点击的象棋信息
        const xiangQi = weiZhi[qiZiWeiZhi.y][qiZiWeiZhi.x].qiZi.value;

        // 将要吃的象棋不能是同方的象棋
        if( chi(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) ) return false;
 
        // 判断是否可以进行移动
        if(xiangQi == "俥") {
            if( zhiXianPanDuan(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) === 0 ) return true;
        }
        else if(xiangQi == "炮") {
            if( paoPanDuan(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) ) return true;
        }
        else if(xiangQi == "兵") {
            if( bingPanDuan(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) ) return true;
        }
        else if(xiangQi == "馬") {
            if( maPanDuan(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) ) return true;
        }
        else if(xiangQi == "象") {
            if( xiangPanDuan(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) ) return true;
        }
        else if(xiangQi == "仕") {
            if( shiPanDuan(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) ) return true;
        }
        else if(xiangQi == "帅") {
            if( jiangPanDuan(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) ) return true;
        }

        return false;
    }
    // 将要吃的象棋不能是同方的象棋
    function chi (qiZiWeiZhi, muBiaoWeiZhi, weiZhi) {
        let x0 = qiZiWeiZhi.x;
        let y0 = qiZiWeiZhi.y;
        let x1 = muBiaoWeiZhi.x;
        let y1 = muBiaoWeiZhi.y;
        
        if(!weiZhi[y1][x1].qiZi) return false;
        else if(weiZhi[y0][x0].qiZi.color == weiZhi[y1][x1].qiZi.color) return true;
        return false;
    }
    // 判断俥的前进条件是否满足(得到直线上有多少个象棋)
    function zhiXianPanDuan (qiZiWeiZhi, muBiaoWeiZhi, weiZhi) {
        let x0 = qiZiWeiZhi.x;
        let y0 = qiZiWeiZhi.y;
        let x1 = muBiaoWeiZhi.x;
        let y1 = muBiaoWeiZhi.y;

        let num = -1;
        // 竖着走
        if( x0 == x1 && y0 != y1 ) {
            num = 0;
            if(y0 > y1) {
                y0 = y1;
                y1 = qiZiWeiZhi.y;
            }
            for(let i = y0 + 1; i < y1; i ++) {
                if( weiZhi[i][x0].qiZi ) num += 1;
            }
        }
        // 横着走
        else if( x0 != x1 && y0 == y1 ) {
            num = 0;
            if(x0 > x1) {
                x0 = x1;
                x1 = qiZiWeiZhi.x;
            }
            for(let i = x0 + 1; i < x1; i ++) {
                if( weiZhi[y0][i].qiZi ) num += 1;
            }
        }

        return num;
    }
    // 判断炮的前进条件
    function paoPanDuan(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) {
        let x0 = qiZiWeiZhi.x;
        let y0 = qiZiWeiZhi.y;
        let x1 = muBiaoWeiZhi.x;
        let y1 = muBiaoWeiZhi.y;

        // 前进过程中没有棋子，且终点不是棋子
        if( zhiXianPanDuan(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) == 0 && !weiZhi[y1][x1].qiZi ) {
            return true;
        }
        // 前进过程中有棋子，且终点是棋子
        else if( zhiXianPanDuan(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) == 1 && weiZhi[y1][x1].qiZi ) {
            return true;
        }
    }
    // 判断兵的前进条件
    function bingPanDuan(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) {
        let x0 = qiZiWeiZhi.x;
        let y0 = qiZiWeiZhi.y;
        let x1 = muBiaoWeiZhi.x;
        let y1 = muBiaoWeiZhi.y;

        // 取出所处位置的颜色
        const color = weiZhi[y1][x1].color;
        const qiZiColor = weiZhi[y0][x0].qiZi.color;

        // 如果颜色相同，只能前进，如果颜色不同，可以左右前进
        // 红向前下，黑向上走(前进是任何条件下都可以通过的)
        if((qiZiColor == "红" && y1 - y0 == 1 ||
           qiZiColor == "黑" && y0 - y1 == 1) && x0 == x1) return true;
        // 左右走，只能颜色不同
        if(color != qiZiColor && Math.abs(x1 - x0) == 1 && y0 == y1) return true;
        return false;
    }
    // 判断马的前进条件
    function maPanDuan(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) {
        let x0 = qiZiWeiZhi.x;
        let y0 = qiZiWeiZhi.y;
        let x1 = muBiaoWeiZhi.x;
        let y1 = muBiaoWeiZhi.y;

        // 马走竖日，判断马蹄
        if( Math.abs(y1 - y0) == 2 && Math.abs(x1 - x0) == 1 ) {
            // 向下跳
            if(y1 > y0 && !xiangQIPanDuan(x0, y0 + 1)) return true;
            // 向上跳
            else if(y1 < y0 && !xiangQIPanDuan(x0, y0 - 1)) return true;
        }
        // 马走横日
        else if( Math.abs(y1 - y0) == 1 && Math.abs(x1 - x0) == 2 ) {
            // 向左跳
            if(x1 < x0 && !xiangQIPanDuan(x0 - 1, y0)) return true;
            // 向右跳
            else if(x1 > x0 && !xiangQIPanDuan(x0 + 1, y0)) return true;
        }

        return false;
    }
    // 判断象的前进条件
    function xiangPanDuan(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) {
        let x0 = qiZiWeiZhi.x;
        let y0 = qiZiWeiZhi.y;
        let x1 = muBiaoWeiZhi.x;
        let y1 = muBiaoWeiZhi.y;

        // 走田，不能过河，判断象心
        if( Math.abs(y1 - y0) == 2 && Math.abs(x1 - x0) == 2 ) {
            // 不能过河
            if(weiZhi[y1][x1].color == weiZhi[y0][x0].qiZi.color) {
                // 判断象心
                // 往右下跳
                if(x1 > x0 && y1 > y0 && !xiangQIPanDuan(x0 + 1, y0 + 1)) return true;
                // 往左下跳
                if(x1 < x0 && y1 > y0 && !xiangQIPanDuan(x0 - 1, y0 + 1)) return true;
                // 往右上跳
                if(x1 > x0 && y1 < y0 && !xiangQIPanDuan(x0 + 1, y0 - 1)) return true;
                // 往左上跳
                if(x1 < x0 && y1 < y0 && !xiangQIPanDuan(x0 - 1, y0 - 1)) return true;
            }
        }

        return false;
    }
    // 判断仕的前进条件
    function shiPanDuan(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) {
        let x0 = qiZiWeiZhi.x;
        let y0 = qiZiWeiZhi.y;
        let x1 = muBiaoWeiZhi.x;
        let y1 = muBiaoWeiZhi.y;

        // 斜着走，不能出九宫格
        if( Math.abs(y1 - y0) == 1 && Math.abs(x1 - x0) == 1 ) {
            // 不能出九宫格
            if(weiZhi[y1][x1].jiangBoo) return true;
        }

        return false;
    }
    // 判断将的前进条件
    function jiangPanDuan(qiZiWeiZhi, muBiaoWeiZhi, weiZhi) {
        let x0 = qiZiWeiZhi.x;
        let y0 = qiZiWeiZhi.y;
        let x1 = muBiaoWeiZhi.x;
        let y1 = muBiaoWeiZhi.y;

        // 在九宫格中走
        if( Math.abs(y1 - y0) == 1 && x1 == x0 || 
            Math.abs(x1 - x0) == 1 && y1 == y0 ) {
            // 不能出九宫格
            if(weiZhi[y1][x1].jiangBoo) return true;
        }

        return false;
    }
    // 判断一个位置有没有象棋
    function xiangQIPanDuan (x, y) {
        // 棋盘数据
        const {qiPan} = win;
        const weiZhi = qiPan.qiPanWeiZhiAgg;
        if( weiZhi[y][x].qiZi ) return true;
        return false;
    }
    // 落子
    function luoZi() {
        const {qiZiWeiZhi, muBiaoWeiZhi, qiPan} = win;
        const weiZhi = qiPan.qiPanWeiZhiAgg;
        
        // 取出原始的位置
        const jiuWei = weiZhi[qiZiWeiZhi.y][qiZiWeiZhi.x];
        // 取出新的位置
        const xinWei = weiZhi[muBiaoWeiZhi.y][muBiaoWeiZhi.x];
        // 查看新位置上有没有象棋，如果有，则为将要吃掉的象棋
        chiZi(xinWei);
        
        xinWei.qiZi = jiuWei.qiZi;
        jiuWei.qiZi = null;

        // 落子的渲染
        xinWei.dom.innerHTML = "";
        jiuWei.dom.innerHTML = "";
        xinWei.dom.appendChild( xinWei.qiZi.dom );
    }
    // 位置数据记录初始化
    function weiZhiInit () {
        const {qiZiWeiZhi, qiPan} = win;
        const weiZhi = qiPan.qiPanWeiZhiAgg;
        // 去除class，去除选中棋子的边框
        weiZhi[qiZiWeiZhi.y][qiZiWeiZhi.x].dom.className = "";

        // 修改全局数据
        win.modifyWin({
            type: "MODIFY",
            attribute: "qiZiWeiZhi",
            value: null
        })
        win.modifyWin({
            type: "MODIFY",
            attribute: "muBiaoWeiZhi",
            value: null
        })
    }
    // 得到吃的是什么象棋
    function chiZi(xinWei) {
        let xiangQi = null;
        let color = null;
        if(xinWei.qiZi) {
            xiangQi = xinWei.qiZi.value;
            color = xinWei.qiZi.color;
        }

        if(xiangQi == "帅") {
            if(color == "红") alert("黑方胜出");
            else if(color == "黑") alert("红方胜出");
        }
    }
    // 更新下次出的提示颜色
    function colorBooGengXin() {
        const {zouBoo, boo} = win;
        boo.innerHTML = zouBoo + "方走";
    }

    // 将军的判断
    function jiangJun() {
        // 刚才走的一步棋是否将军
        const boo = beiJiaoColor();
        if(boo) {
            setTimeout(() => {
                alert("将军");}, 50)
        }
    }
    // 得到被将的颜色
    function beiJiaoColor() {
        const { qiPan, muBiaoWeiZhi, qiZiWeiZhi } = win;
        const weiZhi = qiPan.qiPanWeiZhiAgg;

        // 得到刚才所走的象棋
        const qi = weiZhi[muBiaoWeiZhi.y][muBiaoWeiZhi.x].qiZi;
        const c = qi.color == "红" ? "黑" : "红";
        // 得到对应的帅的位置
        let shuaiX = null;
        let shuaiY = null;

        // 遍历整个象棋
        for(let i  = 0; i < weiZhi.length; i ++) {
            for(let j = 0; j < weiZhi[i].length; j ++) {
                if( weiZhi[i][j].qiZi && weiZhi[i][j].qiZi.color == c && 
                    weiZhi[i][j].qiZi.value == "帅") {
                    shuaiX = j;
                    shuaiY = i;
                }
            }
        }

        // 修改对应的数据
        win.modifyWin( {
            type: "MODIFY",
            attribute: "qiZiWeiZhi",
            value: muBiaoWeiZhi
        } )
        win.modifyWin( {
            type: "MODIFY",
            attribute: "muBiaoWeiZhi",
            value: {x: shuaiX, y: shuaiY}
        } )
         

        // 查看当前的棋子，是否可以把这个帅给吃掉
        let boo = false;
        if( luoZiTiaoJian() ) {
            boo = true;
        }

        // 数据复原
        win.modifyWin( {
            type: "MODIFY",
            attribute: "qiZiWeiZhi",
            value: qiZiWeiZhi
        } )
        win.modifyWin( {
            type: "MODIFY",
            attribute: "muBiaoWeiZhi",
            value: muBiaoWeiZhi
        } )

        return boo;
    }



    // 创建棋子对象
    function createQiZi () {
        const {qiPan} = win;
        const weiZhi = qiPan.qiPanWeiZhiAgg;

        // 创建車
        weiZhi[0][0].qiZi = new QiZi("俥", "红");
        weiZhi[0][8].qiZi = new QiZi("俥", "红");
        // 创建马
        weiZhi[0][1].qiZi = new QiZi("馬", "红");
        weiZhi[0][7].qiZi = new QiZi("馬", "红");
        // 创建象
        weiZhi[0][2].qiZi = new QiZi("象", "红");
        weiZhi[0][6].qiZi = new QiZi("象", "红");
        // 创建仕
        weiZhi[0][3].qiZi = new QiZi("仕", "红");
        weiZhi[0][5].qiZi = new QiZi("仕", "红");
        // 创建帅
        weiZhi[0][4].qiZi = new QiZi("帅", "红");
        // 创建炮
        weiZhi[2][1].qiZi = new QiZi("炮", "红");
        weiZhi[2][7].qiZi = new QiZi("炮", "红");
        // 创建兵
        weiZhi[3][0].qiZi = new QiZi("兵", "红");
        weiZhi[3][2].qiZi = new QiZi("兵", "红");
        weiZhi[3][4].qiZi = new QiZi("兵", "红");
        weiZhi[3][6].qiZi = new QiZi("兵", "红");
        weiZhi[3][8].qiZi = new QiZi("兵", "红");


        // 创建車
        weiZhi[9][0].qiZi = new QiZi("俥", "黑");
        weiZhi[9][8].qiZi = new QiZi("俥", "黑");
        // 创建马
        weiZhi[9][1].qiZi = new QiZi("馬", "黑");
        weiZhi[9][7].qiZi = new QiZi("馬", "黑");
        // 创建象
        weiZhi[9][2].qiZi = new QiZi("象", "黑");
        weiZhi[9][6].qiZi = new QiZi("象", "黑");
        // 创建仕
        weiZhi[9][3].qiZi = new QiZi("仕", "黑");
        weiZhi[9][5].qiZi = new QiZi("仕", "黑");
        // 创建帅
        weiZhi[9][4].qiZi = new QiZi("帅", "黑");
        // 创建炮
        weiZhi[7][1].qiZi = new QiZi("炮", "黑");
        weiZhi[7][7].qiZi = new QiZi("炮", "黑");
        // 创建兵
        weiZhi[6][0].qiZi = new QiZi("兵", "黑");
        weiZhi[6][2].qiZi = new QiZi("兵", "黑");
        weiZhi[6][4].qiZi = new QiZi("兵", "黑");
        weiZhi[6][6].qiZi = new QiZi("兵", "黑");
        weiZhi[6][8].qiZi = new QiZi("兵", "黑");
    }
    // 棋子对象的构造函数
    class QiZi {
        constructor(value, color) {
            this.value = value;
            this.color = color;
            this.dom = document.createElement("div");
            this.dom.innerHTML = value;
            if(color == "红") this.dom.style.color = "red";
            if(color == "黑") this.dom.style.color = "#000";
            this.dom.className = "qiZi"
        }
    }

    // 在指定的位置放入棋子dom
    function chaQiZiDom() {
        const {qiPan} = win;
        const weiZhi = qiPan.qiPanWeiZhiAgg;

        for(let i = 0; i < weiZhi.length; i ++) {
            for(let j = 0; j < weiZhi[i].length; j ++) {
                const dom = weiZhi[i][j].dom;
                dom.innerHTML = "";
                if(weiZhi[i][j].qiZi) {
                    dom.appendChild(weiZhi[i][j].qiZi.dom);
                }
            }
        }
    }


    main();
})