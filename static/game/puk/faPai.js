

( (poot) => {
    poot();
} )( () => {
    // var diZhuPai = [
    //     {huaSe: "红桃", color: "红", index: 1, paiMian: "红桃A", huaSeIndex: 2}
    //     ,{huaSe: "梅花", color: "黑", index: 2, paiMian: "梅花2", huaSeIndex: 3}
    //     ,{huaSe: "黑桃", color: "黑", index: 3, paiMian: "黑桃3", huaSeIndex: 1}
    // ]
    /*********************当前组件自定义的数据************* */
    // 保存当前界面每个玩家，所有的手牌的样式数据集合
    let puks = {};
    // 用来标识，发牌过程是否结束
    let faWan = false;
    // 保存将要出的牌的数据集合
    let chuPai = [];
    // 所有牌dom的父级
    const beijingpai = document.querySelector(".beijingpai");
   
  
   
    // 计算每个玩家的尺寸，用来固定本次牌发到什么位置
    const app = document.querySelector("#app");
    const wan01 = document.querySelector(".wan01");
    const wan02 = document.querySelector(".wan02");
    const dizhu = document.querySelector(".dizhu");
    const dangQian = document.querySelector(".dangQian");
    // 计算对应的尺寸
    const pukWidth = 80;
    const pukHeight = 120;
    const appWidth = parseInt(getComputedStyle( app ).width);
    const appHeight = parseInt(getComputedStyle( app ).height);
    const wan01Width = parseInt(getComputedStyle( wan01 ).width);
    const wan01Height = parseInt(getComputedStyle( wan01 ).height);
    const wan02Width = parseInt(getComputedStyle( wan02 ).width);
    const wan02Height = parseInt(getComputedStyle( wan02 ).height);
    const dizhuWidth = parseInt(getComputedStyle( dizhu ).width);
    const dizhuHeight = parseInt(getComputedStyle( dizhu ).height);
    const dangQianWidth = parseInt(getComputedStyle( dangQian ).width);
    const dangQianHeight = parseInt(getComputedStyle( dangQian ).height);
    // 设置每个玩家的牌的间隔
    let dangQianGe = 40;
    let wan01Ge = 10;
    let wan02Ge = 10;
    const diZhuGe = 30;
    // 得到每个玩家的第一张牌距离边界的距离，即起始位置
    const dangQianQi = (appWidth - dangQianWidth) / 2;
    const wan01Qi = (appHeight - wan01Height) / 2;
    const wan02Qi = (appHeight - wan02Height) / 2;
    const diZhuQi = (appWidth - dizhuWidth) / 2;



    // 发牌函数
    function fapai(arr) {
        // 发牌标识置为false，表示当前正在发牌，抢地主按钮不可以出现
        faWan = false;
        // 初始化，保存每个玩家牌展示样式的集合
        puks = {
            dangQian: [],
            wan01: [],
            wan02: [],
            diZhu: []
        };
        // 构建整副扑克牌
        const zhengFuPuk = createBeijing();
        // 整副牌54张，数组的长度为53，整副牌数组的最后一位为发的第一张牌，该牌在最上面
        // 所以要倒着处理
        let i = 53;
        // 用来标记当前的一张牌发到哪个玩家手中
        let index = 0;
        // 启动定时器，进行发牌处理，定时器的时间与发牌动画的时间相似
        var val = setInterval( () => {
            // 表示当前的牌发给当前用户，去除剩余3张的情况，最后三张为地主牌
            if( i > 2 && index % 3 === 0 ) {
                dangQianFa(zhengFuPuk[i], index / 3, arr[ index / 3 ]);
            } 
            // 表示当前的牌发给当前用户左侧的用户，去除剩余3张的情况，最后三张为地主牌
            else if( i > 2 && index % 3 === 1 )  {
                wan01Fa(zhengFuPuk[i], (index - 1) / 3);
            }
            // 表示当前的牌发给当前用户右侧的用户，去除剩余3张的情况，最后三张为地主牌
            else if( i > 2 && index % 3 === 2 )  {
                wan02Fa(zhengFuPuk[i], (index - 2) / 3);
            }
            // 剩余三张牌发给地主提示栏
            else if( i < 3 )  {
                diZhuFa(zhengFuPuk[i], 2 - i);
            }

            // 发一张牌，减一
            i --;
            // 把发牌标记，变为下一家
            index ++;
            
            // 所有的牌都已经发完，进行牌发完的处理
            if( i < 0 ) {
                // 启动，可以叫地主，出牌的标记
                faWan = true;
                // 关闭发牌定时器
                clearInterval(val);
            }
        }, 300)
    }
    // 创建整副扑克数据集合的方法
    function createBeijing() {
        // 保存，整副扑克数据集合的集合
        const arr = [];
        // 开始构建，共54张牌
        for(let i = 0; i < 54; i ++) {
            // 创建每张牌的数据集合
            const domData = new Puk(-pukWidth / 2 - i / 10, -pukHeight / 2 - i / 10);
            // 根据每张牌的数据集合，创建对应的dom，并进行插入
            domData.createBeiDom();
            // 设置每张牌的初始位置，默认在中间，为发牌做准备
            domData.dom.style.top = "50%";
            domData.dom.style.left = "50%";
            // 把每一张扑克牌数据集合，进行保存
            arr.push(domData);
        }
        // 抛出，创建好的扑克数据集合的集合
        return arr;
    }
    // 创建牌数据集合的构造函数
    class Puk {
        constructor(marginLeft, marginTop, imgUrl) {
            this.imgSrc = imgUrl || "./img/timg.jpg";
            this.width = pukWidth;
            this.height = pukHeight;
            this.marginLeft = marginLeft;
            this.marginTop = marginTop;
            this.dom = document.createElement("div");
            this.bool = false;
        }
        // 根据扑克牌的数据集合，创建出对应的dom，并进行插入
        createBeiDom() {
            const dom = this.dom;
            dom.style.width = this.width + "px";
            dom.style.height = this.height + "px";
            dom.style.marginLeft = this.marginLeft + "px";
            dom.style.marginTop = this.marginTop + "px"
            dom.style.position = "absolute";
            dom.style.background = `url(${ this.imgSrc }) no-repeat`;
            dom.style.backgroundSize = "100% 100%";
            dom.style.transition = "all 0.5s linear";
            beijingpai.appendChild( dom );
        }
        // 设置扑克的位置
        weiZhi (left, top) {
            this.left = left;
            this.top = top;

            this.dom.style.left = left + "px";
            this.dom.style.top = top + "px";
        }
    }
    
    
    /************** 具体的发牌每张牌的设置 *******************/
    // 向当前用户手里发牌
    // 传参意义: 牌数据集合，牌在对应玩家手牌集合中的索引，服务器返回的牌数据集合
    function dangQianFa(pai, index, data) {
        // 更新背景图片，变成对应的手牌
        pai.data = data;
        pai.dom.style.transition = "none";
        if(data.index == 14) {
            pai.dom.style.background = `url(./img/${1}_${data.huaSeIndex}.jpg) no-repeat`;
        }
        else if(data.index == 15) {
            pai.dom.style.background = `url(./img/${2}_${data.huaSeIndex}.jpg) no-repeat`;
        }
        else if(data.index == 16) {
            pai.dom.style.background = `url(./img/${14}_${data.huaSeIndex}.jpg) no-repeat`;
        }
        else if(data.index == 17) {
            pai.dom.style.background = `url(./img/${15}_${data.huaSeIndex}.jpg) no-repeat`;
        }
        else {
            pai.dom.style.background = `url(./img/${data.index}_${data.huaSeIndex}.jpg) no-repeat`;
        }
        
        pai.dom.style.backgroundSize = `100% 100%`;
        pai.dom.style.zIndex = index * 10;
        
        // 定时器的作用，关闭动画切换背景图片，在开启动画进行位置移动
        setTimeout( () => {
           pai.dom.style.transition = "all 0.5s linear";
            const left = dangQianQi + index * dangQianGe;
            const top = appHeight - pukHeight;
            // 设置牌的终点，即发到何处
            faPaiWeiZhi(pai, left, top);
        }, 30)
        
        // 保存到对应玩家手牌的集合中
        puks.dangQian.push( pai );

        // 绑定上对应的出牌事件
        pai.dom.onclick = xuanPai.bind( pai );
    }
    // 向玩家1的手里发牌
    function wan01Fa(pai, index) {
        const left = (pukHeight - pukWidth) / 2;
        const top = wan01Qi + index * wan01Ge - left;
        pai.dom.style.transform = `rotate(90deg)`;
        pai.dom.style.zIndex = index * 10;

        // 设置牌的终点，即发到何处
        faPaiWeiZhi(pai, left, top);

        // 保存到对应玩家手牌的集合中
        puks.wan01.push( pai ) 
    }
    // 向玩家2的手里发牌
    function wan02Fa(pai, index) {
        const left = (pukHeight - pukWidth) / 2;
        const top = wan02Qi + index * wan02Ge - left;
        pai.dom.style.transform = `rotate(-90deg)`;
        pai.dom.style.zIndex = index * 10;

        // 设置牌的终点，即发到何处
        faPaiWeiZhi(pai, appWidth - pukHeight + left, top );

        // 保存到对应玩家手牌的集合中
        puks.wan02.push( pai ) 
    }
    // 向地主标记发牌
    function diZhuFa(pai, index) {
        const left = diZhuQi + index * (pukWidth + diZhuGe);
        const top = 0;
        
        // 设置牌的终点，即发到何处            
        faPaiWeiZhi(pai, left, top)

        // 保存到对应玩家手牌的集合中
        puks.diZhu.push( pai ) 
    }
    
    // 设置发牌时，背景图片的位置
    function faPaiWeiZhi(pai, left, top) {
        pai.weiZhi(left, top);
        pai.dom.style.marginLeft = "0";
        pai.dom.style.marginTop = "0";
    }


    /***********当前用户为地主，更新手牌的操作********/
    // 更新手牌的函数
    function diZhuJiaPai(data) {
        const dizhu = [];
        for(let i = 0; i < data.length; i ++) {
            let paiData = null;
            if(data[i].index == 14) {
                paiData = new Puk(0, 0, `./img/${1}_${data[i].huaSeIndex}.jpg`);
            }
            else if(data[i].index == 15) {
                paiData = new Puk(0, 0, `./img/${2}_${data[i].huaSeIndex}.jpg`);
            }
            else if(data[i].index == 16) {
                paiData = new Puk(0, 0, `./img/${14}_${data[i].huaSeIndex}.jpg`);
            }
            else if(data[i].index == 17) {
                paiData = new Puk(0, 0, `./img/${15}_${data[i].huaSeIndex}.jpg`);
            }
            else {
                paiData = new Puk(0, 0, `./img/${data[i].index}_${data[i].huaSeIndex}.jpg`);
            }
            paiData.dom.onclick = xuanPai.bind( paiData );
            // 保存当前的牌对象
            paiData.data = data[i];
            paiData.createBeiDom();
            // 保存地主牌对象
            dizhu.push(paiData);
            puks.dangQian.push( paiData );
        }

        // 重新渲染手牌
        dangQianChong(dizhu);
    }
    // 重新渲染手牌，地主确定，手牌的数量会发生变化
    function dangQianChong(dizhu) {
        // 对手牌重新排序
        puks.dangQian.sort( (k1, k2) => {
            if(!k1) return 1;
            if(!k2) return -1;
            return k1.data.index - k2.data.index
        } );
        // 重新确定位置
        for( let i = 0; i <  puks.dangQian.length; i ++) {
            // 表示当前的牌已经打出
            if(!puks.dangQian[i]) continue;
            const left = dangQianQi + (dangQianWidth - pukWidth) / (puks.dangQian.length - 2) * i;
            let top = appHeight - pukHeight;
            if( yanDiPai(puks.dangQian[i]) ) {
                top -= 30;
            }
            puks.dangQian[i].weiZhi(left, top);
            puks.dangQian[i].dom.style.zIndex = i * 10;
        }

        // 地主牌下沉
        if(dizhu) {
            setTimeout( () => {
                dizhu.forEach( (k) => {
                    k.weiZhi(k.left, k.top + 30);
                } )  
            }, 1000 )
        }
        

        // 验证当前牌是不是地主的牌，地主牌先在上面，然后在下去
        function yanDiPai(pai) {
            if(!dizhu) return false;
            for(let i = 0; i < dizhu.length; i ++) {
                if(pai === dizhu[i]) return true;
            }
            return false;
        }
    }
    // 重新渲染地主展示牌
    function diZhuChong(dizhu) {
        for(let i = 0; i < puks.diZhu.length; i ++) {
            let url = null;
            if(dizhu[i].index == 14) {
                url = `./img/${1}_${dizhu[i].huaSeIndex}.jpg`;
            }
            else if(dizhu[i].index == 15) {
                url = `./img/${2}_${dizhu[i].huaSeIndex}.jpg`;
            }
            else if(dizhu[i].index == 16) {
                url = `./img/${14}_${dizhu[i].huaSeIndex}.jpg`;
            }
            else if(dizhu[i].index == 17) {
                url = `./img/${15}_${dizhu[i].huaSeIndex}.jpg`;
            }
            else {
                url = `./img/${dizhu[i].index}_${dizhu[i].huaSeIndex}.jpg`;
            }
            puks.diZhu[i].dom.style.background = `url(${url}) no-repeat`;
            puks.diZhu[i].dom.style.backgroundSize = `100% 100%`;
            puks.diZhu[i].dom.style.transition = "none";
        }
    }
    // 重新渲染玩家01的手牌
    function wan01Chong() {
        // 获取起始坐标
        const qiShi = puks.wan01[0].top;
        const lef = puks.wan01[0].left;
        // 重新确定位置
        for( let i = 0; i <  puks.wan01.length; i ++) {
            // 表示当前的牌已经打出
            if(!puks.wan01[i]) continue;
            const top = qiShi + (wan01Height - pukWidth) / (puks.wan01.length - 2) * i;
            const left = lef;
            puks.wan01[i].weiZhi(left, top);
            puks.wan01[i].dom.style.zIndex = i * 10;
            puks.wan01[i].dom.style.display = "block";
            puks.wan01[i].dom.style.transform = `rotate(90deg)`;
        }
    }
    // 重新渲染玩家02的手牌
    function wan02Chong() {
        // 获取起始坐标
        const qiShi = puks.wan02[0].top;
        const lef = puks.wan02[0].left;
        // 重新确定位置
        for( let i = 0; i <  puks.wan02.length; i ++) {
            // 表示当前的牌已经打出
            if(!puks.wan02[i]) continue; 
            const top = qiShi + (wan02Height - pukWidth) / (puks.wan02.length - 2) * i;
            const left = lef;
            puks.wan02[i].weiZhi(left, top);
            puks.wan02[i].dom.style.zIndex = i * 10;
            puks.wan02[i].dom.style.display = "block";
            puks.wan02[i].dom.style.transform = `rotate(-90deg)`;
        }
    }
    // 重新创建背景牌对象
    function createBeiJingPai(legnth) {
        const arr = [];
        for(let i = 0; i < legnth; i ++) {
            const domData = new Puk(0, 0);
            // 创建dom
            domData.createBeiDom();
            domData.dom.style.display = "none";
            arr.push(domData);
        }
        return arr;
    }
    
    // 如果当前用户不是地主，更新其它用户(地主)的背景牌展示
    function qiTa(yongHuIndex, diZhuIndex) {
        const wanArr = _(yongHuIndex, puks.wan01, puks.wan02);
        const chongArr = _(yongHuIndex, wan01Chong, wan02Chong);
        
        // 创建背景图片
        const arr = createBeiJingPai(3);
        // 加入到对应的玩家中
        wanArr[ diZhuIndex ].push( ...arr );
        // 重新渲染
        chongArr[ diZhuIndex ]();

 
        // 构建一个辅助数组，用于数据的处理
        function _(yongHuIndex, wan01, wan02) {
            const arr = [];
            if(yongHuIndex === 0) {
                arr[1] = wan01;
                arr[2] = wan02;
            }
            else if(yongHuIndex === 1) {
                arr[2] = wan01;
                arr[0] = wan02;
            }
            else if(yongHuIndex === 2) {
                arr[0] = wan01;
                arr[1] = wan02;
            }
            return arr;
        }
    }


   

    // 选中牌函数，事件函数
    function xuanPai(e) {
        // 获取当前被点击的dom
        const dom = e.target;
        // 判断本张扑克是被选中还是被取消选中
        if( !this.bool ) {
            // 表示未选中，现在变成选中状态
            this.bool = true;
            // 保存当前牌的数据集合
            chuPai.push( this );
            // 本张牌上移40px，表示已选中
            dom.style.top = this.top - 40 + "px";
        }
        else {
            // 表示已选中，现在变成未选中状态
            this.bool = false;
            // 当前牌的数据集合，从出牌数据集合中移除
            removeChuPai( this );
            // 恢复原样
            dom.style.top = this.top + "px";
        }
    }
    // 从选中扑克的数据集合中移除一个扑克
    function removeChuPai(data) {
        // 取出对应集合的索引
        const index = chuPai.indexOf(data);
        chuPai.splice(index, 1);
    }





    /**
     * 所有选中的牌下移，即选中的牌取消选中，保存所选牌的数据集合进行清空
     * 如果点击不出，则当前选中的牌进行清空，不会继续保留
     */
    function qingKongXuanPai() {
        // 获取到，保存所选牌的数据集合
        const data = chuPai;

        for(let i = 0; i < data.length; i ++) {
            // 对应牌的位置还原
            data[i].dom.style.top = data[i].top + "px";
            // 对应牌的状态变为未选中状态
            data[i].bool = false;
            // 从保存所选牌的数据集合中，移除该牌的信息
            data.splice(i, 1);
        }
    }



    /****************当前组件进行共享的数据***************** */
    // 向外界抛出的数据
    window.faPai = {
        getFaWan: function () {
            return faWan;
        },
        getChuPai: function () {
            return chuPai;
        },
        setChuPai: function (data) {
            chuPai = [];
        },
        getPai: function () {
            return puks;
        },
        // 重新渲染指定的用户牌展示样式
        chongXuan(name) {
            if(name === "dangQian") {
                dangQianChong();
            }
            else if(name === "wan01") {
                wan01Chong();
            }
            else if(name === "wan02") {
                wan02Chong();
            }
        },
        Puk,
        fapai: fapai,
        diZhuJiaPai,
        diZhuChong,
        qiTa,
        qingKongXuanPai
    }
    // 专门修改向外界抛出的数据的方法
    function xiuPao(prop, data) {
        window.index[prop] = data;
    }
} )