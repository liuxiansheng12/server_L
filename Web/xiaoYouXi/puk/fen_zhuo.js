/**
 * 分桌操作
 * 1. 来了一个用户，对该用户进行分桌处理
 * 2. 找到一个对应的桌，把用户加入该桌中，然后向浏览器返回对应的分桌数据
 * 3. 分桌的情况
 *    1) 桌子有空余的位置，则把当前用户插入该桌中的空余位置
 *       1) 当前桌子，如果已经开始游戏，但是中途有人退场，不允许中途加人
 *       2) 即，只有没有开始游戏的桌子可以中途加人
 *       3) 所以，需要在桌子中，加人游戏是否开始的标记
 *       4) 当桌中的人员已经满足三个，则当前桌开局，游戏开始标记置为true
 *       5) 游戏开始的标记，在判断是否满员的处理中进行操作
 *    2) 没有空余的桌子，新创建一桌，当前玩家作为第一个用户
 */

const path = new Map();

// 保存桌
const zhuo = [];
/**
 * 桌的格式
 * {
 *     name: ?
 *     data: [
 *         // 玩家1
 *         {
 *             name: ?
 *             zhuoName: ?
 *             index: ?
 *         }
 *         // 玩家2，
 *         {}
 *         // 玩家3
 *         {}
 *     ]
 * }
 */


function fenZhuo(request, response, pathName) {
    // 进行分桌，得到分桌数据
    const data = fen();
    response.end( JSON.stringify(data) );
}



// 分桌函数
function fen() {
    
    // 保存当前用户创建的桌数据
    let data = null;


    /*******两种分桌情况*******************/
    // 得到某桌中是否有空余位置，如果有得到下标，下标加1处理，防止0下标判断失误
    const xiaIndex = zhuo_cha();
    // 有空余的桌
    if(xiaIndex) {
        // 获取缺少人员的桌
        const queRen = zhuo[xiaIndex - 1];
        // 得到该桌中，那个位置缺少了人员
        const index = queIndex(queRen);
        // 创建对应的用户桌数据
        data = createYongHuZhuoData(queRen.name + (index + 1), queRen.name, index, xiaIndex - 1);
        // 把对应的人员信息，添加到缺少人员的桌中
        queRen.data[index] = data;
    }
    // 没有空余的桌
    else {
        // 生成新桌的名称
        const name = zhuo.length + "桌";
        // 创建一个新桌，[null, null, null]表示该桌的三个空位置
        const xinZhuo = createXinZhuoData(name, [null, null, null]);
        // 当前的人员作为该桌中的第一个成员，创建对应的用户桌数据
        data = createYongHuZhuoData(xinZhuo.name + 1, xinZhuo.name, 0, zhuo.length);
        // 把当前的用户桌数据，保存到新桌中
        xinZhuo.data[0] = data;
        // 把新桌保存到全局桌中
        zhuo.push(xinZhuo);
    }
    
    // 把当前用户的桌数据返回
    return data;
}


/**
 * 创建对应的用户桌数据
 * @param {*} name 用户的名称
 * @param {*} zhuoName 用户所在桌的名称
 * @param {*} index 用户在桌中的位置，即用户的索引
 * @param {*} jvIndex 用户所在桌，是位于第几桌，即桌的索引
 */
function createYongHuZhuoData(name, zhuoName, index, jvIndex) {
    return {
        name: name,
        zhuoName: zhuoName,
        index: index,
        jvIndex: jvIndex
    }
}

/**
 * 创建一个桌数据
 * @param {*} name 桌的名称
 * @param {*} data 桌中的成员，格式为数组
 */
function createXinZhuoData(name, data) {
    return {
        name: name,
        data: data,
        // 开始游戏的标记，刚开始时使用默认值
        kai_shi: false
    }

}


/**
 * 得到某桌缺少人数，桌的下标，如果最终返回false，则表示所有的桌都不能中途加入人员
 */
function zhuo_cha() {
    // 遍历所有桌的数据集合
    for(let i = 0; i < zhuo.length; i ++) {
        // 判断当前桌是否已经开始了游戏
        // 如果有，不进行人员的添加，进而执行下一个循环，判断下一桌
        if(zhuo[i].kai_shi) continue;

        // 遍历当前桌的成员位置，查看是否有空余的人员
        for(let j = 0; j < zhuo[i].data.length; j ++ ) {
            // 表示该桌中存在空余人员
            if(!zhuo[i].data[j]) return i + 1;
            // 加1为了防止0，判断时为false
        }
    }

    return false;
}


/**
 * 得到某桌中，空余人员的位置，用来插入新人员
 * @param {*} queZhuo 要查询的桌
 */
function queIndex(queZhuo) {
    // 循环该桌的成员集合，判断有没有缺少人数的位置
    for(let i = 0; i < queZhuo.data.length; i ++) {
        // 如果有，直接返回下标
        if(!queZhuo.data[i]) return i;
    }
}


path.set("puk", fenZhuo);

module.exports = {
    // 获取所有桌数组的方法
    getZhuo() {
        return zhuo;
    },

    path
}





