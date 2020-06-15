/**
 * 区分当前用户的状态
 *     1) 如果是智能落子，启动智能落子
 *     2) 如果是双人的话，不启动智能落子
 *     3) 如果是单机的话，不启动智能落子
 */

const url = require("url");
// 获取到牌局数据集合
const paiJvAggre = require("./createQiPa").getPaiJv();
// 智能计算AI的落子位置
const AIComputedIndex = require("./AIComputedIndex");

function luoZi (request, response, callBack) {
    // 解析数据
    const pathData = url.parse( request.url, true ).query;
    // 取出用户信息
    const yongData = JSON.parse( pathData.yongData );
    // 取出落子的棋子信息
    const qiZiData = JSON.parse( pathData.qiZiData );
    // 取出对应的牌局
    const paiJv = paiJvAggre[ yongData.qiZhuoIndex ];
    

    // 根据棋子信息更新对应牌局的信息
    gengPai(paiJv, qiZiData);


    // 当前落子的用户是智能，则AI自动落一子
    if( yongData.type === "智能" ) {
        AI(paiJv, yongData);
    }

    callBack( {type: "ok"} )
}

// 更新对应的牌局信息
function gengPai(paiJv, qiZiData) {
    // 往牌局的对应位置，插入棋子信息
    chaRu( paiJv.qiData, qiZiData );
    // 更新落子的颜色
    paiJv.LuoZiWanJiaColor = gengQiColor(qiZiData.qiZiColor);

    // 往牌局中保存上家所出棋子的信息
    paiJv.shangJiaLuoZiAgg.push( qiZiData );
}

// 往牌局的对应位置，插入棋子信息
function chaRu( aggre, qiZiData ) {
    const x = qiZiData.x;
    const y = qiZiData.y;

    if( !aggre[y][x] ) {
        aggre[y][x] = qiZiData;
    }
}

// 得到下家可以落子的颜色
function gengQiColor(color) {
    if(color === "白") {
        return "黑"
    }else {
        return "白"
    }
}

function AI(paiJv, yongData) {
    // 智能计算落子位置
    const wei = AIComputedIndex(yongData);
    // 构建出智能落子的棋子信息对象
    const aggre = createAIAggre(paiJv, wei);
    // 根据棋子对象更新对应牌局的信息
    gengPai(paiJv, aggre);
}
// 构建出智能落子的棋子信息对象
function createAIAggre(paiJv, aggre) {
    // 得到智能棋子的颜色
    const color = paiJv.LuoZiWanJiaColor;
    return {
        x: aggre.x,
        y: aggre.y,
        qiZiColor: color
    }
}


module.exports.luoZi = luoZi;