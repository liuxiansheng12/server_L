
const url = require("url");

// 获取牌局
const pai_jv = require("./pai_jv.js").get_pai_jv();


const path = new Map();


// 主函数
function shengLi(request, response, pathName) {
    const data = url.parse( request.url, true ).query;
    // 获取对应的牌局
    const jv = pai_jv[ data.jvIndex ].jv;


    // 把当前胜利的玩家信息，进行保存，用于验证是否可以出牌时，胜利的判断
    jv.shengLi.push( data.wanJiaName );
    

    response.end(JSON.stringify({
        type: "ok"
    }));
}


path.set("shengli", shengLi);

module.exports = {
    path
}