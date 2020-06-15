function jieShu(yongHuData, paiJv) {
    const qiZhiData = paiJv.qiData;
    const data = forEach(yongHuData, qiZhiData);
    return data;
}

// 遍历整个牌局，确定每一个棋子是否已经构成了结束的条件
function forEach(yongHuData, data) {
    for(let i = 0; i < data.length; i ++) {
        for(let j = 0; j < data[i].length; j ++) {
            const d = data[i][j];
            if( qiZhiYanZheng(d, yongHuData, data) ) {
                return {
                    color: d.qiZiColor
                }
            }
        }
    }
    return false;
}
// 验证某个棋子是否结束的方法
function qiZhiYanZheng(qiZhi, yongHuData, qiZhiData) {
    // 当前位置还没有落子，不进行处理
    if(!qiZhi) return false;

    return you(qiZhi.x, qiZhi.y, qiZhi.qiZiColor, yongHuData, qiZhiData, 5) ||
           zong(qiZhi.x, qiZhi.y, qiZhi.qiZiColor, yongHuData, qiZhiData, 5) ||
           youXia(qiZhi.x, qiZhi.y, qiZhi.qiZiColor, yongHuData, qiZhiData, 5) ||
           zuoXia(qiZhi.x, qiZhi.y, qiZhi.qiZiColor, yongHuData, qiZhiData, 5)
}

// 横向验证
function you(x, y, color, yongHuData, qiZhiData, i) {
    // 验证是否已经超出边界
    if(i == 0) return true;
    if( bian(x, y, yongHuData) ) return false;
    
    // 当前位置没有棋子或者棋子颜色不同，不进行处理
    if(!qiZhiData[y] || !qiZhiData[y][x] || qiZhiData[y][x].qiZiColor !== color ) return false;
    i -= 1;
    
    return you(x + 1, y, color, yongHuData, qiZhiData, i);
}
// 纵向验证
function zong(x, y, color, yongHuData, qiZhiData, i) {
    // 验证是否已经超出边界
    if(i == 0) return true;
    if( bian(x, y, yongHuData) ) return false;
    // 当前位置没有棋子或者棋子颜色不同，不进行处理
    if( !qiZhiData[y] || !qiZhiData[y][x] || qiZhiData[y][x].qiZiColor !== color ) return false;
    i -= 1;
    return zong(x, y + 1, color, yongHuData, qiZhiData, i);
}
// 右下验证
function youXia(x, y, color, yongHuData, qiZhiData, i) {
    // 验证是否已经超出边界
    if(i == 0) return true;
    if( bian(x, y, yongHuData) ) return false;
    // 当前位置没有棋子或者棋子颜色不同，不进行处理
    if( !qiZhiData[y] || !qiZhiData[y][x] || qiZhiData[y][x].qiZiColor !== color ) return false;
    i -= 1;
    return youXia(x + 1, y + 1, color, yongHuData, qiZhiData, i);
}
// 左下验证
function zuoXia(x, y, color, yongHuData, qiZhiData, i) {
    // 验证是否已经超出边界
    if(i == 0) return true;
    if( bian(x, y, yongHuData) ) return false;
    // 当前位置没有棋子或者棋子颜色不同，不进行处理
    if( !qiZhiData[y] || !qiZhiData[y][x] || qiZhiData[y][x].qiZiColor !== color ) return false;
    i -= 1;
    return zuoXia(x - 1, y + 1, color, yongHuData, qiZhiData, i);
}


// 验证是否已经遍历到边界
function bian(x, y, yongHuData) {
    if( x < 0 || y < 0 || x >= yongHuData.width || y >= yongHuData.height ) return true;
    return false;
}

module.exports = jieShu;