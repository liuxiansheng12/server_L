const url = require("url");
const pai_jv = require("./pai_jv.js").get_pai_jv();

const path = new Map();


// 主函数
function chao_ji(request, response, pathName) {
    const data = url.parse( request.url, true ).query;
    // 获取桌号
    const zhuoHao = data.jvIndex;
    // 获取牌局
    const jv = pai_jv[zhuoHao].jv;
    
    // 当前倍数翻倍
    jv.beiShu *= 2;
    
    // 保存，当前用户已经进行过加倍处理
    jv.jia_bei.push( data.wanJiaName );


    response.end(JSON.stringify({
        type: "ok"
    }));
}


function bu_jia(request, response, pathName) {
    const data = url.parse( request.url, true ).query;
    // 获取桌号
    const zhuoHao = data.jvIndex;
    // 获取牌局
    const jv = pai_jv[zhuoHao].jv;

    console.log(data.wanJiaName)
    // 保存，当前用户已经进行过加倍处理
    jv.jia_bei.push( data.wanJiaName );

    response.end(JSON.stringify({
        type: "ok"
    }));
}

path.set("chaoji", chao_ji);
path.set("bujia", bu_jia);

module.exports = {
    path
}