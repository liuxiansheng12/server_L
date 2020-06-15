const url = require("url");
const pai_jv = require("./pai_jv.js").get_pai_jv();

const path = new Map();



// 主函数
function na_pai(request, response, pathName) {
    const data = url.parse( request.url, true ).query;
    // 获取桌号
    const zhuoHao = data.jvIndex;


    // 拿对应的牌
    const pai = {
        type: "ok",
        data: naPai(zhuoHao, data),
        diZhuPai: pai_jv[zhuoHao].pai.diZhu
    };
    

    response.end( JSON.stringify(pai) );
}


function naPai(zhuoHao, data) {
    // 获取牌对象
    const zhuoObj = pai_jv[zhuoHao].pai;

    // 玩家那完牌后，进行标识，用于后续工作
    // 重开，就用到了该属性
    const jv = pai_jv[zhuoHao].jv;
    jv.naPaiWanJia.push(data.wanJiaName);

    // 根据玩家名取牌
    return zhuoObj[data.wanJiaName];
}


path.set("naPai", na_pai);

module.exports = {
    path
}