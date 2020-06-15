

const url = require("url");
const zhuo = require("./fen_zhuo").getZhuo();

const pai_jv = require("./pai_jv.js").get_pai_jv();

const path = new Map();

// 主函数
function qiang_di_zhu(request, response, pathName) {
    const data = url.parse( request.url, true ).query;

    // 有退出的玩家，不在进行操作
    if( wanTui(data.jvIndex) ) {
        response.end(JSON.stringify({
            type: "ok"
        }));
        return ;
    }


    // 获取桌号
    const zhuoHao = data.jvIndex;
    // 获取牌局
    const jv = pai_jv[zhuoHao].jv;
    

    // 保存地主位置
    jv.diZhuIndex = +data.index;
    // 当前的倍数翻倍
    jv.beiShu *= 2;


    response.end(JSON.stringify({
        type: "ok"
    }));
}


function bu_qiang(request, response, pathName) {
    const data = url.parse( request.url, true ).query;
    
    // 有退出的玩家，不在进行操作
    if( wanTui(data.jvIndex) ) {
        response.end(JSON.stringify({
            type: "ok"
        }));
        return ;
    }

    // 获取桌号
    const zhuoHao = data.jvIndex;
    // 获取牌局
    const jv = pai_jv[zhuoHao].jv;
    
    
    // 不抢，该玩家为平民，进行标记
    jv.ping_min.push( data.wanJiaName );

    response.end(JSON.stringify({
        type: "ok"
    }));
}




// 验证有没有玩家退出
function wanTui (index) {
    const z = zhuo[index].data;
    for(let i = 0; i < z.length; i ++) {
        if( !z[i] ) return true;
    }

    return false;
}



path.set("qiang", qiang_di_zhu);
path.set("buqiang", bu_qiang);

module.exports = {
    path
}