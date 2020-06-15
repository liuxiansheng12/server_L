

( (poot) => {poot()} )( async () => {
    
    /****************当前组件进行共享的数据***************** */
    // 向外界抛出的数据
    window.index = {
        yongHuPai: [],
        dizhuPai: []
    }
    // 专门修改向外界抛出的数据的方法
    function xiuPao(prop, data) {
        window.index[prop] = data;
    }
    

    /*********************获取faPai.js中的数据************** */
    // 获取，发牌是否结束标记的函数
    const faWan = window.faPai.getFaWan;
    // 获取，进行发牌的函数
    const fapai = window.faPai.fapai;
    // 当前用户为地主，更新手牌的方法
    const diZhuJiaPai = window.faPai.diZhuJiaPai;
    // 地主固定后，显示地主底牌的方法
    const diZhuChong = window.faPai.diZhuChong;
    // 当前用户不是地主，更新其它用户(地主)的背景牌的展示数量
    const qiTa = window.faPai.qiTa;
    // 清空保存选中牌的数据集合，并且还原牌状态的方法
    const qingKongXuanPai = window.faPai.qingKongXuanPai;
    // 获取牌信息集合的方法
    const getPai = window.faPai.getPai;



    /*********************获取chuPai.js中的数据************** */
    // 获取，发牌是否结束标记的函数
    const chuPai = window.chuPai.chuPai;
    // 更新其它玩家出牌后，当前玩家背景牌的减少的方法
    const beiJingPaiJian = window.chuPai.beiJingPaiJian;
    const createDiPaiDom = window.chuPai.createDiPaiDom;



    /****************当前组件中使用的私有属性************** */
    // 获取对应的dom
    const chu = document.querySelector(".chu");
    const bu_chu = document.querySelector(".bu_chu");
    const jiao = document.querySelector(".jiao");
    const bujiao = document.querySelector(".bujiao");
    const qiang = document.querySelector(".qiang");
    const buqiang = document.querySelector(".buqiang");
    const chaoji = document.querySelector(".chaoji");
    const bujia = document.querySelector(".bujia");
    const beijingpai = document.querySelector(".beijingpai");
    const wan01TiShi = document.querySelector(".wan01TiShi");
    const wan02TiShi = document.querySelector(".wan02TiShi");
    const dangQianTiShi = document.querySelector(".dangQianTiShi");
    const tiShiKuang = document.querySelector(".tiShiKuang");
    const jiXunYouXi = document.querySelector(".jiXunYouXi");
    const shuYingZhanShi = document.querySelector(".text");
    const meng = document.querySelector(".meng");


    // 保存是否可以开始游戏
    let bool = false;
    // 保存用户信息对象
    let yongHu = null;
    // 可以进行游戏操作
    let chuBool = false;
    // 保存当前用户的名称
    let yongName = null;
    // 保存当前用户在桌中的索引
    let yongIndex = null;
    // 构建向服务器发送的信息
    let fuData = null;
    // 保存地主底牌
    let diZhuPai = [];
    // 标识，当前用户和地主底牌是否已经更新完成
    let diBool = true;
    // 出牌玩家的出牌事件的倒计时
    let daoJiShi = 60;
    // 保存当前可以出牌玩家的名称
    let chuPaiName = null;
    // 保存上家所出的牌，进行出牌规则的验证
    let diPai = [];
    // 保存全局定时器
    let val = null;



    /******************项目的两大主体函数*****************/
    // 开始函数
    function main() {
        // 先进行分桌，发送分桌请求，得到分桌数据
        faSongQingQiu("/puk")
        // 只有分桌成功后，才可以进行下列操作
        .then( (res) => {
            // 处理分桌数据，主要保存一些用户的信息
            chuLiFenZhuoData(res);
            // 启动定时器，定时向服务器中拿数据
            qiDongVal();
        } )
    }
    /**
     * 启动定时器，定时向服务器中拿数据
     * 定时器的作用: 
     * 当前用户要实时向服务器中取数据
     * 来判断该用户是否可以进行叫地主，抢地主，以及出牌操作
     */
    function qiDongVal() {
        val = setInterval( async () => {
            /******第一环节，验证满员环节*****************/
            if(!bool) {
                // 进行游戏开局的初始化
                initData();
                
                // 发送验证满员的请求，得到服务器返回的数据
                faSongQingQiu(`/manYuan?${fuData}`)
                // 拿到数据后，验证当前桌，是否已经满员，满员后开始游戏
                .then( (res) => {
                    // 处理满员请求返回的数据，进行拿牌处理
                    chuLiManYuanData(res);
                } )
            }
            // 只有发牌动画完成后，才可以进行后续操作
            // faWan()的作用为获取发牌标记，发完牌后该标记会变为true
            else if( faWan() ) {
                /***********第二环节: 地主确定环节*************/
                if(!chuBool) {
                    // 发送请求，获取对应的数据
                    faSongQingQiu(`/jiaoDiZhu?${fuData}`)
                    // 服务器会进行当前用户是进行叫地主处理
                    // 抢地主、还是超级加倍的处理、还是重开的处理的判断
                    // 然后返回对应的数据，只需要根据对应的数据实现对应的功能即可
                    // 处理数据
                    .then( (res) => {
                        diZhuGuDing(res);
                    } )
                }
                /*********第三环节: 出牌环节****************/
                else if(chuBool) {
                    chuPaiHuanJie();
                }
            }
        }, 1000)
    }

    


    /*********************分桌环节，一切的起点*****************/
    /**
     * 处理分桌请求，服务器返回的数据
     * @param {*} data 服务器返回的数据
     */
    function chuLiFenZhuoData(data) {
        // 保存当前用户的名称
        yongName = data.name;
        yongIndex = data.index;
        // 构建向服务器发送的信息
        fuData = createFuWuData(data);
    }
    /**
     * 构建服务器发送数据，方便游戏中，服务器对当前用户的定位，便于处理
     * @param {*} data 分桌请求，得到的数据对象
     */
    function createFuWuData(data) {
        const obj = {
            zhuo: data.zhuoName,
            index: data.index,
            jvIndex: data.jvIndex,
            wanJiaName: data.name
        };
        const dataArr = [];
        for(let prop in obj) {
            dataArr.push(`${prop}=${obj[prop]}`);
        }

        return dataArr.join("&");
    }




    /*******************第一个环节，在定时器中发送请求***************/
    /******验证满员以及拿牌环节，满员后立即拿牌，所以放在了一块******/
    /**
     * 处理满员请求，返回的数据，如果满足条件，进行拿牌处理
     * @param {*} data 服务器返回的数据
     */
    function chuLiManYuanData(data) {
        // 表示当前桌已经满员
        if(data.type === "yes") {
            // 发送拿牌请求，获取当前玩家对应的牌，以及地主底牌
            faSongQingQiu(`/naPai?${fuData}`)
            // 拿到数据后，进行数据处理，并发牌处理
            .then( (res) => {
                yongHuPaiChuLi(res);
            } )
        }
    }
    /**
     * 处理拿牌请求，得到的数据
     * @param {*} data 服务器返回的数据
     */
    function yongHuPaiChuLi(data) {
        // 保存，地主对应的三张牌的数据信息
        diZhuPai = data.diZhuPai;
        // 拿到牌后，进行发牌过程的处理
        if(data.type === "ok") fapai(data.data); 
        
        // 把叫地主环节的标志置为true，表示开启叫地主环节
        bool = true;
    }
    /**
     * 游戏开局前的初始化操作
     */
    function initData() {
        // 清空牌局
        beijingpai.innerHTML = "";
     

        // 可以更新当前用户为地主时的手牌，上一把已经关闭了，此处就需要打开
        diBool = true;
       
        // dom进行复原
        domFuYuan();
    }




    /*******************第二个环节，在定时器中发送请求***************/
    /************叫地主环节，拿牌成功后开启该环节****************/
    /******共包括叫地主、抢地主、是否加倍的处理、是否重开的处理*********/
    /**
     * 处理地主确定阶段，即出牌前的阶段，得到的请求数据
     * @param {*} data 请求得到的数据
     */
    function diZhuGuDing(data) {
        // 该属性有值，说明当前桌有用户退出，需要进行重新开局
        if( data.chongKai ) {
            chongKaiHuanJie();
        }
        // 表示当前用户可以进行叫地主操作
        else if( data.jiao ) {
            jiaoDiZhuHuanJie();
        }
        //表示当前用户可以进行抢地主操作
        else if( data.qiang ) {
            qiangDiZhuHuanJie();
        }
        // 表示地主已经确定，当前用户可以进行超级加倍操作
        else if( data.jiabei ) {
            jiaBeiHuanJie(data);
        }
        // 表示当前用户啥都不能操作，则所有的按钮都不可以进行显示
        else {
            // 所有的按钮都进行隐藏
            jiaoNone();
            qiangNone();
            chaoJiNone();
        }

        // 表示所有的地主固定环节都已经固定完成，可以进行当前用户的出牌环节
        if( data.chuPai ) {
            // 开启当前用户的出牌环节
            chuBool = true;
        }
    }
    /**
     * 地主确定环节，中的重开处理
     */
    function chongKaiHuanJie() {
        // 直接调用重开函数，进行重开
        chongXinKaiJv();
    }
    /**
     * 地主确定环节，中的叫地主环节
     */
    function jiaoDiZhuHuanJie() {
        // 弹出叫地主按钮
        jiaoBlock();
        // 其它按钮隐藏
        qiangNone();
        chaoJiNone();
    }
    /**
     * 地主确定环节，中的抢地主环节
     */
    function qiangDiZhuHuanJie() {
        // 弹出抢地主按钮
        qiangBlock();
        // 其它按钮隐藏
        jiaoNone();
        chaoJiNone();
    }
    /**
     * 地主确定环节，中的加倍环节
     * @param {*} data 地主请求，服务器返回的数据，更新地主手牌的函数用的到
     */
    function jiaBeiHuanJie(data) {
        // 弹出超级加倍按钮
        chaoJiBlock();
        // 其它按钮隐藏
        jiaoNone();
        qiangNone();

        // 更新地主手牌
        gengXinDiZhuShouPai(data);
    }
    /**
     * 地主确定后，如果当前用户为地主，更新当前用户手牌的函数
     * 该函数，在进行加倍的环节中调用，此时的地主已经固定下来
     */
    function gengXinDiZhuShouPai(data) {
        // 表示手牌已经更新完成，无需再次更新，原因，定时器实时更新
        if( !diBool ) return;
        // 当前用户为地主，更新手牌，加入地主牌
        if( yongName === data.di_zhu ) {
            // 更新当前用户的手牌
            diZhuJiaPai(diZhuPai);
        }else {
            // 当前用户不是地主，更新地主的背景牌的展示数量，加3张
            qiTa(yongIndex, data.diZhuIndex);
        }
        // 地主牌进行更新
        diZhuChong(diZhuPai);
        diBool = false;
    }






    /*************第三环节: 出牌操作环节**********/
    /*****该环节: 得到上家所出的牌，当前用户的牌桌上要显示上家出的牌*******/
    /*****当前牌局其它用户背景牌数量的减少，在上家出牌的渲染函数中进行处理*****/
    /*****进行倒计时: 不能一直等待当前用户，倒计时结束后，直接判断当前用户不出****/
    /*****定时器环节中的最后一个环节，所以该环节中要扩展游戏结束环节的处理******/
    /**
     * 发送验证请求，拿到对应的数据进行处理
     */
    function chuPaiHuanJie() {
        // 发送请求，验证当前用户是否可以进行出牌
        faSongQingQiu(`/chupaiBool?${fuData}`)
        // 进行请求的数据处理，查看当前用户是否可以进行出牌
        .then( (res) => {
            // 先进行倒计时，60s后，直接判定不出
            tiShiChu(res);
            // 渲染上家用户所出的牌
            xianShi(res);

            yanZhengChuPai(res, daoJiShi);

            /*******新增第四环节: 验证游戏结束以及结束处理******/
            jieShuPanDuan(res);
        } )
    }
    /**
     * 出牌时间的倒计时函数
     * @param {*} data 验证出牌请求，服务器返回的数据
     */
    function tiShiChu(data) {
        // 游戏结束，不进行倒计时
        if(data.shuYingObj) return;

        // 出牌玩家发生了切换，倒计时进行复位，表示下一家正在出牌开始重新倒计时
        if(chuPaiName !== data.chuPaiName) {
            chuPaiName = data.chuPaiName;
            daoJiShi = 60;
        }
        // 倒计时为0后，可能另一个玩家的倒计时与之不匹配，网络延时，所以不进行后续处理
        if(daoJiShi === 0) {
            return;
        }

        // 进行倒计时
        daoJiShi --;

        // 倒计时样式的渲染
        daoJiShiXuanRan(data, daoJiShi);  
    }
    /**
     * 出牌倒计时的样式渲染
     * @param {*} data 出牌验证的请求，服务器返回的数据
     * @param {*} shiJian 对应的渲染时间
     */
    function daoJiShiXuanRan(data, shiJian) {
        // 获取当前可以出牌的玩家的索引
        const index = data.chuPaiIndex;
        // 构建辅助数组，数组根据索引，可以快速定位出对应玩家对应的倒计时dom
        const arr = _();

        // 对应玩家的倒计时dom，进行渲染
        arr[index].innerHTML = shiJian;
        arr[index].style.display = "block";

        // 其它玩家的进行隐藏
        for(let i = 0; i < arr.length; i ++) {
            if( arr[i] && i !== index ) arr[i].style.display = "none";
        }

        
        /**
         * 当前函数中的辅助函数，构建辅助数组
         */
        function _() {
            // 表示当前玩家在中间
            if( yongIndex === 1 ) {
                return [wan02TiShi, dangQianTiShi, wan01TiShi];
            }
            // 表示当前玩家在起点
            else if( yongIndex === 0 ) {
                return [dangQianTiShi, wan01TiShi, wan02TiShi];
            }
            // 表示当前玩家在终点
            else if( yongIndex === 2 ) {
                return [wan01TiShi, wan02TiShi, dangQianTiShi];
            }
        }
    }
    /**
     * 当前牌局，渲染上家用户所出的牌的函数
     * @param {*} data 验证出牌请求，服务器返回的数据，内有上家所出的牌的数据集合
     */
    function xianShi(data) {
        // 游戏结束，不在进行后续判断
        if(data.shuYingObj) return;

        // 只要底牌数组长度发生了变化，说明有玩家已经出了牌
        // 此时要重新渲染上家出的牌
        if(diPai.length < data.diPai.length) {
            // 取出上家出的牌的数据集合，即底牌的最后一组数据
            const arr = data.diPai[data.diPai.length - 1];
            // 创建对应的dom进行插入，该方法在faPai.js中进行定义
            createDiPaiDom(arr);
            // 保存上家出的牌的数据集合，用于当前用户出牌的判断
            diPai = data.diPai;

            // 不是当前用户出的牌
            // 当前用户对应的牌局中对应用户的背景牌数量就要进行相应的减少
            if(yongName !== arr.wanJiaName) {
                beiJingPaiJian(yongIndex, arr);
            }
        }
    }
    /**
     * 出牌验证函数，当满足条件后，出牌按钮出现
     * @param {*} data 出牌验证的请求，服务器返回的数据
     */
    function yanZhengChuPai(data, shiJian) {
        // 游戏已经结束，不在进行后续处理
        if(data.shuYingObj) return;

        // 当前玩家名，与可以出牌的玩家名相同，表示当前玩家可以进行出牌
        if(yongName === data.chuPaiName) {
            // 出牌按钮显示
            chuBlock();
            // 倒计时结束，直接判断为不出
            if(shiJian <= 0) {
                // 发送当前用户不出的请求
                faSongQingQiu(`/buChuPai?${fuData}`);
                // 时间重置在，倒计时函数中进行重置
            }
        }
        // 不可以进行出牌
        else {
            // 出牌按钮隐藏
            chuNone();
        }
    }
    






    /*****第四环节: 第三环节中增加的环节，进行游戏结束的判断以及处理环节*****/
    /**
     * 判断当前游戏是否已经结束的函数
     * @param {*} data 验证当前用户是否可以出牌的请求，返回的数据
     * 验证当前用户是否可以出牌的请求中，就已经进行了结束的判断，然后返回对应的数据
     */
    function jieShuPanDuan(data) {
        // 保存服务器返回的，结束信息对象，内有是地主胜还是平民胜，亦或平局，以及当前局的倍数
        const shuYingObj = data.shuYingObj;

        // 只要该数据有值，表示游戏已经结束
        if(shuYingObj) {
            // 游戏结束，所有的dom，进行复原，该隐藏的进行隐藏
            domFuYuan();
            // 游戏结束，关闭定时器
            clearInterval(val);

            // 渲染对应的结束信息
            jieShuXuanRan(shuYingObj);
            console.log(shuYingObj);
            // var a =  {
            //     beiShu: 1,
            //     shengLiDuiXiang: "地主胜",
            //     type: "失败"
            // }
        }
    }
    /**
     * 渲染结束信息
     * @param {*} data 服务器返回的输赢信息对象
     */
    function jieShuXuanRan (data) {
        shuYingZhanShi.innerHTML = `
            <p>${data.shengLiDuiXiang}</p>
            <p>当前用户: ${data.type}</p>
            <p>倍数: ${data.beiShu}</p>
        `;
        tiShiKuang.style.display = "block";
        meng.style.display = "block";
    }
    jiXunYouXi.onclick = function() {
        // 数据的初始化
        initData();
        // 重新进行分桌
        chongXinKaiJv();
        // 开启定时器，重新开始游戏
        qiDongVal();
    }





    main();
    

    
    
    
    /**
     * 专门发送请求，得到服务器数据的函数
     * @param {*} url 请求的地址
     */
    async function faSongQingQiu(url) {
        const fecthData = await fetch(url);
        const data = await fecthData.json();
        return data;
    }
    /**
     * 重新开局函数
     * 比如游戏结束，需要再次开启
     * 又或者还没有到出牌阶段，当前牌局有人退出，则当前游戏不能再次运行，需要重新开局
     * 
     * 重新开局的处理: 删除当前用户的信息，重新进行分桌，当满员后，重新开始游戏
     * 由于服务器对开局桌，设置了标记，即重开后不会分到当前桌，会另找一个新桌
     * 这样就相当于重新开局，与之前的牌局没有任何关系
     * 之前的牌局，服务器也进行了处理，当前所有人员都走空后，会再次接收成员
     * 为了防止当前用户退出后，又重新插入到该桌，所以空桌接收成员，要在分桌完成后在进行处理
     * 空桌的处理，在服务器中进行处理
     */
    function chongXinKaiJv() {
        // 先删除用户信息，发生删除用户信息的请求
        faSongQingQiu(`/beforeunload?${fuData}`)
        // 删除完成后，进行重新分桌
        .then( () => {
            // 发送分桌的请求，进行重新分桌
            // 重新分桌后，在触发下面的then，所以要返回一个promise对象
            return faSongQingQiu("/puk")
        } ) 
        // 重新分桌后，需要进行更新当前用户的信息
        .then( (res) => {
            // 更新用户数据
            chuLiFenZhuoData(res);
            // 重开满员匹配环节
            bool = false;
            // 重开地主确定环节
            chuBool = false;
        } )
    }
    /**
     * dom复原函数
     */
    function domFuYuan() {
        // 数据初始化
        chuPaiName = null;
        // 该数据一定要进行重置，如果不重置，保存的还是上一局所出的牌的整体数组
        // 此时该数组的长度是非常长的，就进不去上方上家所出的牌的渲染
        // 也无法进行出牌
        diPai = []; 


        // 对应按钮的隐藏
        jiaoNone();
        qiangNone();
        chaoJiNone();
        chuNone();
        // 倒计时的隐藏
        daoJIshi();
        // 所有扑克的清空展示
        beijingpai.innerHTML = "";
        shuYingZhanShi.innerHTML = "";
        tiShiKuang.style.display = "none";
        meng.style.display = "none";
    }
    



    // var a = [
    //      {huaSe: "红桃", color: "红", index: 3, paiMian: "红桃A", huaSeIndex: 2}
    //     ,{huaSe: "梅花", color: "黑", index: 3, paiMian: "梅花2", huaSeIndex: 3}
    //     ,{huaSe: "黑桃", color: "黑", index: 3, paiMian: "黑桃3", huaSeIndex: 1}
    //     ,{huaSe: "方片", color: "红", index: 3, paiMian: "方片3", huaSeIndex: 4}
    //     ,{huaSe: "方片", color: "红", index: 4, paiMian: "方片5", huaSeIndex: 4}
    //     ,{huaSe: "黑桃", color: "黑", index: 4, paiMian: "黑桃5", huaSeIndex: 1}
    //     ,{huaSe: "梅花", color: "黑", index: 4, paiMian: "梅花5", huaSeIndex: 3}
    //     ,{huaSe: "红桃", color: "红", index: 4, paiMian: "红桃6", huaSeIndex: 2}
    //     ,{huaSe: "黑桃", color: "黑", index: 5, paiMian: "黑桃6", huaSeIndex: 1}
    //     ,{huaSe: "梅花", color: "黑", index: 5, paiMian: "梅花6", huaSeIndex: 3}
    //     , {huaSe: "梅花", color: "黑", index: 5, paiMian: "梅花9", huaSeIndex: 3}
    //     , {huaSe: "方片", color: "红", index: 5, paiMian: "方片9", huaSeIndex: 4}
    //     , {huaSe: "黑桃", color: "黑", index: 6, paiMian: "黑桃10", huaSeIndex: 1}
    //     , {huaSe: "红桃", color: "红", index: 6, paiMian: "红桃10", huaSeIndex: 2}
    //     , {huaSe: "红桃", color: "红", index: 6, paiMian: "红桃Q", huaSeIndex: 2}
    //     , {huaSe: "红桃", color: "红", index: 6, paiMian: "红桃K", huaSeIndex: 2}
    //     , {huaSe: "梅花", color: "黑", index: 13, paiMian: "梅花K", huaSeIndex: 3}
    // ]

    // diPai = {
    //     wanJiaName: "abc",
    //     pai: [
    //         {huaSe: "红桃", color: "红", index: 13, paiMian: "红桃Q", huaSeIndex: 2}
    //       , {huaSe: "红桃", color: "红", index: 13, paiMian: "红桃K", huaSeIndex: 2}
    //       , {huaSe: "梅花", color: "黑", index: 13, paiMian: "梅花K", huaSeIndex: 3}
    //     ]
    // }

    // // // 模拟发牌
    // fapai(a);
    // createDiPaiDom(diPai);
    




    // 页面关闭时，向服务器发送请求，销毁该用户信息，并且判定当前用户为输
    window.onbeforeunload = function () {
        faSongQingQiu(`/beforeunload?${fuData}`)
    }


    /********************按钮的显示与隐藏**********************/
    // 倒计时按钮的隐藏
    function daoJIshi() {
        wan01TiShi.style.display = "none";
        wan02TiShi.style.display = "none";
        dangQianTiShi.style.display = "none";
    }
    // 出牌按钮的显示
    function chuBlock() {
        chu.style.display = "block";
        bu_chu.style.display = "block";
    }
    // 出牌按钮的隐藏
    function chuNone() {
        chu.style.display = "none";
        bu_chu.style.display = "none";
    }
    // 叫地主按钮显示
    function jiaoBlock() {
        jiao.style.display = "block";
        bujiao.style.display = "block";
    }
    // 叫地主按钮隐藏
    function jiaoNone() {
        jiao.style.display = "none";
        bujiao.style.display = "none";
    }
    // 抢地主按钮显示
    function qiangBlock() {
        qiang.style.display = "block";
        buqiang.style.display = "block";
    }
    // 抢地主按钮隐藏
    function qiangNone() {
        qiang.style.display = "none";
        buqiang.style.display = "none";
    }
    // 超级加倍按钮显示
    function chaoJiBlock() {
        chaoji.style.display = "block";
        bujia.style.display = "block";
    }
    // 超级加倍按钮隐藏
    function chaoJiNone() {
        chaoji.style.display = "none";
        bujia.style.display = "none";
    }




    /*******************按钮的事件绑定********************/
    /**
     * 绑定出牌事件，进行出牌
     */
    chu.onclick = function () {
        // 得到当前用户即将要出的牌，以及类型，得到的是一个对象
        // 如果啥都没得到，说明无法进行出牌
        const data = chuPai( yongName, diPai[diPai.length - 1] );
        if(data) {
            const obj = {
                // 取出出牌对象中，所出的牌的数据集合，发送给服务器，进行保存
                data: data.data
            };
            console.log(data);
            // 向服务器发送数据，把当前玩家出的牌信息，发送到服务器中，进行保存
            faSongQingQiu(`/chuPai?${fuData}&pai=${ JSON.stringify(obj) }`);
            // 查看当前出的牌是否为炸弹，如果是，倍数进行翻翻
            if(data.type === "炸弹" || data.type === "王炸") {
                // 发送炸弹加倍的请求，对应牌局中的倍数进行翻一翻
                faSongQingQiu(`/zhaDanJiaBei?${fuData}`);
            }
            // 每一次出牌后，都要判断当前游戏是否结束，即当前玩家的手牌是否全部出光
            jieShu( getPai().dangQian );

            // 出牌按钮点击成功后，即成功出牌，立刻进行按钮的隐藏
            chuNone();
        }
    }
    /**
     * 判断当前用户的牌是否出完，即游戏结束
     * @param {*} data 当前用户的手牌数据集合
     */
    function jieShu(data) {
        // 第一张没有牌了，表示游戏已经结束
        // 向服务器发送请求，告知服务器，当前用户的游戏已经结束
        if(!data[0]) {
            faSongQingQiu(`/shengli?${fuData}`);
        }
    }
    /**
     * 绑定不出牌事件，跳过本次出牌，下家出牌
     */
    bu_chu.onclick = function () {
        faSongQingQiu(`/buChuPai?${fuData}`)
        .then( (res) => {
            // 清空保存选中牌的数据集合，并还原选中牌的状态
            qingKongXuanPai();
            // 相应的按钮立刻进行隐藏
            chuNone();
        } )
    }
    jiao.onclick = function () {
        faSongQingQiu(`/jiao?${fuData}`)
        .then( (res) => {
            jiaoNone();
        } );
    }
    bujiao.onclick = async function () {
        faSongQingQiu(`/bujiao?${fuData}`)
        .then( (res) => {
            jiaoNone();
        } );
    } 
    qiang.onclick = async function () {
        faSongQingQiu(`/qiang?${fuData}`)
        .then( (res) => {
            qiangNone();
        } );
    }
    buqiang.onclick = async function () {
        faSongQingQiu(`/buqiang?${fuData}`)
        .then( (res) => {
            qiangNone();
        } );
    }
    chaoji.onclick = async function () {
        faSongQingQiu(`/chaoji?${fuData}`)
        .then( (res) => {
            chaoJiNone();
        } );
    } 
    bujia.onclick = async function () {
        faSongQingQiu(`/bujia?${fuData}`)
        .then( (res) => {
            chaoJiNone();
        } );
    }
} )