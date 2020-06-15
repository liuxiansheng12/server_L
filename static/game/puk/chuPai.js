

( ( poot ) => { poot() } )( () => {

    
    /****************获取faPai.js中的数据*****************/
    // 获取选中的出牌的数据集合的方法
    const getChuPai = window.faPai.getChuPai;
    // 修改选中的出牌的数据集合的方法
    const setChuPai = window.faPai.setChuPai;
    // 获取牌信息集合的方法
    const getPai = window.faPai.getPai;
    // 重新渲染对应玩家牌的展示样式的方法
    const chongXuan = window.faPai.chongXuan;
    // 创建dom的构造函数
    const Puk = window.faPai.Puk;


    /*************************引入chuPaiYanZheng.js中的数据*************************/
    const chuPaiPanDuan = window.chuPaiYanZheng.chuPaiPanDuan;



    /*****************自定义属性*******************/
    const zhongJian = document.querySelector(".zhongJian");
    const app = document.querySelector("#app");
    const appWidth = parseInt(getComputedStyle(app).width);
    const appHeight = parseInt(getComputedStyle(app).height);
    const zhongJianWidth = parseInt(getComputedStyle(zhongJian).width);
    const zhongJianHeight = parseInt(getComputedStyle(zhongJian).height);
    const zhongJianHeightQi = (appHeight - zhongJianHeight) / 2;
    const zhongJianWidthQi = (appWidth - zhongJianWidth) / 2;


    // 保存当前用户的底牌
    let diPai = [];



    // 当前用户进行出牌判断函数
    function chuPai(yongName, data) {
        // 获取选中的牌
        const chuPai = getChuPai();
        // 构建选中牌的简易数据对象
        const jianYi = createArr(chuPai);

        // 得到当前用户，即将要出的牌的类型，是顺子还是炸弹，啥都没有表示无法出牌
        const leiXin = chuPaiPanDuan(yongName, jianYi, data, chuPai);
        
        // 判断当前选中的牌是否可出
        if( leiXin ) {
            // 出牌操作，形成出牌动画
            chuPaiDongHua(chuPai, true);
            // 去除当前用户手中的底牌
            quDiPai(chuPai);
            // 清空当前用户选中的出牌对象
            setChuPai([]);

            return {
                type: leiXin,
                data: jianYi
            };
        }
    }
    // 进行出牌动画，bool是否为开启动画
    function chuPaiDongHua(data, bool) {
        if(!data || data.length === 0) return;

        // 遍历所有的扑克
        for(let i = 0; i < data.length; i ++) {
            // 关闭动画
            data[i].dom.style.transition = "all 0s linear";
            // 计算每个扑克的位置
            let {left, top} = weiZhi(i, data.length, data[i].width);
            // 出牌动画，不满足是其它不出牌的用户渲染底牌
            if(bool) top += 100;

            data[i].weiZhi(left, top);
            data[i].dom.style.zIndex = i * 10;
            data[i].dom.onclick = null;
            
            // 进行动画
            if(bool) {
                setTimeout( () => {
                    data[i].dom.style.transition = "all 0.2s linear";
                    data[i].weiZhi(left, top - 100);
                }, 50 )
            }
        }
    }
    // 确定位置
    function weiZhi(index, length, width) {
        let jian = 0;
        let left = null;
        // 所有牌的长度，小于容器的宽度，不进行重叠
        if(width * length <= zhongJianWidth) {
            jian = (zhongJianWidth - width * length) / 2;
            left = zhongJianWidthQi + jian + width * index;
        }
        if(width * length > zhongJianWidth) {
            jian = (zhongJianWidth - width) / (length - 1);
            left = jian * index + zhongJianWidthQi;
        }
        const top = zhongJianHeightQi;
        
        return {
            top,
            left
        }
    }



    // 去除当前用户手中的底牌
    function quDiPai(chuPai) {
        // 底牌的清空，有新的底牌即将加入
        clearDiPai();

        const yongHuPai = getPai().dangQian;
        for(let i = 0; i < chuPai.length; i ++) {
            for(let j = 0; j < yongHuPai.length; j ++) {
                if(yongHuPai[j] === chuPai[i]) yongHuPai[j] = null;
            }
            // 把出的牌保存到底牌中，即更新底牌
            diPai.push(chuPai[i])
        }
        // 进行重新渲染
        chongXuan("dangQian");
    }
    // 底牌的清空，以及底牌dom的删除
    function clearDiPai() {
        for(let i = 0; i < diPai.length; i ++) {
            diPai[i].dom.remove();
        }
        // 清空集合
        diPai = [];
    }



    




    // 构建发送数组
    function createArr(data) {
        const arr = [];
        for(let i = 0; i < data.length; i ++) {
            arr.push(data[i].data);
        }
        return arr;
    }


    // 更新其它玩家出牌后，当前玩家背景牌的减少的方法
    function beiJingPaiJian(yongIndex, data) {
        // 刚开局的时候，还没有数据，自然与当前桌的名称不同，会调用该函数，所以要去掉该情况
        if(!data.pai && data.pai.length === 0) return;
        // 获取牌集合
        const puks = getPai();
        const paiArr = _(yongIndex, puks.wan01, puks.wan02);
        // 选出需要移除的玩家背景牌数组
        const arr = paiArr[data.index];

        // 移除背景牌
        for( let i = arr.length - 1; i >= 0; i --) {
            // 找到最后一张牌，进行移除
            if( arr[i] ) {
                for(let j = i; j > i - data.pai.length; j --) {
                    arr[j].dom.remove();
                    arr[j] = null;
                }
                return;
            }
        }

        
        // 生成辅助的数组
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


    // 创建底牌dom，进行插入
    function createDiPaiDom(data) {
        // 底牌的清空，有新的底牌即将加入
        clearDiPai();

        // 创建对应的dom
        diPai = createDom(data.pai);
        // 进行位置的确定，即渲染，不开启动画
        chuPaiDongHua(diPai);
    }
    // 创建dom数组
    function createDom(data) {
        const arr = [];
        for(let i = 0; i < data.length; i ++) {
            let dom = null;
            if(data[i].index == 14) {
                dom = new Puk(0, 0, `./img/${1}_${data[i].huaSeIndex}.jpg`);
            }
            else if(data[i].index == 15) {
                dom = new Puk(0, 0, `./img/${2}_${data[i].huaSeIndex}.jpg`);
            }
            else if(data[i].index == 16) {
                dom = new Puk(0, 0, `./img/${14}_${data[i].huaSeIndex}.jpg`);
            }
            else if(data[i].index == 17) {
                dom = new Puk(0, 0, `./img/${15}_${data[i].huaSeIndex}.jpg`);
            }
            else {
                dom = new Puk(0, 0, `./img/${data[i].index}_${data[i].huaSeIndex}.jpg`);
            }
            dom.createBeiDom();
            dom.data = data;
            arr.push(dom);
        }
        return arr;
    }
    


    
    /************向外界抛出的数据********/
    window.chuPai = {
        chuPai,
        beiJingPaiJian,
        createDiPaiDom
    }
} )
