( (tool) => {

    window.kaiShiYouXi = tool;

} )( (t) => {
    const app = document.querySelector("#app");

    // 状态
    const type = t;
    

    // 保存定时器
    let interval = null;

    // 用户信息
    let yongHuData = null;
    // 保存用户信息的json格式，以便往服务器中发送
    let yongHuDataJSON = null;
    // 棋局标签集合
    let qiJvDomAgg = null;
    // 保存当前可以落子的数据集合
    let keYi = null;

    // 当前桌是否已经满员
    let manYuanBoo = false;
    // 当前用户是否可以落子
    let luoZiBoo = false;
    
    

    function main() {
        // 发送请求得到用户信息数据
        ajax(`/wuZiQi/fenZhuo?type=${type}`) 
        .then( (data) => {
            yongHuData = data;
            yongHuDataJSON = JSON.stringify( data );
            // 启动定时器
            terval();
        } )
    }

    function terval() {
        // 启动定时器
        interval = setInterval( () => {
            // 验证当前棋桌是否已经满员
            if(!manYuanBoo) {
                ajax(`/wuZiQi/kaiJv?yongData=${yongHuDataJSON}`) 
                .then( (data) => {
                    if(data.type == "ok") {
                        manYuanBoo = true;
                        // 渲染出整个棋盘
                        xuanRan();
                        // 消除匹配标识
                        clearTiShi();
                        
                        // 构建出当前用户的棋子颜色
                        document.querySelector(".qiZiColor").innerHTML = `${yongHuData.qiZiColor}色`
                    }
                    else {
                        tiShi();
                    }
                } )
            }
            // 满员之后拿到，可以落子的用户标识
            else {
                if( !luoZiBoo ) {
                    ajax(`/wuZiQi/getLuoZiColor?yongData=${yongHuDataJSON}`) 
                    .then( (data) => {
                        keYi = data;
                        if(data.jieShu) {
                            jieShu(data);
                        }else {
                            luo(data);
                        }
                    } )
                }
                
            }
         
        }, 500 )
    }

    // 游戏结束处理函数
    function jieShu(data) {
        // 智能棋子结束后，当前用户要更新智能棋子的位置
        if(data.jieShu.color !== yongHuData.qiZiColor) {
            gengXi(data.yiLuoQiZi);
        }

        clearInterval(interval);
        if(data.jieShu.color === "黑") {
            setTimeout( () => {
                alert("黑子胜");
            }, 20 )
        }
        else if(data.jieShu.color === "白") {
            setTimeout( () => {
                alert("白子胜");
            }, 20 )
        }
    }

    // 游戏没有结束，继续落子判断的处理函数
    function luo(data) {
        if(luoZiBoo) return;
        // 与当前用户的颜色相同，表示可以落子
        if( yongHuData.qiZiColor == data.color) {
            luoZiBoo = true;
        }
        // 单机，表示可以落子
        if( type === "单机" ) {
            luoZiBoo = true;
        }
        // 更新棋子的展示，双人和智能要保持同步
        gengXi(data.yiLuoQiZi);
        // 更新当前可以落子的颜色标识
        luoZiColor(data.color);
    }



    // 创建棋盘数据标签集合，渲染出整个棋盘
    function xuanRan() {
        app.innerHTML = "";
        // 创建父级容器
        const dom = document.createElement("div");
        dom.className = "qiPan";
        app.appendChild( dom );
        
        // 进行事件委托
        app.onclick = click;

        // 创建棋子
        createQiZi(dom);
    }
    function createQiZi(dom) {
        const w = yongHuData.width;
        const h = yongHuData.height;
        qiJvDomAgg = new Array(h);
        for(let i = 0; i < qiJvDomAgg.length; i ++) {
            qiJvDomAgg[i] = new Array(w);
        }

        const width = dom.offsetWidth;
        const height = dom.offsetHeight;
        
        for(let i = 0; i < h; i ++) {
            for(let j = 0; j < w; j ++) {
                qiJvDomAgg[i][j] = new CreateDom(j, i, parseInt(width / 15), parseInt(height / 15));
                dom.appendChild( qiJvDomAgg[i][j].dom );
                qiJvDomAgg[i][j].xuanRan(width, height);
            }
        }
    }
    // 创建每一个棋点的构造函数
    function CreateDom(x, y, width, height) {
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.dom = document.createElement("div");
    }
    // 进行渲染
    CreateDom.prototype.xuanRan = function (w, h) {
        this.top = (h - this.height * 14) / 2 - this.height / 2 + this.height * this.y;
        this.left = (w - this.width * 14) / 2 - this.width / 2 + this.width * this.x;

        const dom = this.dom;
        dom.style.width = this.width + "px";
        dom.style.height = this.height + "px";
        dom.style.position = "absolute";
        dom.style.left = this.left + "px";
        dom.style.top = this.top + "px";
        dom.style.boxSizing = "border-box";
        dom.style.padding = "7px";

        dom.x = this.x;
        dom.y = this.y;
        dom.type = false;
    }


    // 棋子点击函数
    function click(e) {
        const x = e.target.x;
        const y = e.target.y;
        // 当前用户棋子的颜色
        const color = keYi.color;

        // 判断是否可以进行落子
        if(luoZiBoo && !e.target.type) {
            luoZiBoo = false;
            // 当前棋子的位置已经落子，不能再次进行落子
            e.target.type = true;
            if( color === "白" ) {
                e.target.className = "bai";
            }
            else if( color === "黑" ) {
                e.target.className = "hei";
            }

            // 发送请求，服务器保存落子信息
            const luoZi = JSON.stringify( {
                x,
                y,
                qiZiColor: color
            } );
            // 发送请求
            ajax(`/wuZiQi/luoZi?yongData=${yongHuDataJSON}&qiZiData=${luoZi}`)
        }
    }
    // 更新棋子的展示，为了使双人和智能保存同步
    function gengXi(data) {
        for(let i = 0; i < data.length; i ++) {
            // 表示当前位置的棋子没有进行更新，进行更新棋子
            if( !qiJvDomAgg[ data[i].y ][ data[i].x ].dom.type ) {
                qiJvDomAgg[ data[i].y ][ data[i].x ].dom.type = true;
                if(data[i].qiZiColor === "白") {
                    qiJvDomAgg[ data[i].y ][ data[i].x ].dom.className = "bai";
                }
                else if(data[i].qiZiColor === "黑") {
                    qiJvDomAgg[ data[i].y ][ data[i].x ].dom.className = "hei";
                }
            }
        }
    }
    

    // 发送请求的函数
    async function ajax(url) {
        const data = await fetch(url);
        const d = await data.json();
        return d;
    }


    // 匹配玩家过程中的提示信息的处理
    let tishiDom = null;
    let tiShiVal = null;
    function tiShi() {
        if( tishiDom ) return ;
        tishiDom = document.createElement("div");
        tishiDom.innerHTML = "玩家匹配中";
        tishiDom.style.position = "absolute";
        tishiDom.style.left = "50%";
        tishiDom.style.top = "50%";
        tishiDom.style.transform = "translate(-50%, -50%)";
        tishiDom.style.lineHeight = "30px";
        tishiDom.style.textAlign = "center";
        tishiDom.style.color = "#fff";
        tishiDom.style.fontSize = "24px";
        tishiDom.style.fontWeight = "700";
        // tishiDom.style.color = "rgb(38, 35, 173)";
        
        const arr = [
            "玩家匹配中 ·",
            "玩家匹配中 · ·",
            "玩家匹配中 · · ·",
            "玩家匹配中 · · · ·"
        ]
        let i = 0;

        tiShiVal = setInterval( () => {
            if( i >= arr.length ) i = 0;
            tishiDom.innerHTML = arr[i];
            i ++;
        }, 500)


        app.appendChild( tishiDom );
    }
    function clearTiShi() {
        if( !tishiDom ) return;
        tishiDom.remove();
        tiShiDom = null;
        clearInterval(tiShiVal);
    }


    // 玩家落子的提示信息
    const luoTi = document.querySelector(".luoZiColor");
    function luoZiColor(color) {
        luoTi.innerHTML = `${color}子落`
    }
     


    addEventListener("beforeunload", () => {
        ajax(`/wuZiQi/guanBi?yongHuData=${yongHuDataJSON}`)
    } )


    // 启动入口函数
    main();
} ) 