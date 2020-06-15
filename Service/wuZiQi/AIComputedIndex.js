const paiJvAggre = require("./createQiPa").getPaiJv();

function AI(yongData) {
    // 取出对应的牌局
    const paiJv = paiJvAggre[ yongData.qiZhuoIndex ];
    // 智能棋子的颜色
    const color = yongData.qiZiColor == "黑" ? "白" : "黑";
    // 创建权重集合
    const quanZhong = chuShiQuanZhong(yongData);

    // 智能计算权重
    AIQuan(quanZhong, paiJv.qiData, color, yongData);
    // 取出权重最大的位置
    const data = maxQuanZhongIndex(quanZhong);
    
    return data
}


// 构建初始权重
function chuShiQuanZhong(yongData) {
    const x = yongData.width;
    const y = yongData.height;

    // 保存创建的权重集合
    const quanZhong = [];
    for(let i = 0; i < y; i ++) {
        quanZhong[i] = new Array(x);
        for(let j = 0; j < x; j ++) {
            quanZhong[i][j] = 0;
        }
    }
    return quanZhong
}
// 得到最大权重的位置
function maxQuanZhongIndex(quanZhong) {
    // 得到值最大的权重的位置
    let zhi = 0;
    let x = 0;
    let y = 0;
    for(let i = 0; i < quanZhong.length; i ++) {
        for(let j = 0; j < quanZhong[i].length; j ++) {
            if(quanZhong[i][j] > zhi) {
                zhi = quanZhong[i][j];
                x = j;
                y = i;
            }
        }
    }
    return {x, y}
}


// 智能计算权重
function AIQuan(quanZhong, qiData, color, yongData) {
    for(let i = 0; i < qiData.length; i ++) {
        for(let j = 0; j < qiData[i].length; j ++) {
            // 计算每个位置的权重
            quanZhong[i][j] = quan({x: j, y: i}, qiData[i][j], qiData, color, yongData);
        }
    }
}
// 计算每个棋子的权重
function quan(weiZhi, qiZhi, qiData, color, yongData) {
    // 当前位置有棋子，不参与权重计算，权重为-1
    if(qiZhi) {
        return -1;
    }

    // 计算各个方向的权重，把权重和加起来作为最终的权重
    //     相加的原因，横向有机会，纵向也有机会，则机会更大，所以权重要相加
    const heng = hengXiangQuanZhong(weiZhi, qiData, color, yongData);
    const zong = zongXiangQuanZhong(weiZhi, qiData, color, yongData);
    const you = youXiaQuanZhong(weiZhi, qiData, color, yongData);
    const zuo = zuoXiyouXiaQuanZhongZhong(weiZhi, qiData, color, yongData);
    return heng + zong + you + zuo;
}


// 计算横向的权重
function hengXiangQuanZhong(qiZhi, qiData, color, yongData) {
    const x = qiZhi.x;
    const y = qiZhi.y;

    let quan = 0;
    for(let i = 0; i < 5; i ++) {
        const bai = hengXiangGeShu(x - i, y, qiData, "白");
        quan += beiShu(bai, color, "白");

        const hei = hengXiangGeShu(x - i, y, qiData, "黑");
        quan += beiShu(hei, color, "黑");

    }
    
    return quan;
}
// 判断横向方向，共有几个颜色相同的棋子，查询五个
function hengXiangGeShu(x, y, qiData, color) {
    let quan = 0;
    const c = color == "白" ? "黑" : "白";
    for(let i = 0; i < 5; i ++) {
        if( qiData[y] && qiData[y][x + i] && qiData[y][x + i].qiZiColor === color ) {
            quan += 1;
        }
        else if( qiData[y] && qiData[y][x + i] && qiData[y][x + i].qiZiColor === c ) {
            return 0;
        }
    }
    return quan;
}


