/**
 * 判断是不是存在空余位置的棋桌
 *     存在，往空余位置放人员
 *     不存在，新开一个其桌
 *     如果，某一棋桌的游戏状态为开始游戏状态，即使有空余位置也不能插入人员
 *     当某一棋桌的所有人员都已经离去，要把当前棋桌的游戏状态重置，以便接受新的成员
 * 
 *     如果是智能落子，只有一个用户，另一个用户为机器人，只能新开一个棋桌，一个为机器人
 *     如果是单机的话，只有一个棋盘，只能新开一个棋桌，另一个为空集合
 *         单个用户只能作为第一个用户进行存放，棋盘的创建是根据第一个用户进行创建的
 *         需要使用到用户的一些数据
 */



const url = require("url");
const qiPan = require("./createQiPa").getPaiJv();


// 定义棋桌的宽度和高度
const width = 15;
const height = 15;

const qiZhuo = [];


function getFenZhuoData(request, response, callBack) {
    const pathData = url.parse( request.url, true ).query;
    // 根据状态进行开桌
    const yongHu = kaiType(pathData.type);
    // 保存状态
    yongHu.type = pathData.type;
    // 保存棋盘的尺寸
    yongHu.width = width;
    yongHu.height = height;
    
    
    // 把空桌的游戏状态进行复原
    kongZhuoTypeFuYuan();


    callBack(yongHu);
}

// 根据状态进行开桌
function kaiType(type) {
    // 保存当前用户的信息对象(所在棋桌的索引，所在位置的索引，用户在该棋桌中的标记name)
    let yongHu = {};


    if(type == "单机") {
        yongHu = kai();
    }
    else if(type == "双人") {
        // 遍历所有的棋桌，查看是否有空余位置的棋桌，得到对应的棋桌数据集合，插入新的成员
        const aggre = getKong();
        if( aggre ) {
            // 得到牌桌的那个位置缺少了人
            const index = getIndex(aggre.chengYuan);
            // 创建新用户的信息
            yongHu = createYongData(`${aggre.name}-${index + 1}`, index, aggre.index, aggre.name, createQiColor(aggre));
            // 把新用户信息对象，保存到牌桌中
            aggre.chengYuan[index] = yongHu;
        }
        // 创建一个新的棋桌
        else {
            const xinZuo = xinKai();
            yongHu = xinZuo.chengYuan[0];
        }
    }
    else if(type == "智能") {
        yongHu = kai();
    }
    return yongHu;
}

// 单机和智能开桌，只有操作页面，另一个用户要手动保存
// 这样一个页面才能在开局判断中通过开局判断
function kai() {

    let yongHu = null;

    // 遍历所有的棋桌，进行桌的复用
    for(let i = 0; i < qiZhuo.length; i ++) {
        // 判断当前桌是否为空桌，两个位置都空了
        if( kongZhuoPanDuan(qiZhuo[i]) ) {
            // 游戏状态的复原
            qiZhuo[i].type = false;
            // 对应的棋盘清空
            qiPan[i] = null;

            // 创建新用户的信息
            yongHu = createYongData(`${qiZhuo[i].name}-1`, 0, qiZhuo[i].index, qiZhuo[i].name, "黑");
            // 把新用户信息对象，保存到牌桌中
            qiZhuo[i].chengYuan[0] = yongHu;
            qiZhuo[i].chengYuan[1] = {};

            return yongHu;
        }
    }

    // 新建一个桌
    const xinZuo = xinKai();
    // 手动添加一个用户
    xinZuo.chengYuan[1] = {};

    yongHu = xinZuo.chengYuan[0];
    // 第一个用户的颜色，保证为黑色
    yongHu.qiZiColor = "黑";
    return yongHu;
}

// 新开一个棋桌
function xinKai() {
    // 创建一个新的棋桌
    const xinZuo = createXinZhuo(`A${qiZhuo.length}`, false, qiZhuo.length, [null, null]);
    // 创建新用户的信息
    yongHu = createYongData(`${xinZuo.name}-1`, 0, xinZuo.index, xinZuo.name, createQiColor(xinZuo));
    // 把新用户信息对象，保存到牌桌中
    xinZuo.chengYuan[0] = yongHu;
    // 把牌桌进行保存
    qiZhuo.push(xinZuo);

    return xinZuo;
}

function getKong() {
    for(let i = 0; i < qiZhuo.length; i ++) {
        for( let j = 0; j < qiZhuo[i].chengYuan.length; j ++) {
            // 有空余位置，并且还没有开始游戏
            if( !qiZhuo[i].chengYuan[j] && !qiZhuo[i].type ) return qiZhuo[i];
        }
    }

    return null;
}

// 得到某个牌桌的那个位置缺少了人
function getIndex(arr) {
    for(let i = 0; i < arr.length; i ++) {
        if(!arr[i]) return i;
    }
}

// 创建新用户的信息
function createYongData(name, index, qiZhuoIndex, qiZhuoName, qiZiColor) {
    return {
        name, index, qiZhuoIndex, qiZhuoName, qiZiColor
    }
}

// 创建一个新的棋桌数据集合
function createXinZhuo(name, type, index, chengYuan) {
    return {
        name, type, index, chengYuan
    }
}

// 把空桌的游戏状态进行复原
function kongZhuoTypeFuYuan() {
    // 遍历所有的棋桌
    for(let i = 0; i < qiZhuo.length; i ++) {
        // 判断当前桌是否为空桌
        if( kongZhuoPanDuan(qiZhuo[i]) ) {
            // 游戏状态的复原
            qiZhuo[i].type = false;
            // 对应的棋盘清空
            qiPan[i] = null;
        }
    }
}
// 判断当前桌是否为空桌
function kongZhuoPanDuan(zhuo) {
    const arr = zhuo.chengYuan;
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i]) return false;
    }
    return true;
}
// 创建当前用户的棋子颜色
function createQiColor(data) {
    // 取出玩家数据集合
    const aggre = data.chengYuan;
    // 判断另一个玩家的颜色是否已经固定
    if( aggre[0] ) {
        return createColor(aggre[0].qiZiColor)
    }
    else if( aggre[1] ) {
        return createColor(aggre[1].qiZiColor)
    }
    return createColor();
}
// 产生颜色
function createColor(color) {
    if(!color) return Math.random() - 0.5 > 0 ? "黑" : "白";
    else if( color == "黑" ) return "白";
    else if( color == "白" ) return "黑";
}

module.exports.getFenZhuoData = getFenZhuoData;
module.exports.getQiZhuo = function () {
    return qiZhuo;
}