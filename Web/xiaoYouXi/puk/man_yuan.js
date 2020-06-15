/**
 * 满员处理开始游戏
 * 1. 当一个桌中的人数，达到了三个，则该桌开始游戏，进行拿牌叫地主操作
 * 
 * 2. 当前桌，满员后，即开始游戏，则当前桌的开始游戏标志置为true，表示中途不可以加入人员
 * 3. 有的桌，所有成员都走空后，则该桌的游戏开始标记置为false，该桌可以再次加入成员
 *    1) 开始游戏，无论是否重开，都是使用的重新分桌的处理
 *    2) 重开，当前桌的游戏状态，已经是开始状态，即使重开，用户也不会分到该桌中
 *    3) 所以只要是重新开局，当前桌的人员就会走空，此时把游戏状态关闭
 *    4) 即当前桌可以再次接受三个成员，进行游戏
 * 
 * 4. 当前桌满员后，即意味着，游戏即将开始，所以要分好牌，为浏览器拿牌做好准备
 *    1) 分牌操作，即创建牌局数据集合，表示当前牌局即将开始
 *    2) 并且牌局在总牌局数据集合中的位置，与牌桌在总牌桌中的位置是相同的
 *    3) 由于三个玩家都会发送满员请求，所以为了防止三个玩家重复创建牌局，要进行限制
 *    4) 只允许一个玩家创建牌局
 * 
 * 5. 由于，只允许一个玩家创建牌局，但是三个玩家发送请求的时间不固定
 *    1) 所以要等牌局创建完成后，才能进行拿牌处理
 * 
 * 
 * 6. 还原某个桌的游戏状态时，要把对应桌创建的牌局也给初始化
 *    1) 当下次该桌加入人员的时候，会影响到该桌成员的拿牌，有可能还是拿的之前创建的牌局的牌
 *    2) 原因: 三个用户只有一个可以创建牌局，但是三个用户发送请求的时间并不是顺序发送
 *    3) 就有可能造成，拿牌时，拿到之前创建的牌局中的牌
 */



const url = require("url");

// 获取总桌集合
const zhuo = require("./fen_zhuo.js").getZhuo();
// 创建牌局的方法
const createPaiJv = require("./pai_jv.js").create_pai_jv;
// 获取总牌局集合
const paiJv = require("./pai_jv.js").get_pai_jv();


const path = new Map();


// 主函数
function manYuan(request, response, pathName) {
    // 获取浏览器发送的数据，当前用户的信息
    const data = url.parse( request.url, true ).query;
    // 创建向浏览器发送的默认数据，即状态为none，不进行拿牌操作
    const webData = createManYuanData("no");

    // 判断当前桌是否为满员状态
    if( manYuanYN(zhuo[data.jvIndex]) ) {
        // 满员即开始游戏，不在进行人员的插入，即使有人中途退出
        zhuo[data.jvIndex].kai_shi = true;
        // 还原桌的游戏状态
        zhuoInit();
        
        // 满员后，创建对应桌的牌局，只能一个用户创建牌局，防止三个玩家都创建一次牌局
        if( data.index == 0 ) {
            // 创建牌局
            createPaiJv(data.jvIndex, data.zhuo);
        } 

        // 当对应桌的牌局创建完成后，用户就可以进行拿牌操作了
        if( paiJv[data.jvIndex] ) {
            webData.type = "yes";
        }
    }
    
    response.end( JSON.stringify(webData) );
}


/**
 * 创建满员请求，向浏览器返回的数据集合的方法，用来表明是否可以进行拿牌操作
 * @param {*} type 状态，默认状态为no
 * 当状态变为yes的时候，表示牌局已经创建完成可以进行拿牌处理拿了
 */
function createManYuanData(type) {
    return {
        type: type
    }
}


/**
 * 用来验证，某个桌的成员是否为满员状态
 * @param {*} zhuoData 对应桌的数据集合
 */
function manYuanYN(zhuoData) {
    // 人员少于3，不满员
    if(zhuoData.data.length < 3) {
        return false;
    }
    // 当前桌有空余位置，不满员
    for( let i = 0; i < zhuoData.data.length; i++ ) {
        if( !zhuoData.data[i] ) return false;
    }
    
    // 以上条件都不满足，当前桌为满员状态，可以进行牌局的创建
    return true;
}


/**
 * 用来还原桌状态的函数
 */
function zhuoInit() {
    // 遍历所有的桌
    zhuo.forEach( (k, i) => {
        let bool = true;
        // 遍历该桌的成员集合
        k.data.forEach( s => {
            // 只要有成员，不进行桌的还原
            if(s) bool = false;
        } )

        // 进行桌的还原，即关闭对应桌的游戏状态，并且清空对应的牌局
        if(bool) {
            // 开始游戏标志复原
            zhuo[i].kai_shi = false;
            // 清空对应的牌局
            paiJv[i] = null;
        }
    } )
}


path.set("manYuan", manYuan);

module.exports = {
    path
}