// 纵向方向的权重
function zongXiangQuanZhong(qiZhi, qiData, color, yongData) {
    const x = qiZhi.x;
    const y = qiZhi.y;

    let quan = 0;
    for(let i = 0; i < 5; i ++) {
        const bai = zongXiangGeShu(x, y - i, qiData, "白");
        quan += beiShu(bai, color, "白");

        const hei = zongXiangGeShu(x, y - i, qiData, "黑");
        quan += beiShu(hei, color, "黑");
    }
    
    return quan;
}
// 判断纵向方向，共有几个颜色相同的棋子，查询五个
function zongXiangGeShu(x, y, qiData, color) {
    let quan = 0;
    const c = color == "白" ? "黑" : "白";
    for(let i = 0; i < 5; i ++) {
        if( qiData[y + i] && qiData[y + i][x] && qiData[y + i][x].qiZiColor === color ) {
            quan += 1;
        }
        else if( qiData[y + i] && qiData[y + i][x] && qiData[y + i][x].qiZiColor === c ) {
            return 0;
        }
    }
    return quan;
}


// 右下方权重
function youXiaQuanZhong(qiZhi, qiData, color, yongData) {
    const x = qiZhi.x;
    const y = qiZhi.y;

    let quan = 0;
    for(let i = 0; i < 5; i ++) {
        const bai = youXiaGeShu(x - i, y - i, qiData, "白");
        quan += beiShu(bai, color, "白");

        const hei = youXiaGeShu(x - i, y - i, qiData, "黑");
        quan += beiShu(hei, color, "黑");
    }
    
    return quan;
}
// 判断右下方，共有几个颜色相同的棋子，查询五个
function youXiaGeShu(x, y, qiData, color) {
    let quan = 0;
    const c = color == "白" ? "黑" : "白";
    for(let i = 0; i < 5; i ++) {
        if( qiData[y + i] && qiData[y + i][x + i] && qiData[y + i][x + i].qiZiColor === color ) {
            quan += 1;
        }
        else if( qiData[y + i] && qiData[y + i][x + i] && qiData[y + i][x + i].qiZiColor === c ) {
            return 0;
        }
    }
    return quan;
}


// 左下方的权重
function zuoXiyouXiaQuanZhongZhong(qiZhi, qiData, color, yongData) {
    const x = qiZhi.x;
    const y = qiZhi.y;

    let quan = 0;
    for(let i = 0; i < 5; i ++) {
        const bai = zuoXiaGeShu(x + i, y - i, qiData, "白");
        quan += beiShu(bai, color, "白");
        
        const hei = zuoXiaGeShu(x + i, y - i, qiData, "黑");
        quan += beiShu(hei, color, "黑");
    }
    
    return quan;
}
// 判断左下方，共有几个颜色相同的棋子，查询五个
function zuoXiaGeShu(x, y, qiData, color) {
    let quan = 0;
    const c = color == "白" ? "黑" : "白";
    for(let i = 0; i < 5; i ++) {
        if( qiData[y + i] && qiData[y + i][x - i] && qiData[y + i][x - i].qiZiColor === color ) {
            quan += 1;
        }
        else if( qiData[y + i] && qiData[y + i][x - i] && qiData[y + i][x - i].qiZiColor === c ) {
            return 0;
        }
    }
    return quan;
}


// 进行倍数的处理，根据该位置有几个相同的棋子，进行不同权重的处理
// 颜色相同的越多，倍数越大，如果是三个一行，或者四个一行，智能落子优先，即权重相对较高
//     比如: 智能棋子的颜色为黑色，三个白的三个黑的，黑色的权重比白色的高
// 四个的权重更高
function beiShu(xiang, color, c) {
    let quan = 0;
    if( xiang === 3 ) {
        quan = 500;
        if(color === c) {
            quan += 500;
        }
    }
    else if(xiang === 4) {
        quan = 10000;
        if(color === c) {
            quan += 10000;
        }
    }
    else {
        quan = xiang * 2;
    }
    return quan;
}


module.exports = AI;