

const url = require("url");
const zhuo = require("./fen_zhuo").getZhuo();

const pai_jv = require("./pai_jv.js").get_pai_jv();


const path = new Map();



// 主函数
function jiao_di_zhu(request, response, pathName) {
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
    

    // 叫地主触发后，下次触发的就是抢地主
    jv.jiaoDiZhu = false;
    // 保存地主位置
    jv.diZhuIndex = +data.index;


    response.end(JSON.stringify({
        type: "ok"
    }));
}


function bu_jiao(request, response, pathName) {
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
  
    
    // 不叫，该玩家为平民，进行标记
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



path.set("jiao", jiao_di_zhu);
path.set("bujiao", bu_jiao);

module.exports = {
    path
}