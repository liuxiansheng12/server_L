/**
 * 用来获取当前可以出牌的玩家
 * 
 * 1. 牌局中的jv数据集合中，有一个chuPaiIndex属性
 *    1) 该属性，就是用来表明当前可以出牌的玩家的索引
 *    2) 当当前玩家出牌牌后，索引就会指向下一个玩家
 * 
 * 2. 由于该请求，在出牌阶段实时请求，所以可以用来判断当前游戏是否结束
 * 
 */



const url = require("url");

// 获取总牌局数据集合
const paiJv = require("./pai_jv.js").get_pai_jv();


const path = new Map();


// 主函数，用来获取可以出牌的玩家
function chuPaiBool(request, response, pathName) {
    // 获取浏览器发送过来的数据
    const data = url.parse( request.url, true ).query;
    // 获取当前玩家，所在桌的牌局
    const zhuoPaiJv = paiJv[data.jvIndex].jv;

    

    // 获取可以出牌的玩家
    const chuPaiIndex = zhuoPaiJv.chuPaiIndex;
    // 获取可以出牌玩家的名称
    const chuPaiName = data.zhuo + (chuPaiIndex + 1);
    // 获取上家出牌的数据集合
    const diPai = zhuoPaiJv.chu_pai;

    // 构建向浏览器发送的数据集合
    const webData = createData("ok", chuPaiIndex, chuPaiName, diPai, null);


    // 进行输赢的判断
    webData.shuYingObj = shuYingObj(data, zhuoPaiJv);
    

    response.end( JSON.stringify(webData) );
}


/**
 * 构建向前端发送的数据集合的方法
 * @param {*} type 状态
 * @param {*} chuPaiIndex 可以出牌玩家，在当前桌中的索引
 * @param {*} chuPaiName 可以出牌玩家，在当前桌中的名称
 * @param {*} diPai 上家出的牌的数据集合
 * @param {*} shuYingObj 输赢信息对象，只要该属性存在，则表示当前牌局已经结束
 */
function createData(type, chuPaiIndex, chuPaiName, diPai, shuYingObj) {
    return {
        type: type,
        chuPaiIndex: chuPaiIndex,
        chuPaiName: chuPaiName,
        diPai: diPai,
        shuYingObj: shuYingObj
    }
}




// 构建输赢对象
function shuYingObj(data, jv) {
    // 得到当前用户的名称
    const wanJiaName = data.wanJiaName;
    // 得到本局地主的名称
    const diZhu = jv.di_zhu[0];
    // 得到胜利集合
    const shengLi = jv.shengLi;
    // 保存输的集合
    const shu = jv.shu;
    // 保存本局的胜利情况
    let shengLiBool = null;


    // 判断本局的胜利情况
    // 胜利集合中只有一个用户胜利，并且该用户为地主，则表示地主胜利
    if(shengLi.length === 1 && shengLi[0] === diZhu) {
        shengLiBool = "地主胜";
    }
    // 胜利集合中有两个用户胜利，第一个为平民，第二个为地主，表示平局
    else if(shengLi.length === 2 && shengLi[1] === diZhu) {
        shengLiBool = "平局";
    }
    // 胜利集合中有两个用户，第一个为平民，第二个也为平民，则表示地主失败
    else if(shengLi.length === 2 && shengLi[0] !== diZhu && shengLi[1] !== diZhu) {
        shengLiBool = "平民胜";
    }
    
    // 如果地主退出，即认输数据集合中只有一个成员即地主，则地主输
    if(shu.length === 1 && shu[0] === diZhu) {
        shengLiBool = "平民胜";
    }
    // 如果当前局退出的成员达到了两个
    // 如果第二个是地主，平局，如果第二个是平民，地主胜
    // 地主不可能出现第一个，上面进行了限制
    else if(shu.length === 2) {
        // 如果是地主，
        if(shu[1] === diZhu) shengLiBool = "平局";
        else if(shu[1] !== diZhu) shengLiBool = "地主胜";
    }
    
    // 如果该属性没有值，表示游戏还在继续
    if(!shengLiBool) return false;


    // 当前用户为地主，构建地主输赢的数据集合
    if( diZhu === wanJiaName ) {
        // 当前用户胜利
        if(shengLiBool == "地主胜") {
            return shengLiData("胜利", jv.beiShu, "地主胜");
        }
        // 平局
        else if(shengLiBool == "平局") {
            return shengLiData("平局", 0, "平局");
        }
        //  表示地主失败
        else if(shengLiBool == "平民胜") {
            return shengLiData("失败", jv.beiShu, "平民胜");
        }
    }
    // 当前用户为平民，构建平民输赢的数据集合
    else {
        // 当前用户胜利
        if(shengLiBool == "平民胜") {
            return shengLiData("胜利", jv.beiShu, "平民胜");
        }
        // 平局
        else if(shengLiBool == "平局") {
            return shengLiData("平局", 0, "平局");
        }
        //  表示地主失败
        else if(shengLiBool == "地主胜") {
            return shengLiData("失败", jv.beiShu, "地主胜");
        }
    }
}


// 构建胜利和失败的数据对象
function shengLiData(type, beishu, shengLiDuiXiang) {
    return {
        type: type,
        beiShu: beishu,
        shengLiDuiXiang
    }
}


path.set("chupaiBool", chuPaiBool);

module.exports = {
    path
}