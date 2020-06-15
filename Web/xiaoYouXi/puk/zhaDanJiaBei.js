
const url = require("url");
// 获取牌局
const pai_jv = require("./pai_jv.js").get_pai_jv();

const path = new Map();
/**
 * 炸弹加倍请求的处理函数
 * @param {*} request 请求
 * @param {*} response 响应
 * @param {*} pathName 请求路径
 */
function zhaDanJiaBei(request, response, pathName) {
    // 获取前端发送过来的数据
    const data = url.parse( request.url, true ).query;
    // 获取发送请求的用户，对应的牌局
    const jv = pai_jv[ data.jvIndex ].jv;

    // 倍数进行翻倍
    jv.beiShu *= 2;
    

    response.end(JSON.stringify({
        type: "ok"
    }));
}


path.set("zhaDanJiaBei", zhaDanJiaBei);


module.exports = {
    path
}