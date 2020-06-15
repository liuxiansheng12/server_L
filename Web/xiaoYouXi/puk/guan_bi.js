const url = require("url");
const zhuo = require("./fen_zhuo.js").getZhuo();
const jv = require("./pai_jv").get_pai_jv();


const path = new Map();


// 主函数
function beforeunload(request, response, pathName) {
    const data = url.parse( request.url, true ).query;
    
    // 删除当前桌的用户
    remove(data.jvIndex, data.index, data.wanJiaName);
    

    response.end(JSON.stringify({
        type: "ok"
    }));
}


// 进行删除
function remove(zhuoHao, index, wanJiaName) {
    // 获取桌对象
    const zhuoObj = zhuo[zhuoHao];
    // 删除当前玩家
    zhuoObj.data[index] = null;
    // 并且在牌局中保存当前用户已输，前提为当前牌局已经存在
    // 主要为其它用户服务，跳过本玩家
    if( jv[zhuoHao] ) jv[zhuoHao].jv.shu.push(wanJiaName);
}


path.set("beforeunload", beforeunload);

module.exports = {
    path
}