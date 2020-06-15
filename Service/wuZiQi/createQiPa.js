
// 保存棋牌的数据集合
const qiPanAggre = [];



function createQiPan(data) {
    const index = data.qiZhuoIndex;
    const d = createAggre(data.qiZhuoName, data.qiZhuoIndex, null, "黑", []);
    // 创建保存棋子的数据集合
    d.qiData = createQiZiAggre(data);
    qiPanAggre[index] = d;
}

// 创建棋桌的数据集合
function createAggre(qiZhuoName, qiZhuoIndex, qiData, LuoZiWanJiaColor, shangJiaLuoZiAgg) {
    return {
        qiZhuoName, qiZhuoIndex, qiData, LuoZiWanJiaColor, shangJiaLuoZiAgg
    }
}

// 创建棋子的数据集合
function createQiZiAggre(data) {
    const width = data.width;
    const height = data.height;
    
    const arr = new Array( height );
    for(let i = 0; i < arr.length; i ++) {
        arr[i] = new Array(width);
    }
    return arr;
}

module.exports.createQiPan = createQiPan;
module.exports.getPaiJv = function () {
    return qiPanAggre;
}


