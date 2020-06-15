const url = require("url");
const zhuo = require("./fen_zhuo").getZhuo();
// 获取牌局
const pai_jv = require("./pai_jv.js").get_pai_jv();

const path = new Map();

// 主函数
function bu_chu_pai(request, response, pathName) {
    const data = url.parse( request.url, true ).query;

    // 获取对应的牌局
    const jv = pai_jv[ data.jvIndex ].jv;
    
    // 更新下一家出牌的索引
    const index = getXiaIndex( jv.chuPaiIndex, data, jv );
    jv.chuPaiIndex = index;

    response.end( JSON.stringify({
        type: "ok"
    }) );
}


// 得到下一家出牌的索引
function getXiaIndex(index, data, jv) {
    index ++;
    if(index >= 3) {
        index = 0;
    }

    // 查看下家是否还在，退出或者胜利，都认为不在，退出判断失败
    // 合成用户名
    const wanJiaName = data.zhuo + ( index + 1 );
    // 判断失败和胜利中有没有该用户
    if( jv.shu.indexOf( wanJiaName ) > -1 || jv.shengLi.indexOf( wanJiaName ) > -1) {
        return getXiaIndex(index, data, jv);
    }

    return index;
}


path.set("buChuPai", bu_chu_pai);


module.exports = {
    path
}