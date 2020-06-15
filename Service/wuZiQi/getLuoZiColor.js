const url = require("url");
// 获取到牌局数据集合
const paiJvAggre = require("./createQiPa").getPaiJv();
// 获取验证是否已经结束的方法
const jieShu = require("./jieShu");

function getLuoZiColor (request, response, callBack) {
    // 解析数据
    const pathData = url.parse( request.url, true ).query;
    // 取出用户信息
    const yongData = JSON.parse( pathData.yongData );
    
    // 取出对应的牌局
    const paiJv = paiJvAggre[ yongData.qiZhuoIndex ];

    // 创建对应的数据
    const data = {
        type: "ok",
        color: paiJv.LuoZiWanJiaColor,
        yiLuoQiZi: paiJv.shangJiaLuoZiAgg,
        jieShu: null
    }

    // 验证当前游戏是否已经结束
    const jieShuData = jieShu(yongData, paiJv);
    // 表示已经结束，构建结束信息发送给前端
    if(jieShuData) {
        data.jieShu = jieShuData;
    }

    callBack(data);
}



module.exports.getLuoZiColor = getLuoZiColor;