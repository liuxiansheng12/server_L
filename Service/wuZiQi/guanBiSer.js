const url = require("url");
const qiZhuo = require("./getFenZhuoData").getQiZhuo();

function guanBiSer(request, callBack) {
    const pathData = url.parse( request.url, true ).query;
    const yongData = JSON.parse( pathData.yongHuData );

    // 取出关闭用户对应的棋桌
    const qiZhuoAgg = qiZhuo[yongData.qiZhuoIndex];

    if(yongData.type === "单机" || yongData.type === "智能") {
        // 一次清除两个用户
        qiZhuoAgg.chengYuan = [null, null];
    }
    else if( yongData.type === "双人" ) {
        qiZhuoAgg.chengYuan[ yongData.index ] = null;
    }
}

module.exports.guanBiSer = guanBiSer;