
const url = require("url");
const pai_jv = require("./pai_jv.js").get_pai_jv();

const path = new Map();


// 主函数
function chu_pai(request, response, pathName) {
    const data = url.parse( request.url, true ).query;

    // 获取桌号
    const zhuoHao = data.jvIndex;
    // 获取对应的牌局
    const jv = pai_jv[zhuoHao].jv;


    // 更新牌局信息，把用户出的牌，进行保存
    geng_xin(jv, data);

    response.end(JSON.stringify({
        type: "ok"
    }));
}


function geng_xin(jv, data) {
    const chu_pai = JSON.parse(data.pai);

    // 构建用于保存的出牌对象
    const obj = {
        wanJiaName: data.wanJiaName,
        index: data.index,
        pai: chu_pai.data
    }
    // 保存用户出的牌
    jv.chu_pai.push( obj );

    // 更新下次出牌的玩家索引
    const index = getXiaIndex( jv.chuPaiIndex, data, jv );
    
    jv.chuPaiIndex = index;
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

    // 判断失败和胜利中有没有该用户，有的话直接跳过，表示当前用户的游戏已经结束
    if( jv.shu.indexOf( wanJiaName ) > -1 || jv.shengLi.indexOf( wanJiaName ) > -1) {
        return getXiaIndex(index, data, jv);
    }

    return index;
}


path.set("chuPai", chu_pai);

module.exports = {
    path
}