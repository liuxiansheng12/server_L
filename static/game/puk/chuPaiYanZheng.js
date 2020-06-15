

( ( poot ) => { poot() } )( () => {

    // 出牌的判断函数
    function chuPaiPanDuan(yongName, xuan, di, domData) {
        const diPai = di && di.pai;
        const chuPaiName = di && di.wanJiaName;
        // 对两数组进行排序，便于后续的判断
        xuanPaiXu(xuan);
        domDataPaiXu(domData);


        // 判断是否符合出牌规则，并且得到所出牌的类型
        const jianBool = jianYi(xuan, domData);


        // 判断是否可以压住上家出的牌，上家是本家出的牌，可以直接出
        if( yongName !== chuPaiName && jianBool ) {
            // 地主第一次出牌，此时还没有底牌
            if(!diPai) {
                return jianBool;
            }else {
                // 是否可以压住上家出的牌
                if( ya(xuan, diPai, jianBool) ) {
                    return jianBool;
                }
            }
        }
        else if(jianBool) {
            return jianBool;
        }
    }


    // 判断是否符合简易的出牌规则
    function jianYi(xuan) {

        /** 
         * 飞机、连对、顺子、炸弹、三张、单张、四挂、王炸
         */
        // 王炸优先判断，必须是两张牌，是否满足王炸条件
        if( xuan.length === 2 && wangZha(xuan) ) return "王炸";
        // 炸弹其次，必须是四张牌，是否满足炸弹条件
        if( xuan.length === 4 && zhaDan(xuan) ) return "炸弹";
        // 单张，只有一张牌
        if(xuan.length === 1) return "单张";
        // 对子，只有两张牌，并且满足对子条件
        if(xuan.length === 2 && duiZi(xuan)) return "对子";
        // 顺子判断，长度最少为5，最大为12，并且满足顺子条件
        if(xuan.length >= 5 && xuan.length <= 12 && shunZi(xuan)) return "顺子";
        // 连对判断，长度最少为6，长度为偶数，并且满足连对条件
        if(xuan.length >= 6 && xuan.length % 2 === 0 && lianDui(xuan)) return "连对";
        // 三张判断，长度最少为3，最大为5，并且满足条件
        if(xuan.length >= 3 && xuan.length <= 5 && sanZhang(xuan)) return "三张";
        // 四挂判断，长度最少为5，最大为8，并且满足条件
        if(xuan.length >= 5 && xuan.length <= 8 && siGua(xuan)) return "四挂";
        // 飞机判断，长度最少为8，并且满足条件
        if(xuan.length >= 8 && siFei(xuan)) return "四飞";
        // 飞机判断，长度最少为6，并且满足条件
        if(xuan.length >= 6 && sanFei(xuan)) return "三飞";
    }


    
    // 王炸判断
    function wangZha(xuan) {
        if(xuan[0].index == 16 && xuan[1].index == 17) return true;
    }
    // 炸弹判断
    function zhaDan(xuan) {
        if( xuan[0].index === xuan[1].index && 
            xuan[1].index === xuan[2].index &&
            xuan[2].index === xuan[3].index ) return true;
    }
    // 对子判断
    function duiZi(xuan) {
        if(xuan[0].index === xuan[1].index) return true;
    }
    // 顺子判断
    function shunZi(xuan) {
        for(let i = 1; i < xuan.length; i ++) {
            // 二不能顺
            if(xuan[i].index == 15) return false;
            // 有一个没连起来，都不行
            else if(xuan[i].index - xuan[i - 1].index != 1) return false;
        }
        // 表明是顺子
        return true;
    }
    // 连对判断
    function lianDui(xuan) {
        for(let i = 1; i < xuan.length - 2; i += 2) {
            // 二不能顺
            if(xuan[i].index == 15) return false;
            // 两对间的连接处是否为递增
            else if(xuan[i + 1].index - xuan[i].index != 1) return false;
        }
        for(let i = 0; i < xuan.length; i += 2) {
            // 两个数间必须相同
            if(xuan[i].index !== xuan[i + 1].index) return false;
        }
        // 表明是连对
        return true;
    }
    // 三张判断
    function sanZhang(xuan) {
        // 前三张必须相同
        for(let i = 1; i < 3; i ++) {
            if(xuan[i].index !== xuan[i - 1].index) return false;
        }
        // 如果为5张，表示三带一对，所以后两张必须相同
        if(xuan.length === 5) {
            if(xuan[3].index !== xuan[4].index) return false;
        }
        // 表明是三张
        return true;
    }
    // 四挂判断
    function siGua(xuan) {
        // 前四张必须相同
        for(let i = 1; i < 4; i ++) {
            if(xuan[i].index !== xuan[i - 1].index) return false;
        }

        // 保存后面带了几种牌，最多为两种
        // 四挂至少带了一种牌，所以zhong的初始值为1
        let zhong = 1;
        // 保存相同的牌重复了几张，最多重复两张，即一对
        let zhang = 0;
        for(let i = 4; i < xuan.length - 1; i ++) {
            // 当前一张，与后面一张，不是一种，则zhong加1
            if( xuan[i].index !== xuan[i + 1].index ) {
                zhong ++;
                // 不同的张还没有开始，所以重置为0
                zhang = 0;
            }
            // 循环一次，加一张牌，最多两张
            zhang ++;
            if(zhang > 2) {
                zhong ++;
                // 说明相同的已经是三张了，此时就表示两种了
                // 三张表示两种，则第二种已经有一张牌了，所以重置为1
                zhang = 1;
            }
        }
        // 四挂，带了三种牌，不符合条件
        if(zhong > 2) return false;

        // 表明是四挂
        return true;
    }

    // 飞机判断之四飞判断
    function siFei(xuan) {
        // 四非，判断一下是否为四飞，即前四张相同
        let bool = true;
        // 前四张必须相同
        for(let i = 1; i < 4; i ++) {
            if(xuan[i].index !== xuan[i - 1].index) bool = false;
        }

        // 不是四飞
        if(!bool) return false;

        

        let zhang = 0;
        let whileBool = true;
        // 四飞查看，是几张四飞
        while(whileBool) {
            // 每四张循环一次
            for(let i = zhang * 4; i < (zhang + 1) * 4 - 1; i ++) {
                // 说明全部是四张相同的，判断完最后，下一轮全部为空，要关闭死循环
                if(!xuan[i] || !xuan[i + 1]) whileBool = false;
                // 终止死循环
                else if(xuan[i].index !== xuan[i + 1].index) whileBool = false;
            }
            // 四飞加1
            if(whileBool) zhang ++;
        }

        console.log(zhang);

        // 至少有两组四张牌相同
        if(zhang < 2) return false;


        // 判断四飞，的牌是否是递增的
        if(bool) {
            for(let i = 3; i < zhang * 4 - 4; i += 4) {
                if(xuan[i + 1].index - xuan[i].index !== 1) return false;
            }
        }


        // 每个四飞，可以带一个或者一对，如果长度超过了该范围，带了多余的牌，不属于四飞
        if( bool && zhang * 6 < xuan.length) return false;
         
        // 如果长度刚好与四飞长度相同，表示没有带东西，经过上方的判断，为四飞
        if( xuan.length === zhang * 4 ) return true;

        // 判断带的牌是否准确，获取一共带了几样牌
        let geShu = 1;
        // 
        let _i = 1;
        for( let i = zhang * 4 + 1; i < xuan.length; i ++) {
            _i ++;
            if( xuan[i].index !== xuan[i - 1].index ) {
                geShu ++;
                _i = 1;
            }
            // 最多只能带两个，当重复达到三个后，就表示两个四飞带的牌
            if(_i === 3) {
                geShu ++;
                _i = 1;
            }
        }

        console.log(zhang, geShu, "四飞");

        // 如果带的牌，小于等于四飞的个数，则为四飞，否则，不为四飞
        if(geShu <= zhang) return true;
        if(geShu > zhang) return false;

    }
    // 飞机判断之三飞判断
    function sanFei(xuan) {
        // 判断一下是否为三飞，即前三张相同
        let bool = true;
        // 前三张必须相同
        for(let i = 1; i < 3; i ++) {
            if(xuan[i].index !== xuan[i - 1].index) bool = false;
        }

        // 不是三飞
        if(!bool) return false;

        

        let zhang = 0;
        let whileBool = true;
        // 三飞查看，是几张三飞
        while(whileBool) {
            // 每三张循环一次
            for(let i = zhang * 3; i < (zhang + 1) * 3 - 1; i ++) {
                // 说明全部是三张相同的，判断完最后，下一轮全部为空，要关闭死循环
                if(!xuan[i] || !xuan[i + 1]) whileBool = false;
                // 终止死循环
                else if(xuan[i].index !== xuan[i + 1].index) whileBool = false;
            }
            // 三飞加1
            if(whileBool) zhang ++;
        }

        // 至少有两组三张牌相同
        if(zhang < 2) return false;


        // 判断三飞，的牌是否是递增的
        if(bool) {
            for(let i = 2; i < zhang * 3 - 3; i += 3) {
                if(xuan[i + 1].index - xuan[i].index !== 1) return false;
            }
        }


        // 每个三飞，可以带一个或者一对，如果长度超过了该范围，带了多余的牌，不属于三飞
        if( bool && zhang * 5 < xuan.length) return false;
         
        // 如果长度刚好与三飞长度相同，表示没有带东西，经过上方的判断，为三飞
        if( xuan.length === zhang * 3 ) return true;

        // 判断带的牌是否准确，获取一共带了几样牌
        let geShu = 1;
        let _i = 1;
        for( let i = zhang * 3 + 1; i < xuan.length; i ++) {
            _i ++;
            if( xuan[i].index !== xuan[i - 1].index ) {
                geShu ++;
                _i = 1;
            }
            // 最多只能带两个，当重复达到三个后，就表示两个三飞带的牌
            if(_i === 3) {
                geShu ++;
                _i = 1;
            }
        }

        console.log(zhang, geShu, "三飞");


        // 如果带的牌，小于等于三飞的个数，则为三飞，否则，不为三飞
        if(geShu <= zhang) return true;
        if(geShu > zhang) return false;
    }



    

    // 对所出的牌，进行排序，数量多的排在前面，值小的排在前面
    function xuanPaiXu(data) {
        // 先进行排序
        data.sort( (k1, k2) => k1.index - k2.index );
        // 建立数量对象，索引，数量
        const arr = [ [data[0]] ];
        for(let i = 1; i < data.length; i ++) {
            if(data[i].index === data[i - 1].index) {
                arr[arr.length - 1].push( data[i] );
            }else {
                arr.push( [ data[i] ] );
            }
        }

        arr.sort( (k1, k2) => k2.length - k1.length );
        
        let index = 0;
        let ge = 0;
        for(let i = 0; i < data.length; i ++) {
            if( !arr[ge][index] ) {
                ge ++;
                index = 0;
            }
            data[i] = arr[ge][index];
            index ++;
        }
    }
    // 对牌的样式数据集合，进行排序，利于渲染，数量多的排在前面，值小的排在前面
    function domDataPaiXu(domData) {
        // 进行简单的排序，把相同的排在一块，便于后面的循环拆分
        domData.sort( (k1, k2) => k1.data.index - k2.data.index );
        // 保存拆分出来的子数组，相同的放在一块
        // 由于循环是从第二个开始的，所以要手动保存第一个
        const arr = [ [domData[0]] ];
        // 进行拆分
        for( let i = 1; i < domData.length; i ++) {
            if( domData[i].data.index === domData[i - 1].data.index ) {
                // 相同保存在一块
                arr[ arr.length - 1 ].push(domData[i]);
            }else {
                // 不同，新建一个
                arr.push( [ domData[i] ] );
            }
        }

        // 对拆分出的按照长度进行排序，这样长的就会排在最前面
        arr.sort( (k1, k2) => k2.length - k1.length);

        // 把arr中的子数组展开，放到一个数组中，即排序好的数组
        let _arr = [];
        for(let i = 0; i < arr.length; i ++) {
            _arr.push( ...arr[i] );
        }
         
        // 修改原数组，使其变成排好的数组
        for(let i = 0; i < domData.length; i ++) {
            domData[i] = _arr[i];
        }
    }

  



    // 判断是否可以压住上家的牌
    function ya(xuan, diPai, bool) {
        // 王炸可以压住一切牌
        if(bool === "王炸") return true;
        // 长度不同，炸弹可以压住，说明上家出的不是炸弹
        else if(xuan.length !== diPai.length && bool === "炸弹") return true;
        // 不是炸弹，牌的数量不同，表示出的牌不同，当前选中的牌出不去
        else if(xuan.length !== diPai.length) return false;

        // 上家出的是王炸，也无法压上
        if(diPai.length === 2 && diPai[0].index === 16 && diPai[1].index === 17) return false;


        // 如果出的牌数量相同，表示有压上的可能，就需要进行处理
        // 得到底牌的类型
        const lei = jianYi(diPai);
        // 底牌的类型，与用户要出的牌不同，但是长度一样，当当前用户出的是炸弹是也可以压住
        if(bool === "炸弹" && lei !== "炸弹") return true;

        // 底牌的类型，是否与出牌的类型相同，不同的话无法出牌，也不是炸弹
        if(lei !== bool) return false;

        // 类型相同，就要判断是否可以压上
        // 类型相同，长度相同，只要第一张比上家出的牌大，就可以压上
        if(xuan[0].index > diPai[0].index) return true;

        // 第一张不比上家出的牌大，无法压上，表示无法出牌
        return false;
    }

    

        
       

    
    /************向外界抛出的数据********/
    window.chuPaiYanZheng = {
        chuPaiPanDuan
    }
} )