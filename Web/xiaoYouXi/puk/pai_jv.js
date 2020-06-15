

// 保存牌局
const pai_jv_data = [];


function create_pai_jv(zhuoHao, zhuoName) {
    const pai_jv = {
        zhuoName: zhuoName,
        // 创建四个牌集合，分别代表三个玩家的牌以及地主牌
        pai: createPai(zhuoName),
        jv: {
            // 可以进行出牌的玩家
            chuPaiIndex: 0,
            // 第一个地主是否已经叫过，用于显示叫地主, false时，用于显示抢地主
            jiaoDiZhu: true,
            // 当前地主的位置，叫地主和抢地主，可以改变其位置
            diZhuIndex: parseInt(Math.random() * 3),
            di_zhu: [],
            ping_min: [],
            // 点击超级加倍或者不加倍的用户，进行保存
            jia_bei: [],

            // 保存那些已经拿完牌的玩家
            naPaiWanJia: [],
            // 当前牌局的倍数
            beiShu: 1,
            // 用户所出的牌
            chu_pai: [],
            shengLi: [],
            shu: []
        }
    }
    pai_jv_data[ zhuoHao ] = pai_jv;
}


// 构建整副牌集合
function createZhengPai() {
    let pukData = [];

    // 创建红桃
    pukData = [...huaData("红桃", "红", 2), ...huaData("方片", "红", 4), 
        ...huaData("黑桃", "黑", 1), ...huaData("梅花", "黑", 3)];

    pukData.push( new Puk("王", "黑", 1, 16, "小王") );
    pukData.push( new Puk("王", "红", 1, 17, "大王") );

    return pukData;
}
// 创建一个花色对象
function huaData(huaSe, color, huaSeIndex) {
    const data = [];

    data.push( new Puk(huaSe, color, huaSeIndex, 14, huaSe + "A") );
    data.push( new Puk(huaSe, color, huaSeIndex, 15, huaSe + "2") );
    for(let i = 2; i < 10; i ++) {
        data.push( new Puk(huaSe, color, huaSeIndex, i + 1, huaSe + (i + 1)) )
    }
    data.push( new Puk(huaSe, color, huaSeIndex, 11, huaSe + "J") );
    data.push( new Puk(huaSe, color, huaSeIndex, 12, huaSe + "Q") );
    data.push( new Puk(huaSe, color, huaSeIndex, 13, huaSe + "K") );
    return data;
}
// 生成一张牌的对象
function Puk(huaSe, color, huaSeIndex, index, paiMian) {
    this.huaSe = huaSe;
    this.color = color;
    this.index = index; 
    this.paiMian = paiMian;
    this.huaSeIndex = huaSeIndex;
}



function createPai(zhuoName) {
    // 创建整副牌
    const pai = createZhengPai();
    // 整副牌的乱序
    const arrSort = sortLuan(pai);

    const wan01 = sortPai( arrSort.splice(0, 17) );
    const wan02 = sortPai( arrSort.splice(0, 17) );
    const wan03 = sortPai( arrSort.splice(0, 17) );
    const dizhu = sortPai( arrSort.splice(0, 3) );


    return {
        [zhuoName + "1"]: wan01,
        [zhuoName + "2"]: wan02,
        [zhuoName + "3"]: wan03,
        diZhu: dizhu
    };
}

// 数组乱序
function sortLuan(arr) {
    const a = arr.sort( () => Math.random() - 0.5 );
    return a;
}
// 数组排序
function sortPai(arr) {
    const a = arr.sort( (k1, k2) => k1.index - k2.index );
    return a;
}


module.exports = {
    create_pai_jv,
    get_pai_jv() {
        return pai_jv_data;
    }
}
