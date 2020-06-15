/**
 * 开局函数
 *     验证对应玩家，所在的棋盘是否已经满员，满员后开盘
 *     不能所有玩家都进行开盘，只有一个玩家开盘即可，否则就会产生开盘重复
 *     满员后，给前端返回标识，前端开启获取落子的数据集合，判断当前用户是否可以落子
 */

const url = require("url");
const qiZhuo = require("./getFenZhuoData").getQiZhuo();
const kaiPan = require("./createQiPa");
const qiPan = require("./createQiPa").getPaiJv();

function kaiJv(request, response, callBack) {
    // 解析数据
    const pathData = url.parse( request.url, true ).query;
    // 取出用户信息
    const yongData = JSON.parse( pathData.yongData );

    // 取出对应的棋桌数据
    const qiZhuoData = qiZhuo[ yongData.qiZhuoIndex ].chengYuan;

    // 判断是否已经满员
    if( qiZhuoData[0] && qiZhuoData[1] ) {
        // 表示已经满员
        
        // 第一个玩家进行开盘
        if( yongData.index === 0 ) {
            kaiPan.createQiPan(yongData);
        }
        // 当前桌的游戏状态置为开始状态
        qiZhuo[ yongData.qiZhuoIndex ].type = true;

        // 当前桌是否已经开盘，如果开盘才可以继续进行游戏，否则就要等待第一个用户开盘
        if( qiPan[yongData.qiZhuoIndex] ) {
            callBack({type: "ok"});
        }
    }
    // 没有满员
    else {
        callBack({type: "no"});
    }
}

module.exports.kaiJv = kaiJv;