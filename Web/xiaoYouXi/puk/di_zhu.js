
const url = require("url");
const zhuo = require("./fen_zhuo").getZhuo();
const pai_jv = require("./pai_jv.js").get_pai_jv();
const create_pai_jv = require("./pai_jv.js").create_pai_jv;

const path = new Map();


// 主函数
function qiang_di_zhu(request, response, pathName) {
    const data = url.parse( request.url, true ).query;
    // 获取桌号
    const zhuoHao = data.jvIndex;
    // 获取牌局
    let jv = pai_jv[zhuoHao].jv;
    

    // 构建数据
    const obj = {
        jiao: false,
        qiang: false,
        jiabei: false,
        chuPai: false,
        // 重开标识，当前玩家进行重新拿牌
        chongKai: false,
        // 标识哪家是地主
        di_zhu: jv.di_zhu[0],
        diZhuIndex: jv.diZhuIndex
    };


    // 重开处理
    // 三个玩家都是平民，或者有玩家退出
    if( jv.ping_min.length == 3 || wanTui() ) {
        obj.chongKai = true;

        // 重新开局，下面的操作不需要在进行
        response.end( JSON.stringify(obj) );
        return ;
    }
    



    // 叫地主操作
    // 玩家位置，与地主标记位置相同，触发抢地主和叫地主操作
    // 只有第一个地主，才是叫地主，其它玩家都是抢地主
    if( yiJiao(jv.diZhuIndex) == data.index && jv.jiaoDiZhu) {
        // 初始地主，并且没有进行过叫地主操作
        // 如果第一家不叫地主，初始地主是可以下移的
        obj.jiao = true;
    }
    // 抢地主，!jv.jiaoDiZhu表示叫地主已经触发，当前地主还没有确定
    // 该请求是实时发送的，地主确定完，还有可能再次请求
    else if( yiJiao(jv.diZhuIndex) == data.index && 
             !jv.jiaoDiZhu && 
             jv.di_zhu.length === 0 &&
             // 如果有两户触发的是不叫或者不抢，则两户为平民
             // 只有一户可以叫地主，无法触发抢地主环节
             jv.ping_min.length < 2       
            ) {
        obj.qiang = true;
    }



    // 固定地主，两个平民，或者倍数等于8，即发生了三次抢地主行为，最后一次为地主
    // 平民等于2的情况，叫地主必须要触发过
    if( jv.di_zhu.length === 0) {
        if( jv.beiShu === 8 || (jv.ping_min.length == 2 && !jv.jiaoDiZhu) ) {
            // 最后一次地主已经发生了移动，要移回去
            const index = jv.diZhuIndex;
            // 保存地主标记
            jv.di_zhu.push( data.zhuo + (index + 1) );
            // 更新出牌的位置，地主出牌
            jv.chuPaiIndex = index;
        }
    }



    // 地主固定好后，就需要触发超级加倍的处理情况
    // 地主已经固定，并且当前用户没有进行过加倍处理
    if( jv.di_zhu.length == 1 && jv.jia_bei.indexOf( data.wanJiaName ) === -1 ) {
        obj.jiabei = true;
    }
    // 所有的用户都已经进行过加倍处理，表示可以出牌
    if( jv.jia_bei.length === 3 ) {
        obj.chuPai = true;
    }
    response.end( JSON.stringify(obj) );



    // 验证有没有玩家退出
    function wanTui () {
        const z = zhuo[zhuoHao].data;
        for(let i = 0; i < z.length; i ++) {
            if( !z[i] ) return true;
        }

        return false;
    }


    // 得到下家地主的位置
    function yiJiao(diZhuIndex) {
        // 初始地主进行移交，下一个玩家触发叫地主，下个玩家是平民，继续移交
        let index = diZhuIndex;
        index ++ ;
        if( index >= 3 ) index = 0;
        // 下一家地主是否为平民，如果是继续移交
        if( jv.ping_min.indexOf( data.zhuo + (index + 1) ) > -1 ) {
            return yiJiao(index)
        }
        return index;
    }
}



path.set("jiaoDiZhu", qiang_di_zhu);

module.exports = {
    path
}


